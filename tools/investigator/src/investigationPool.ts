import * as fs from "fs";
import * as path from "path";

import { ThreadChannel } from "discord.js";

import { Channel } from "./channel";
import { codexExec } from "./codexClient";
import { Config } from "./config";
import { DiscordApi } from "./discordApi";
import { THREAD_CONTEXT_MESSAGE } from "./discordListener";
import { gamecodeToMcp, gamecodeName } from "./gamecodes";
import { createWorktreeSession } from "./gitWorktree";
import { LlmSessionLogger } from "./llmLogger";
import { Logger } from "./logger";
import { getExistenceData } from "./mcpClient";
import { BOT_SOURCE_DIR, getSandboxDir, syncBotSource } from "./paths";
import { getMainInstructions, getStdinPreamble } from "./prompts";
import { RateLimiter } from "./rateLimiter";
import { extractExistenceEntries } from "./screamerParser";
import { ThreadRegistry } from "./threadRegistry";
import { InvestigationRequest } from "./types";

const TAG = "InvestigationPool";

function buildStdin(
    instance: string,
    snapshotDirs: string[],
    request: InvestigationRequest,
    existenceData?: string,
): string {
    const instanceName = gamecodeName(instance);
    const snapshotPaths = snapshotDirs.map((d) => `./${path.relative(getSandboxDir(), d)}`);
    const gitSnapshotList = snapshotPaths.join(" and ");
    return (
        getStdinPreamble(gitSnapshotList, instanceName) +
        "\n\n" +
        request.buildPreamble(instanceName, request.contextLines, existenceData)
    );
}

export async function startInvestigationPool(
    config: Config,
    queue: Channel<InvestigationRequest>,
    discord: DiscordApi,
    registry: ThreadRegistry,
    logger: Logger,
    abortSignal: AbortSignal,
    investigationLimiter: RateLimiter,
    llmLogger?: LlmSessionLogger,
): Promise<void> {
    fs.mkdirSync(config.resultsDir, { recursive: true });
    fs.mkdirSync(config.codexWorkdir, { recursive: true });

    const inflight: Set<Promise<void>> = new Set();
    let active = 0;
    const pending: Array<() => void> = [];

    async function acquireSlot(): Promise<void> {
        if (active < config.maxConcurrentInvestigations) {
            active++;
            return;
        }
        return new Promise<void>((resolve) => {
            pending.push(resolve);
        });
    }

    function releaseSlot(): void {
        if (pending.length > 0) {
            const next = pending.shift()!;
            next();
        } else {
            active--;
        }
    }

    while (!abortSignal.aborted) {
        const request = await queue.pull(abortSignal);
        if (request === undefined) break;

        // Check investigation rate limit
        if (!investigationLimiter.canProceed()) {
            if (investigationLimiter.shouldNotify()) {
                logger.warn(TAG, "Investigation rate limit reached for this hour.");
                try {
                    await discord.sendMessage(
                        "⚠️ **Rate limit reached:** Maximum investigations per hour " +
                            `(${config.maxInvestigationsPerHour}) hit. ` +
                            "Skipping new investigations until the hour resets.",
                    );
                } catch (e: unknown) {
                    logger.error(TAG, "Failed to send rate limit notification", e);
                }
            }
            logger.info(TAG, `Skipping investigation "${request.triggerKey}" — rate limited.`);
            continue;
        }
        investigationLimiter.record();

        const task = acquireSlot().then(async () => {
            try {
                await runInvestigation(
                    config,
                    request,
                    discord,
                    registry,
                    logger,
                    abortSignal,
                    llmLogger,
                );
            } catch (e: unknown) {
                logger.error(TAG, `Error investigating "${request.triggerKey}"`, e);
            } finally {
                releaseSlot();
            }
        });

        const tracked = task.then(() => {
            inflight.delete(tracked);
        });
        inflight.add(tracked);
    }

    // Wait for all in-flight investigations to finish
    if (inflight.size > 0) {
        logger.info(TAG, `Waiting for ${inflight.size} in-flight investigation(s) to finish...`);
        await Promise.allSettled([...inflight]);
    }

    logger.info(TAG, "Stopped.");
}

