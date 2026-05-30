import { randomBytes } from "crypto";
import * as fs from "fs";
import * as path from "path";

import { Message, ThreadChannel } from "discord.js";

import { codexExec, codexResume, CodexResult } from "./codexClient";
import { Config } from "./config";
import { DiscordApi, DiscordConfig } from "./discordApi";
import { createWorktreeSession } from "./gitWorktree";
import { LlmSessionLogger } from "./llmLogger";
import { Logger } from "./logger";
import { BOT_SOURCE_DIR, getSandboxDir, SNAPSHOT_REPOS, syncBotSource } from "./paths";
import { gamecodeName } from "./gamecodes";
import { buildUserMentionResponsePreamble, getMainInstructions, getStdinPreamble } from "./prompts";
import { ThreadRegistry } from "./threadRegistry";

const TAG = "DiscordListener";

/** Max size (in bytes) of an attachment we'll attempt to download. */
const MAX_ATTACHMENT_SIZE = 50_000;

/** Content-type prefixes we consider text-like and safe to inline. */
const TEXT_CONTENT_TYPES = ["text/", "application/json", "application/xml"];

/**
 * Downloads text-based attachments from a Discord message and returns their
 * contents formatted for inclusion in a prompt.  Non-text or oversized
 * attachments are skipped with a note.
 */
async function downloadTextAttachments(message: Message, logger: Logger): Promise<string> {
    if (!message.attachments || message.attachments.size === 0) return "";

    const parts: string[] = [];

    const attachments = Array.from(message.attachments.values());
    for (const attachment of attachments) {
        const name = attachment.name ?? "unknown";
        const size = attachment.size ?? 0;

        // Skip oversized attachments
        if (size > MAX_ATTACHMENT_SIZE) {
            parts.push(`[Attachment "${name}" skipped — too large (${size} bytes)]`);
            continue;
        }

        // Determine if it's text-like by extension or content type
        const isTextByType = attachment.contentType
            ? TEXT_CONTENT_TYPES.some((t) => attachment.contentType!.startsWith(t))
            : false;
        const isTextByExt =
            /\.(txt|md|log|json|xml|csv|gsl|rb|py|js|ts|yaml|yml|toml|cfg|ini|patch|diff)$/i.test(
                name,
            );

        if (!isTextByType && !isTextByExt) {
            parts.push(
                `[Attachment "${name}" skipped — not a text file (${attachment.contentType ?? "unknown type"})]`,
            );
            continue;
        }

        try {
            const attachmentUrl = new URL(attachment.url);
            if (
                !attachmentUrl.hostname.endsWith(".discordapp.com") &&
                !attachmentUrl.hostname.endsWith(".discord.com")
            ) {
                parts.push(`[Attachment "${name}" skipped — untrusted origin]`);
                continue;
            }
            const response = await fetch(attachment.url, {
                signal: AbortSignal.timeout(10000),
            });
            if (!response.ok) {
                parts.push(`[Attachment "${name}" — download failed: HTTP ${response.status}]`);
                continue;
            }
            const text = await response.text();
            parts.push(`--- Attachment: ${name} ---\n${text}\n--- End of ${name} ---`);
        } catch (err) {
            logger.error(TAG, `Failed to download attachment "${name}"`, err);
            parts.push(`[Attachment "${name}" — download error]`);
        }
    }

    return parts.length > 0 ? "\n\n" + parts.join("\n\n") : "";
}

export const THREAD_CONTEXT_MESSAGE =
    "📌 **This thread is linked to an agent session.** " +
    "Please reply here to keep the conversation in context. " +
    "Messages outside this thread will start a new session. To get the " +
    "agent's attention, you must @ or reply to it.\n" +
    "---";

/**
 * Starts listening for @-mentions of the bot in the configured guild.
 * - If mentioned inside a thread the bot owns: resumes the existing codex session.
 * - If mentioned outside a bot thread: creates a new codex session + thread.
 */
