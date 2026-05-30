#!/usr/bin/env node
/**
 * Game Logger Daemon
 *
 * A standalone process that connects to the GemStone IV game server and writes
 * all output to rotating log files. Designed to run independently of the main
 * investigator process so that event-loop blocking in the main process cannot
 * cause game disconnects.
 *
 * Usage:
 *   node loggerDaemon.js
 *
 * Environment variables (loaded from ../.env relative to sandbox):
 *   GS4_ACCOUNT, GSL_PASSWORD, GS4_GAMECODE, GS4_CHARACTER
 *   BOT_WORKING_TMP_DIRECTORY
 *   INVESTIGATOR_MAX_LOG_SIZE_BYTES
 *
 * PID file: <BOT_WORKING_TMP_DIRECTORY>/logger_daemon.pid
 * Logs to:  <BOT_WORKING_TMP_DIRECTORY>/game-logs/game-*.log
 *
 * The daemon writes a small sentinel line to the current log on every rollover
 * so that the tailer can detect the new file:
 *   %%ROLLOVER:<new-filename>%%
 */

import * as fs from "fs";
import * as path from "path";
import { execFileSync } from "child_process";

import { gamecodeToEaccess } from "./src/gamecodes";
import { EAccessClient } from "./src/gsl/eaccessClient";
import { BaseGameClient } from "./src/gsl/gameClients";
import { loadEnvFile, resolveTilde } from "./src/util";

function loadEnv(): void {
    loadEnvFile(__dirname);
}

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

interface DaemonConfig {
    account: string;
    password: string;
    instance: string;
    character: string;
    logDir: string;
    maxLogSizeBytes: number;
    pidFile: string;
}

function loadDaemonConfig(): DaemonConfig {
    const botWorkingTmpDir = resolveTilde(requireEnv("BOT_WORKING_TMP_DIRECTORY"));
    const logDir = path.join(botWorkingTmpDir, "game-logs");
    return {
        account: requireEnv("GS4_ACCOUNT"),
        password: requireEnv("GSL_PASSWORD"),
        instance: requireEnv("GS4_GAMECODE"),
        character: requireEnv("GS4_CHARACTER"),
        logDir,
        maxLogSizeBytes: parseInt(requireEnv("INVESTIGATOR_MAX_LOG_SIZE_BYTES"), 10),
        pidFile: path.join(botWorkingTmpDir, "logger_daemon.pid"),
    };
}

// ---------------------------------------------------------------------------
// PID management
// ---------------------------------------------------------------------------