/** Parsed screamer metadata extracted from context lines. */
export interface ScreamerInfo {
    scriptNum: string;
    playerName: string;
    errorMessage: string;
}

/**
 * Parses screamer context lines to extract script number, player, and error.
 */
export function parseScreamerInfo(contextLines: string[]): ScreamerInfo {
    let scriptNum = "";
    let playerName = "";
    let errorMessage = "";

    for (let i = 0; i < contextLines.length; i++) {
        const line = contextLines[i];

        // Extract script number from first GM-[SCR*ERR] line
        if (!scriptNum) {
            const scriptMatch = line.match(/GM-\[SCR\*ERR\]\(Current Script:\s*(\d+)/);
            if (scriptMatch) {
                scriptNum = scriptMatch[1];
                // Error message is 2 lines after (skip the "." line)
                if (i + 2 < contextLines.length && contextLines[i + 1].trim() === ".") {
                    const candidate = contextLines[i + 2].trim();
                    // Skip if it's another GM-[SCR*ERR] line
                    if (!candidate.startsWith("GM-[SCR*ERR]")) {
                        errorMessage = candidate;
                    }
                }
            }
        }

        // Extract player name from NP0=
        if (!playerName) {
            const npMatch = line.match(/NP0=(\S+)/);
            if (npMatch) {
                playerName = npMatch[1];
            }
        }

        if (scriptNum && playerName && errorMessage) break;
    }

    return { scriptNum, playerName, errorMessage };
}

/**
 * Builds the Discord channel announcement message and thread name for a screamer.
 */
export function buildDiscordMessages(
    info: ScreamerInfo,
    instanceName: string,
): { announcement: string; threadName: string } {
    const scriptPart = info.scriptNum ? `s${info.scriptNum}` : "";

    // Announcement uses backticks for inline code formatting
    const errorPartMd = info.errorMessage ? `\`${info.errorMessage}\`` : "";
    const charPartMd = info.playerName ? `\`NP0=${info.playerName}\`` : "";
    const detailPartsMd = [errorPartMd, charPartMd].filter(Boolean).join("; ");
    const detail = scriptPart
        ? detailPartsMd
            ? `${scriptPart} — ${detailPartsMd}`
            : scriptPart
        : detailPartsMd || "Investigation";

    // Thread name uses plain text (no markdown)
    const errorPartPlain = info.errorMessage || "";
    const charPartPlain = info.playerName ? `NP0=${info.playerName}` : "";
    const detailPartsPlain = [errorPartPlain, charPartPlain].filter(Boolean).join("; ");
    const thread = scriptPart
        ? detailPartsPlain
            ? `${scriptPart} — ${detailPartsPlain}`
            : scriptPart
        : detailPartsPlain || "Investigation";

    return {
        announcement: `😱 **${instanceName}** Screamer\n\n${detail}\n`,
        threadName: `😱﹕${thread}`,
    };
}

/** Parsed bug report metadata extracted from context lines. */
export interface BugInfo {
    playerName: string;
    title: string;
    details: string;
}

/**
 * Parses bug report context lines to extract player, title, and details.
 * Handles two formats:
 *   GM[BUG] Player (id) submitted a bug report titled "Title" with the details: ... {monitor}
 *   [BUG] Player submitted a bug report for <item> (#id, sScript, ssN) with the details: ... {monitor}
 */
export function parseBugInfo(contextLines: string[]): BugInfo {
    let playerName = "";
    let title = "";
    let details = "";

    for (const line of contextLines) {
        // Format 1: GM[BUG] Player (id) submitted a bug report titled "..."
        const titled = line.match(
            /\[BUG\]\s+(\S+)\s+\(\d+\)\s+submitted a bug report titled "(.+?)" with the details:\s+(.+?)(?:\s*\{monitor\})?\s*$/,
        );
        if (titled) {
            playerName = titled[1];
            title = titled[2];
            details = titled[3].trim();
            break;
        }

        // Format 2: [BUG] Player submitted a bug report for <item> (#id, sScript, ssN)
        const forItem = line.match(
            /\[BUG\]\s+(\S+)\s+submitted a bug report for (.+?)\s+\(#\d+,\s*s(\d+),\s*ss\d+\)\s+with the details:\s+(.+?)(?:\s*\{monitor\})?\s*$/,
        );
        if (forItem) {
            playerName = forItem[1];
            title = `s${forItem[3]} - ${forItem[2]}`;
            details = forItem[4].trim();
            break;
        }
    }

    return { playerName, title, details };
}

/**
 * Builds the Discord channel announcement message and thread name for a bug report.
 */
export function buildBugDiscordMessages(
    info: BugInfo,
    instanceName: string,
): { announcement: string; threadName: string } {
    const detail = info.title ? `**${info.title}** (${info.playerName})` : "Bug Report";
    const thread =
        info.title && info.playerName
            ? `${info.playerName} — ${info.title}`
            : info.title || "Bug Report";

    return {
        announcement: `🪲 **${instanceName}** Bug Report\n\n${detail}\n`,
        threadName: `🪲﹕${thread}`,
    };
}

async function runInvestigation(
    config: Config,
    request: InvestigationRequest,
    discord: DiscordApi,
    registry: ThreadRegistry,
    logger: Logger,
    abortSignal: AbortSignal,
    llmLogger?: LlmSessionLogger,
): Promise<void> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const slug = request.triggerKey
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .slice(0, 50)
        .toLowerCase();
    const dirName = `${timestamp}-${slug}`;
    const incidentDir = path.join(config.resultsDir, dirName);

    fs.mkdirSync(incidentDir, { recursive: true });

    // Immediately create the Discord thread so the user knows we're working
    const instanceName = gamecodeName(config.instance);
    let announcement: string;
    let threadName: string;
    if (request.triggerName === "BUG") {
        const bugInfo = parseBugInfo(request.contextLines);
        ({ announcement, threadName } = buildBugDiscordMessages(bugInfo, instanceName));
    } else {
        const screamerInfo = parseScreamerInfo(request.contextLines);
        ({ announcement, threadName } = buildDiscordMessages(screamerInfo, instanceName));
    }
    let thread: ThreadChannel | undefined;
    try {
        const message = await discord.sendMessage(announcement, request.channelId);
        thread = await discord.createThreadOnMessage(message, threadName.slice(0, 100));
        await discord.sendThreadMessage(thread, THREAD_CONTEXT_MESSAGE);
        const trigger = "```\n" + request.contextLines.join("\n") + "\n```";
        await discord.sendThreadMessage(thread, trigger);
        logger.info(TAG, `Thread created for ${dirName}, running investigation.`);
    } catch (e: unknown) {
        logger.error(TAG, `Failed to create Discord thread for ${dirName}`, e);
    }

    // Write evidence
    const evidencePath = path.join(incidentDir, "evidence.txt");
    fs.writeFileSync(evidencePath, request.contextLines.join("\n") + "\n");

    // Start typing indicator early — it stays alive through /se fetching and the agent run
    let typingInterval: ReturnType<typeof setInterval> | undefined;
    if (thread) {
        await thread.sendTyping();
        typingInterval = setInterval(() => {
            thread!.sendTyping().catch(() => {});
        }, 8000);
    }

    // Fetch existence data for any objects referenced in the screamer
    const existenceEntries = extractExistenceEntries(request.contextLines);
    let existenceContext = "";
    if (existenceEntries.length > 0) {
        logger.info(
            TAG,
            `Fetching /se data for ${existenceEntries.length} object(s): ${existenceEntries.map((e) => e.id).join(", ")}`,
        );
        const mcpInstance = gamecodeToMcp(config.instance);
        const results: string[] = [];
        for (const { node, id } of existenceEntries) {
            try {
                const data = await getExistenceData(id, mcpInstance, logger);
                const entry = `--- /se ${id} ---\n${data}`;
                results.push(entry);
                // Upload each /se result as a file to the thread
                if (thread) {
                    try {
                        const filename = `slash_se_${node}_${id}.txt`;
                        await discord.sendThreadFile(thread, filename, entry);
                    } catch {
                        /* best effort */
                    }
                }
            } catch (e: unknown) {
                logger.warn(TAG, `Failed to fetch /se for ${id}: ${e}`);
            }
        }
        if (results.length > 0) {
            existenceContext = results.join("\n\n") + "\n\n";
            const existencePath = path.join(incidentDir, "existence-data.txt");
            fs.writeFileSync(existencePath, existenceContext);
        }
    }

    logger.info(TAG, `Starting investigation: ${dirName}`);

    const reportPath = path.join(incidentDir, "report.md");
    const eventsPath = path.join(incidentDir, "events.jsonl");

    // Create isolated worktrees for this investigation
    const worktrees = await createWorktreeSession(config.worktreeBaseDir, dirName, logger);

    // Build prompt after worktrees so it can reference the correct paths
    const stdin = buildStdin(
        config.instance,
        worktrees.dirs,
        request,
        existenceContext || undefined,
    );
    const promptPath = path.join(incidentDir, "prompt.txt");
    fs.writeFileSync(promptPath, stdin);

    syncBotSource();

    let codexResult;
    try {
        codexResult = await codexExec(
            {
                prompt: getMainInstructions(),
                evidence: stdin,
                outputReportPath: reportPath,
                workdir: getSandboxDir(),
                model: config.codexModel,
                reasoning: config.codexReasoningEffort,
                additionalDirs: [
                    incidentDir,
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
        if (typingInterval) clearInterval(typingInterval);
        worktrees.cleanup();
    }

    let threadId = "unknown";
    let report = "";

    if (codexResult.kind === "success") {
        threadId = codexResult.threadId;
        fs.writeFileSync(eventsPath, codexResult.stdout);
        if (fs.existsSync(reportPath)) {
            report = fs.readFileSync(reportPath, "utf-8");
        }
        logger.info(TAG, `Completed investigation: ${dirName}`);
    } else {
        // Even on failure, try to capture the session ID for future resume
        if (codexResult.threadId) {
            threadId = codexResult.threadId;
        }
        const errorMsg = codexResult.kind === "error" ? codexResult.message : codexResult.kind;
        logger.warn(TAG, `Investigation ${dirName} ended: ${errorMsg}`);
    }

    // Post results to Discord thread
    const modelName = config.codexModel || "codex";
    const reasoning = config.codexReasoningEffort;
    if (thread) {
        // Register the thread whenever we have a session ID, regardless of outcome.
        // This ensures sessions survive restarts even if the investigation was aborted.
        if (threadId !== "unknown") {
            registry.register(thread.id, threadId);
        }
        try {
            if (codexResult.kind === "success") {
                const footer = `\n\n*(model: ${modelName}, reasoning: ${reasoning})*`;
                await discord.sendThreadMessage(
                    thread,
                    (report || "*(No report generated.)*") + footer,
                );
            } else if (codexResult.kind === "session-limit") {
                await discord.sendThreadMessage(
                    thread,
                    "⚠️ **Codex session/rate limit reached.** Investigation not completed.",
                );
            } else if (codexResult.kind === "timeout") {
                await discord.sendThreadMessage(
                    thread,
                    "⚠️ **Investigation timed out** before completion.",
                );
            } else {
                // Sanitize error message: remove potential file paths and truncate
                const safeMessage = codexResult.message
                    .replace(/\/[^\s]+/g, "[path]")
                    .replace(/[A-Z]:\\[^\s]+/gi, "[path]")
                    .slice(0, 500);
                await discord.sendThreadMessage(thread, `❌ **Error:** ${safeMessage}`);
            }
        } catch (e: unknown) {
            logger.error(TAG, `Failed to post results to thread for ${dirName}`, e);
        }
    }

    const metadata = {
        incident_id: dirName,
        created_at: new Date().toISOString(),
        trigger: request.triggerLine,
        thread_id: threadId,
        evidence_file: "evidence.txt",
        prompt_file: "prompt.txt",
        events_file: "events.jsonl",
        report_file: "report.md",
        resume_command: `codex exec resume ${threadId} '<follow-up prompt>'`,
        ...(codexResult.kind !== "success" && {
            error: codexResult.kind === "error" ? codexResult.message : codexResult.kind,
        }),
    };
    fs.writeFileSync(
        path.join(incidentDir, "metadata.json"),
        JSON.stringify(metadata, null, 2) + "\n",
    );
}