export async function startDiscordListener(
    config: Config,
    discordConfig: DiscordConfig,
    discord: DiscordApi,
    registry: ThreadRegistry,
    logger: Logger,
    abortSignal: AbortSignal,
    llmLogger?: LlmSessionLogger,
): Promise<void> {
    const client = discord.getClient();
    const botUserId = client.user?.id;
    if (!botUserId) {
        logger.error(TAG, "Bot user ID not available — listener not started.");
        return;
    }

    logger.info(TAG, `Listening for mentions of bot (${botUserId}).`);

    // Track in-flight operations per thread so follow-up messages can wait
    // for the initial session to finish (and register) before checking the registry.
    const inflightThreads = new Map<string, Promise<void>>();

    // Prevent duplicate processing from Discord gateway replays.
    // Stores recently-seen message IDs for a short window.
    const seenMessages = new Set<string>();

    const handler = async (message: Message) => {
        // Ignore messages from the bot itself
        if (message.author.id === botUserId) return;

        // Only respond if the bot is @-mentioned
        if (!message.mentions.has(botUserId)) return;

        // Ensure message is in the configured guild
        if (message.guildId !== discordConfig.guildId) return;

        // Check role restriction (if configured)
        if (config.agentHandlerRoleId) {
            const member =
                message.member ?? (await message.guild?.members.fetch(message.author.id));
            if (!member?.roles.cache.has(config.agentHandlerRoleId)) {
                return;
            }
        }

        // Drop duplicate events from gateway replays
        if (seenMessages.has(message.id)) return;
        seenMessages.add(message.id);
        setTimeout(() => seenMessages.delete(message.id), 60000);

        // Strip the mention from the user message to get the prompt
        // Remove both user mentions (<@id>, <@!id>) and role mentions (<@&id>)
        const prompt = message.content
            .replace(new RegExp(`<@!?${botUserId}>`, "g"), "")
            .replace(/<@[!&]?\d+>/g, "")
            .trim();

        if (!prompt) {
            await message.reply("Please include a question or message after the mention.");
            return;
        }

        const threadId = message.channel.isThread() ? message.channel.id : undefined;

        // If there's an in-flight operation for this thread, wait for it to finish
        // so the registry is populated before we check it.
        if (threadId && inflightThreads.has(threadId)) {
            logger.info(
                TAG,
                `Waiting for in-flight operation on thread ${threadId} to complete...`,
            );
            await inflightThreads.get(threadId);
        }

        try {
            if (threadId && registry.hasThread(threadId)) {
                // Mentioned inside a thread the bot owns — resume session
                const op = handleResumeInThread(
                    config,
                    discord,
                    registry,
                    message,
                    prompt,
                    threadId,
                    logger,
                    abortSignal,
                    llmLogger,
                );
                inflightThreads.set(
                    threadId,
                    op.then(() => {}).catch(() => {}),
                );
                await op;
                inflightThreads.delete(threadId);
            } else if (threadId) {
                // Mentioned inside a thread the bot doesn't know about
                // (e.g. registry lost due to restart) — start new session in existing thread
                const op = handleNewSessionInThread(
                    config,
                    discord,
                    registry,
                    message,
                    prompt,
                    threadId,
                    logger,
                    abortSignal,
                    llmLogger,
                );
                inflightThreads.set(
                    threadId,
                    op.then(() => {}).catch(() => {}),
                );
                await op;
                inflightThreads.delete(threadId);
            } else {
                // Mentioned outside a thread — start new session + create thread
                await handleNewSession(
                    config,
                    discord,
                    registry,
                    message,
                    prompt,
                    logger,
                    abortSignal,
                    inflightThreads,
                    llmLogger,
                );
            }
        } catch (e: unknown) {
            // Discord error 160004 = "A thread has already been created for this message".
            // This happens when a gateway replay causes duplicate processing — safe to ignore.
            const isThreadExists =
                e instanceof Error && "code" in e && (e as { code: unknown }).code === 160004;
            if (isThreadExists) {
                logger.info(
                    TAG,
                    `Ignoring duplicate thread-creation attempt for message ${message.id}`,
                );
                return;
            }
            logger.error(TAG, `Error handling mention from ${message.author.tag}`, e);
            try {
                await message.reply(
                    "Something went wrong processing your request. Please try again.",
                );
            } catch {
                /* best effort */
            }
        }
    };

    client.on("messageCreate", handler);

    // Wait until abort
    await new Promise<void>((resolve) => {
        if (abortSignal.aborted) {
            resolve();
            return;
        }
        abortSignal.addEventListener("abort", () => resolve(), { once: true });
    });

    client.off("messageCreate", handler);
    logger.info(TAG, "Stopped.");
}

