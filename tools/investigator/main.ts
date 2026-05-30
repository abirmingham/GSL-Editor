import * as fs from "fs";
import * as path from "path";

import { Channel } from "./src/channel";
import { loadConfig } from "./src/config";
import { DedupStore } from "./src/dedupStore";
import { DiscordApi, loadDiscordConfig } from "./src/discordApi";
import { startDiscordListener } from "./src/discordListener";
import { startGameTask } from "./src/gameTask";
import { pruneWorktrees } from "./src/gitWorktree";
import { startInvestigationPool } from "./src/investigationPool";
import { createLlmSessionLogger } from "./src/llmLogger";
import { createLogger } from "./src/logger";
import { connectMcp, disconnectMcp } from "./src/mcpClient";
import { setSandboxDir } from "./src/paths";
import { RateLimiter } from "./src/rateLimiter";
import { ThreadRegistry } from "./src/threadRegistry";
import { startTokenUsageReporter } from "./src/tokenUsageReporter";
import { getTriggerMatchers } from "./src/triggerConfig";
import { startTriggerWatcher } from "./src/triggerWatcher";
import { InvestigationRequest } from "./src/types";
import { loadEnvFile } from "./src/util";

function loadEnv(): void {
    loadEnvFile(__dirname);
}

function acquirePidFile(pidPath: string): void {
    // Check for an existing instance
    if (fs.existsSync(pidPath)) {
        const existingPid = parseInt(fs.readFileSync(pidPath, "utf-8").trim(), 10);
        if (!isNaN(existingPid)) {
            try {
                // signal 0 tests if process exists without killing it
                process.kill(existingPid, 0);
                console.error(
                    `ERROR: Another investigator instance is already running (PID ${existingPid}).\n` +
                        `Kill it first: kill ${existingPid}\n` +
                        `PID file: ${pidPath}`,
                );
                process.exit(1);
            } catch {
                // Process doesn't exist — stale PID file, safe to overwrite
            }
        }
    }
    // Use O_EXCL-like approach: write to temp file then rename atomically
    // to minimize the TOCTOU window between checking and writing.
    const tmpPath = `${pidPath}.${process.pid}.tmp`;
    fs.writeFileSync(tmpPath, String(process.pid), "utf-8");
    fs.renameSync(tmpPath, pidPath);
}

async function main(): Promise<void> {
    // Resolve sandbox dir relative to the project root (__dirname),
    // so the working directory doesn't matter when launching.
    setSandboxDir(path.join(__dirname, "sandbox"));

    loadEnv();
    const config = loadConfig();
    const discordConfig = loadDiscordConfig();

    // Prevent duplicate instances
    const pidFile = path.join(config.botWorkingTmpDir, "investigator.pid");
    acquirePidFile(pidFile);

    const errorLogPath = path.join(config.logDir, "errors.log");
    const logger = createLogger(errorLogPath);

    logger.info("Main", "GS4 Investigator Bot starting...");
    for (const m of getTriggerMatchers()) {
        logger.info(
            "Main",
            `Trigger [${m.name}]: "${m.triggerPattern}" → end "${m.captureEndPattern}"`,
        );
    }
    logger.info("Main", `Log dir: ${config.logDir}`);
    logger.info("Main", `Results dir: ${config.resultsDir}`);
    logger.info("Main", `Error log: ${errorLogPath}`);
    logger.info("Main", `Character: ${config.character}`);

    // Clean up any stale worktrees from previous crashes
    await pruneWorktrees(config.worktreeBaseDir, logger);

    // Connect to MCP server
    await connectMcp(
        {
            mcpServerPath: config.mcpServerPath,
            gslPassword: config.gslPassword,
            gslDownloadPath: config.gslDownloadPath,
            gslMcpLoginConfigFile: config.gslMcpLoginConfigFile,
        },
        logger,
    );

    const abortController = new AbortController();
    const { signal } = abortController;

    // Wire up graceful shutdown
    process.on("SIGINT", () => {
        logger.info("Main", "Shutting down...");
        abortController.abort();
    });
    process.on("SIGTERM", () => {
        logger.info("Main", "Shutting down...");
        abortController.abort();
    });

    // Channels
    const lineChannel = new Channel<string>(10000);
    const investigationQueue = new Channel<InvestigationRequest>(20);

    // Shared Discord connection and thread registry
    const discord = new DiscordApi(discordConfig, logger);
    await discord.connect();
    const registry = new ThreadRegistry({
        persistPath: path.join(config.resultsDir, "thread-registry.json"),
    });

    // Rate limiters
    const investigationLimiter = new RateLimiter(config.maxInvestigationsPerHour);
    const discordMessageLimiter = new RateLimiter(config.maxDiscordMessagesPerHour);
    discord.setMessageRateLimiter(discordMessageLimiter);

    logger.info(
        "Main",
        `Rate limits: ${config.maxInvestigationsPerHour} investigations/hr, ${config.maxDiscordMessagesPerHour} messages/hr`,
    );

    // LLM session logger — writes all codex I/O to disk
    const llmLogDir = path.join(config.resultsDir, "llm-sessions");
    const csvDir = path.join(config.resultsDir, "token-usage");
    const llmLogger = createLlmSessionLogger(llmLogDir, csvDir);
    logger.info("Main", `LLM session log: ${llmLogger.getSessionDir()}`);
    logger.info("Main", `Token usage CSV dir: ${csvDir}`);

    // Persistent dedup store so cooldowns survive restarts
    const dedupStorePath = path.join(config.botWorkingTmpDir, "dedup-cooldowns.json");
    const dedupStore = new DedupStore(dedupStorePath, config.dedupCooldownMs);
    logger.info("Main", `Dedup store: ${dedupStorePath}`);

    // Start all tasks concurrently
    const tasks = [
        startGameTask(config, lineChannel, logger, signal),
        startTriggerWatcher(config, lineChannel, investigationQueue, logger, signal, dedupStore),
        startInvestigationPool(
            config,
            investigationQueue,
            discord,
            registry,
            logger,
            signal,
            investigationLimiter,
            llmLogger,
        ),
        startDiscordListener(config, discordConfig, discord, registry, logger, signal, llmLogger),
        startTokenUsageReporter(csvDir, discord, logger, signal),
    ];

    await Promise.allSettled(tasks);
    await discord.disconnect();
    await disconnectMcp(logger);
    logger.info("Main", "All tasks stopped. Exiting.");
    logger.close();

    // Clean up PID file
    try {
        fs.unlinkSync(pidFile);
    } catch {
        // ignore
    }
}

main().catch((e) => {
    console.error("[Main] Fatal error:", e);
    process.exit(1);
});