/** Synchronous sleep that doesn't spin the CPU. */
function sleepSync(ms: number): void {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function killExistingDaemon(pidFile: string): void {
    if (!fs.existsSync(pidFile)) return;
    const raw = fs.readFileSync(pidFile, "utf-8").trim();
    const pid = parseInt(raw, 10);
    if (isNaN(pid)) {
        fs.unlinkSync(pidFile);
        return;
    }
    try {
        // Check if process is alive
        process.kill(pid, 0);
        // It's running — kill it
        console.error(`[LoggerDaemon] Killing existing daemon (PID ${pid})...`);
        process.kill(pid, "SIGTERM");
        // Give it a moment to exit
        const deadline = Date.now() + 5000;
        while (Date.now() < deadline) {
            try {
                process.kill(pid, 0);
                sleepSync(100);
            } catch {
                break; // Process is gone
            }
        }
    } catch {
        // Process doesn't exist — stale PID file
    }
    try {
        fs.unlinkSync(pidFile);
    } catch {
        /* ignore */
    }
}

function writePidFile(pidFile: string): void {
    fs.writeFileSync(pidFile, String(process.pid), "utf-8");
}

function removePidFile(pidFile: string): void {
    try {
        fs.unlinkSync(pidFile);
    } catch {
        /* ignore */
    }
}

/**
 * Finds and kills any existing processes holding TCP connections to the game
 * server (port 10024). This catches orphaned daemons, stale debug scripts,
 * or any other process that might cause "duplicate login" kicks.
 */
function killStaleGameConnections(): void {
    try {
        // Use `ss` to find PIDs with connections to port 10024
        const output = execFileSync("ss", ["-tnp"], {
            encoding: "utf-8",
            timeout: 5000,
        });
        const lines = output.split("\n");
        const pidsToKill = new Set<number>();

        for (const line of lines) {
            // Match lines with destination port 10024
            if (!/:10024\s/.test(line)) continue;
            // Extract PID from users:(("name",pid=NNN,fd=N))
            const pidMatch = line.match(/pid=(\d+)/);
            if (pidMatch) {
                const pid = parseInt(pidMatch[1], 10);
                // Don't kill ourselves
                if (pid !== process.pid) {
                    pidsToKill.add(pid);
                }
            }
        }

        for (const pid of pidsToKill) {
            console.error(`[LoggerDaemon] Killing stale game connection holder (PID ${pid})...`);
            try {
                process.kill(pid, "SIGTERM");
            } catch {
                // Already dead
            }
        }

        if (pidsToKill.size > 0) {
            // Brief pause to let connections close
            sleepSync(1000);
        }
    } catch {
        // `ss` not available or failed — not critical, proceed anyway
    }
}

// ---------------------------------------------------------------------------
// Log file management
// ---------------------------------------------------------------------------

function logFileName(): string {
    const now = new Date().toISOString().replace(/[:.]/g, "-");
    return `game-${now}.log`;
}

// ---------------------------------------------------------------------------
// Sleep utility
// ---------------------------------------------------------------------------

function sleep(ms: number): Promise<void> {
    return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------------------
// Main daemon loop
// ---------------------------------------------------------------------------

async function connectAndStream(
    config: DaemonConfig,
    abortSignal: AbortSignal,
    initialLogName?: string,
): Promise<void> {
    const eaccessCode = gamecodeToEaccess(config.instance);

    console.error(`[LoggerDaemon] Logging in as ${config.character} on ${config.instance}...`);
    const sal = await EAccessClient.quickLogin(
        config.account,
        config.password,
        eaccessCode,
        config.character,
        "storm",
        abortSignal,
    );
    console.error(`[LoggerDaemon] Authenticated. Connecting to ${sal.gamehost}:${sal.gameport}...`);

    const client = new BaseGameClient({ debug: false, echo: false });
    client.connect(sal);

    // Use the pre-created log file if provided, otherwise create a new one
    let currentLogName = initialLogName ?? logFileName();
    let logStream = fs.createWriteStream(path.join(config.logDir, currentLogName), { flags: "a" });
    let logBytes = 0;

    return new Promise<void>((resolve, reject) => {
        abortSignal.addEventListener(
            "abort",
            () => {
                try {
                    client.quit();
                } catch {
                    /* already disconnected */
                }
                logStream.end();
                resolve();
            },
            { once: true },
        );

        client.on("text", (text: string) => {
            const bytes = Buffer.byteLength(text, "utf-8");
            logBytes += bytes;
            logStream.write(text);

            // Rollover: close current log and start a new one
            if (logBytes >= config.maxLogSizeBytes) {
                const newLogName = logFileName();
                // Write sentinel so tailers can detect the new file
                logStream.write(`\n%%ROLLOVER:${newLogName}%%\n`);
                logStream.end();
                currentLogName = newLogName;
                logStream = fs.createWriteStream(path.join(config.logDir, currentLogName), {
                    flags: "a",
                });
                logBytes = 0;
            }
        });

        client.on("error", (error: Error) => {
            logStream.end();
            reject(error);
        });

        client.on("quit", () => {
            logStream.end();
            reject(new Error("Server disconnected"));
        });

        client.on("hello", () => {
            console.error("[LoggerDaemon] Connected and receiving game output.");
        });
    });
}

async function main(): Promise<void> {
    loadEnv();
    const config = loadDaemonConfig();

    fs.mkdirSync(config.logDir, { recursive: true });

    // Kill any existing daemon
    killExistingDaemon(config.pidFile);

    // Kill any other processes holding game server connections (orphaned scripts, etc.)
    killStaleGameConnections();

    // Write our PID
    writePidFile(config.pidFile);

    const abortController = new AbortController();
    const { signal } = abortController;

    const shutdown = () => {
        console.error("[LoggerDaemon] Shutting down...");
        abortController.abort();
        removePidFile(config.pidFile);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
    process.on("exit", () => removePidFile(config.pidFile));

    // Watch parent process — if it dies, we should exit too.
    // This prevents orphaned daemons from holding game connections indefinitely.
    const parentPid = process.ppid;
    const parentWatcher = setInterval(() => {
        try {
            process.kill(parentPid, 0);
        } catch {
            console.error(`[LoggerDaemon] Parent process (PID ${parentPid}) died. Shutting down.`);
            clearInterval(parentWatcher);
            shutdown();
        }
    }, 5000);
    parentWatcher.unref(); // Don't keep event loop alive just for this

    console.error(`[LoggerDaemon] Started (PID ${process.pid}).`);
    console.error(`[LoggerDaemon] PID file: ${config.pidFile}`);
    console.error(`[LoggerDaemon] Log dir: ${config.logDir}`);

    // Create the initial log file immediately so the tailer can start right away
    // (before authentication/connection which may take several seconds).
    let initialLogName: string | undefined = logFileName();
    const initialLogPath = path.join(config.logDir, initialLogName);
    fs.writeFileSync(initialLogPath, "");
    console.error(`[LoggerDaemon] Created initial log file: ${initialLogName}`);

    let backoffMs = 1000;
    const maxBackoff = 300000; // 5 min

    while (!signal.aborted) {
        try {
            await connectAndStream(config, signal, initialLogName);
            initialLogName = undefined; // Only use pre-created name on first connect
            backoffMs = 1000;
        } catch (e: unknown) {
            if (signal.aborted) return;
            console.error(
                `[LoggerDaemon] Connection lost. Reconnecting in ${backoffMs}ms...`,
                e instanceof Error ? e.message : e,
            );
            await sleep(backoffMs);
            backoffMs = Math.min(backoffMs * 2, maxBackoff);
        }
    }

    console.error("[LoggerDaemon] Exited.");
}

main().catch((e) => {
    console.error("[LoggerDaemon] Fatal error:", e);
    process.exit(1);
});