async function handleResumeInThread(
    config: Config,
    discord: DiscordApi,
    registry: ThreadRegistry,
    message: Message,
    prompt: string,
    discordThreadId: string,
    logger: Logger,
    abortSignal: AbortSignal,
    llmLogger?: LlmSessionLogger,
): Promise<void> {
    const sessionId = registry.getSessionId(discordThreadId);
    if (!sessionId) {
        // Session expired between hasThread() check and here — fall through to new session
        logger.warn(
            TAG,
            `Session for thread ${discordThreadId} expired before resume — starting fresh.`,
        );
        return handleNewSessionInThread(
            config,
            discord,
            registry,
            message,
            prompt,
            discordThreadId,
            logger,
            abortSignal,
            llmLogger,
        );
    }
    logger.info(TAG, `Resuming session ${sessionId} in thread ${discordThreadId}`);

    const thread = message.channel as ThreadChannel;
    await thread.sendTyping();

    // Keep the typing indicator alive while the agent works
    const typingInterval = setInterval(() => {
        thread.sendTyping().catch(() => {});
    }, 8000);

    // Fetch recent thread messages for context (excluding bot messages)
    const recentMessages = await discord.fetchThreadMessages(thread);

    // Build context from thread history (excluding the current message)
    const contextLines: string[] = [];
    for (const msg of recentMessages) {
        if (msg.id === message.id) {
            continue; // skip the current trigger message
        }
        const ts = msg.timestamp
            .toISOString()
            .replace("T", " ")
            .replace(/\.\d+Z$/, " UTC");
        contextLines.push(`[${ts}] ${msg.author}: ${msg.content}`);
    }

    // Build the full prompt with sender info and thread context
    const senderName = message.author.displayName || message.author.username;
    const sendTime = message.createdAt
        .toISOString()
        .replace("T", " ")
        .replace(/\.\d+Z$/, " UTC");
    const attachmentText = await downloadTextAttachments(message, logger);
    const gitSnapshotList = SNAPSHOT_REPOS.map((r) => `./${r}`).join(" and ");
    const instanceName = gamecodeName(config.instance);
    const sourceChannelId = (message.channel as ThreadChannel).parentId ?? message.channelId;
    let fullPrompt =
        getStdinPreamble(gitSnapshotList, instanceName) +
        buildUserMentionResponsePreamble(sourceChannelId) +
        "\n\n";
    fullPrompt += "<userMessage>\n";
    if (contextLines.length > 0) {
        fullPrompt += "Recent thread conversation:\n" + contextLines.join("\n") + "\n\n";
    }
    fullPrompt += `[${sendTime}] ${senderName} says:\n${prompt}${attachmentText}`;
    fullPrompt += "\n</userMessage>";

    const nonce = randomBytes(4).toString("hex");
    const outputPath = path.join(config.resultsDir, `reply-${Date.now()}-${nonce}.md`);

    const result = await codexResume(
        {
            sessionId,
            prompt: fullPrompt,
            outputReportPath: outputPath,
            workdir: getSandboxDir(),
            model: config.codexModel,
            reasoning: config.codexReasoningEffort,
            timeoutMs: 300000,
            abortSignal,
        },
        logger,
        llmLogger,
    );
    clearInterval(typingInterval);

    await postCodexResponse(
        config,
        discord,
        thread,
        result,
        outputPath,
        registry,
        discordThreadId,
        logger,
    );
}

async function handleNewSessionInThread(
    config: Config,
    discord: DiscordApi,
    registry: ThreadRegistry,
    message: Message,
    prompt: string,
    discordThreadId: string,
    logger: Logger,
    abortSignal: AbortSignal,
    llmLogger?: LlmSessionLogger,
): Promise<void> {
    logger.info(
        TAG,
        `New session in existing thread ${discordThreadId} requested by ${message.author.tag}: "${prompt.slice(0, 80)}"`,
    );

    const thread = message.channel as ThreadChannel;
    await discord.sendThreadMessage(
        thread,
        "⚠️ I lost my session history for this thread (likely due to a bot restart or registry reset). " +
            "Starting a fresh session — I'll use the recent thread messages for context, but my previous reasoning state is gone.",
    );
    await thread.sendTyping();

    // Keep the typing indicator alive while the agent works
    const typingInterval = setInterval(() => {
        thread.sendTyping().catch(() => {});
    }, 8000);

    const nonce = randomBytes(4).toString("hex");
    const outputPath = path.join(config.resultsDir, `reply-${Date.now()}-${nonce}.md`);

    // Create isolated worktrees for this session
    const worktrees = await createWorktreeSession(
        config.worktreeBaseDir,
        `mention-${Date.now()}-${nonce}`,
        logger,
    );

    // Fetch recent thread messages for context
    const recentMessages = await discord.fetchThreadMessages(thread);
    const contextLines: string[] = [];
    for (const msg of recentMessages) {
        if (msg.id === message.id) continue;
        const ts = msg.timestamp
            .toISOString()
            .replace("T", " ")
            .replace(/\.\d+Z$/, " UTC");
        contextLines.push(`[${ts}] ${msg.author}: ${msg.content}`);
    }

    // Include sender and timestamp in the prompt
    const senderName = message.author.displayName || message.author.username;
    const sendTime = message.createdAt
        .toISOString()
        .replace("T", " ")
        .replace(/\.\d+Z$/, " UTC");
    const attachmentText = await downloadTextAttachments(message, logger);
    const gitSnapshotList = worktrees.dirs
        .map((d) => `./${path.relative(getSandboxDir(), d)}`)
        .join(" and ");
    const instanceName = gamecodeName(config.instance);
    const sourceChannelId = (message.channel as ThreadChannel).parentId ?? message.channelId;
    let stdinContent =
        getStdinPreamble(gitSnapshotList, instanceName) +
        buildUserMentionResponsePreamble(sourceChannelId) +
        "\n\n";
    stdinContent += "<userMessage>\n";
    if (contextLines.length > 0) {
        stdinContent += "Recent thread conversation:\n" + contextLines.join("\n") + "\n\n";
    }
    stdinContent += `[${sendTime}] ${senderName} says:\n${prompt}${attachmentText}`;
    stdinContent += "\n</userMessage>";

    syncBotSource();

    let result;
    try {
        result = await codexExec(
            {
                prompt: getMainInstructions(),
                evidence: stdinContent,
                outputReportPath: outputPath,
                workdir: getSandboxDir(),
                model: config.codexModel,
                reasoning: config.codexReasoningEffort,
                additionalDirs: [
                    path.dirname(outputPath),
                    config.codexWorkdir,
                    ...worktrees.dirs,
                    path.join(getSandboxDir(), BOT_SOURCE_DIR),
                ],
                timeoutMs: 300000,
                abortSignal,
            },
            logger,
            llmLogger,
        );
    } finally {
        clearInterval(typingInterval);
        worktrees.cleanup();
    }

    await postCodexResponse(
        config,
        discord,
        thread,
        result,
        outputPath,
        registry,
        discordThreadId,
        logger,
    );
}

async function handleNewSession(
    config: Config,
    discord: DiscordApi,
    registry: ThreadRegistry,
    message: Message,
    prompt: string,
    logger: Logger,
    abortSignal: AbortSignal,
    inflightThreads: Map<string, Promise<void>>,
    llmLogger?: LlmSessionLogger,
): Promise<void> {
    logger.info(TAG, `New session requested by ${message.author.tag}: "${prompt.slice(0, 80)}"`);

    // Create a thread for this conversation
    const threadName = `💬 ${message.author.displayName}: ${prompt.slice(0, 70)}`;
    const thread = await message.startThread({
        name: threadName.slice(0, 100),
        autoArchiveDuration: 1440,
    });

    logger.info(TAG, `handleNewSession: created thread ${thread.id} for message ${message.id}`);

    // Register this thread as in-flight so follow-up messages wait for us
    let resolveInflight: () => void;
    const inflightPromise = new Promise<void>((r) => {
        resolveInflight = r;
    });
    inflightThreads.set(thread.id, inflightPromise);

    try {
        await thread.sendTyping();

        // Keep the typing indicator alive while the agent works
        const typingInterval = setInterval(() => {
            thread.sendTyping().catch(() => {});
        }, 8000);

        // Post the context message
        await discord.sendThreadMessage(thread, THREAD_CONTEXT_MESSAGE);
        await thread.sendTyping();

        const nonce = randomBytes(4).toString("hex");
        const outputPath = path.join(config.resultsDir, `reply-${Date.now()}-${nonce}.md`);

        // Create isolated worktrees for this session
        const worktrees = await createWorktreeSession(
            config.worktreeBaseDir,
            `mention-${Date.now()}-${nonce}`,
            logger,
        );

        // Include sender and timestamp in the prompt
        const senderName = message.author.displayName || message.author.username;
        const sendTime = message.createdAt
            .toISOString()
            .replace("T", " ")
            .replace(/\.\d+Z$/, " UTC");
        const attachmentText = await downloadTextAttachments(message, logger);
        const gitSnapshotList = worktrees.dirs
            .map((d) => `./${path.relative(getSandboxDir(), d)}`)
            .join(" and ");
        const instanceName = gamecodeName(config.instance);
        const sourceChannelId = message.channelId;
        const stdinContent =
            getStdinPreamble(gitSnapshotList, instanceName) +
            buildUserMentionResponsePreamble(sourceChannelId) +
            "\n\n<userMessage>\n" +
            `[${sendTime}] ${senderName} says:\n${prompt}${attachmentText}` +
            "\n</userMessage>";

        syncBotSource();

        let result;
        try {
            result = await codexExec(
                {
                    prompt: getMainInstructions(),
                    evidence: stdinContent,
                    outputReportPath: outputPath,
                    workdir: getSandboxDir(),
                    model: config.codexModel,
                    reasoning: config.codexReasoningEffort,
                    additionalDirs: [
                        path.dirname(outputPath),
                        config.codexWorkdir,
                        ...worktrees.dirs,
                        path.join(getSandboxDir(), BOT_SOURCE_DIR),
                    ],
                    timeoutMs: 300000,
                    abortSignal,
                },
                logger,
                llmLogger,
            );
        } finally {
            clearInterval(typingInterval);
            worktrees.cleanup();
        }

        await postCodexResponse(
            config,
            discord,
            thread,
            result,
            outputPath,
            registry,
            thread.id,
            logger,
        );
    } finally {
        // Always signal completion so follow-up messages don't hang forever
        resolveInflight!();
        inflightThreads.delete(thread.id);
    }
}

async function postCodexResponse(
    config: Config,
    discord: DiscordApi,
    thread: ThreadChannel,
    result: CodexResult,
    outputPath: string,
    registry: ThreadRegistry,
    discordThreadId: string,
    logger: Logger,
): Promise<void> {
    const modelName = config.codexModel || "codex";
    const reasoning = config.codexReasoningEffort;

    // Register the thread whenever we have a session ID, regardless of outcome.
    // This ensures sessions survive restarts even if the request was aborted.
    const sessionId = result.threadId;
    logger.info(
        TAG,
        `postCodexResponse: result.kind=${result.kind}, threadId=${sessionId ?? "(none)"}, discordThread=${discordThreadId}`,
    );
    if (sessionId) {
        registry.register(discordThreadId, sessionId);
    } else {
        logger.warn(
            TAG,
            `postCodexResponse: no threadId in result — registry NOT updated for discord thread ${discordThreadId}`,
        );
    }

    if (result.kind === "success") {
        let response = "";
        if (fs.existsSync(outputPath)) {
            response = fs.readFileSync(outputPath, "utf-8").trim();
        }
        if (!response) {
            response = "*(Session completed but produced no output.)*";
        }
        await discord.sendThreadMessage(
            thread,
            response + `\n\n*(model: ${modelName}, reasoning: ${reasoning})*`,
        );
    } else if (result.kind === "session-limit") {
        await discord.sendThreadMessage(
            thread,
            "⚠️ Rate/session limit reached. Please try again later.",
        );
    } else if (result.kind === "timeout") {
        await discord.sendThreadMessage(
            thread,
            "⚠️ The request timed out. Please try a simpler question or try again later.",
        );
    } else {
        // Sanitize error message: remove potential file paths and truncate
        const safeMessage = result.message
            .replace(/\/[^\s]+/g, "[path]")
            .replace(/[A-Z]:\\[^\s]+/gi, "[path]")
            .slice(0, 500);
        await discord.sendThreadMessage(thread, `❌ Error: ${safeMessage}`);
    }

    // Clean up temp output file
    try {
        if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);
    } catch {
        /* best effort */
    }
}
