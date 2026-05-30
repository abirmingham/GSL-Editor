import { ChildProcess, spawn } from "child_process";
import * as fs from "fs";
import * as path from "path";

import { Channel } from "./channel";
import { Config } from "./config";
import { Logger } from "./logger";
import { sleep } from "./util";

const TAG = "GameTask";

const ROLLOVER_RE = /^%%ROLLOVER:(.+)%%$/;

/**
 * Starts the logger daemon as a separate process and tails its output log
 * files, feeding lines into the lineChannel for the trigger watcher.
 *
 * The daemon manages its own game connection and PID file. If a daemon is
 * already running it will be killed and replaced.
 */
export async function startGameTask(
    config: Config,
    lineChannel: Channel<string>,
    logger: Logger,
    abortSignal: AbortSignal,
): Promise<void> {
    fs.mkdirSync(config.logDir, { recursive: true });

    // Start the daemon process
    const daemonScript = path.join(__dirname, "..", "loggerDaemon.js");
    const daemon = spawnDaemon(daemonScript, config, logger);

    abortSignal.addEventListener(
        "abort",
        () => {
            logger.info(TAG, "Stopping logger daemon...");
            daemon.kill("SIGTERM");
        },
        { once: true },
    );

    // Relay daemon stderr to our logger
    daemon.stderr?.on("data", (data: Buffer) => {
        const lines = data.toString("utf-8").split("\n");
        for (const line of lines) {
            const trimmed = line.trim();
            if (trimmed) logger.info(TAG, trimmed);
        }
    });

    // Wait for the daemon to create its initial log file (it does this eagerly
    // before authenticating, so it should appear almost immediately).
    const pollStart = Date.now();
    while (!abortSignal.aborted && Date.now() - pollStart < 10000) {
        if (findLatestLog(config.logDir)) break;
        await sleep(50);
    }
    if (abortSignal.aborted) return;

    // Tail the latest log file
    await tailLogs(config, lineChannel, logger, abortSignal);

    // If we get here, either abort was signalled or tailing failed
    if (!abortSignal.aborted) {
        daemon.kill("SIGTERM");
    }
}

function spawnDaemon(scriptPath: string, config: Config, logger: Logger): ChildProcess {
    logger.info(TAG, `Spawning logger daemon: ${scriptPath}`);
    // Only pass env vars the daemon needs — avoid leaking secrets like DISCORD_BOT_TOKEN
    const daemonEnv: Record<string, string> = {};
    const allowPrefixes = [
        "PATH",
        "HOME",
        "USER",
        "LANG",
        "LC_",
        "TERM",
        "SHELL",
        "TMPDIR",
        "XDG_",
        "NODE_",
        "GS4_",
        "GSL_",
        "BOT_WORKING_TMP_DIRECTORY",
        "INVESTIGATOR_",
    ];
    for (const [key, value] of Object.entries(process.env)) {
        if (value === undefined) continue;
        if (allowPrefixes.some((p) => key.startsWith(p))) {
            daemonEnv[key] = value;
        }
    }

    const child = spawn("node", [scriptPath], {
        cwd: path.join(__dirname, ".."),
        env: daemonEnv,
        stdio: ["ignore", "ignore", "pipe"],
        detached: false,
    });

    child.on("exit", (code, signal) => {
        logger.info(TAG, `Logger daemon exited (code=${code}, signal=${signal}).`);
    });

    return child;
}

/**
 * Finds the most recent log file in the log directory.
 */
function findLatestLog(logDir: string): string | undefined {
    const files = fs.readdirSync(logDir).filter((f) => f.startsWith("game-") && f.endsWith(".log"));
    if (files.length === 0) return undefined;
    files.sort();
    return files[files.length - 1];
}

/**
 * Tails the active game log file, following rollovers via sentinel markers.
 */
async function tailLogs(
    config: Config,
    lineChannel: Channel<string>,
    logger: Logger,
    abortSignal: AbortSignal,
): Promise<void> {
    while (!abortSignal.aborted) {
        const latest = findLatestLog(config.logDir);
        if (!latest) {
            await sleep(1000);
            continue;
        }

        const logPath = path.join(config.logDir, latest);
        logger.info(TAG, `Tailing log: ${logPath}`);

        const nextFile = await tailFile(logPath, lineChannel, logger, abortSignal);

        if (abortSignal.aborted) return;

        if (nextFile) {
            // Rollover detected — follow the new file
            logger.info(TAG, `Rollover detected, switching to: ${nextFile}`);
            continue;
        }

        // File ended or disappeared without rollover — find next
        await sleep(500);
    }
}

/**
 * Tails a single log file from its current end. Returns the name of the next
 * file if a rollover sentinel is encountered, or undefined if the file becomes
 * stale (no writes for a timeout period and a newer file exists).
 */
async function tailFile(
    filePath: string,
    lineChannel: Channel<string>,
    logger: Logger,
    abortSignal: AbortSignal,
): Promise<string | undefined> {
    return new Promise<string | undefined>((resolve) => {
        if (abortSignal.aborted) {
            resolve(undefined);
            return;
        }

        // Start reading from the end of the file
        let position = 0;
        try {
            const stat = fs.statSync(filePath);
            position = stat.size;
        } catch {
            resolve(undefined);
            return;
        }

        let partial = "";
        let staleChecks = 0;
        const MAX_STALE_CHECKS = 60; // 30s at 500ms intervals

        const onAbort = () => {
            clearInterval(pollTimer);
            resolve(undefined);
        };
        abortSignal.addEventListener("abort", onAbort, { once: true });

        const pollTimer = setInterval(() => {
            if (abortSignal.aborted) return;

            let stat: fs.Stats;
            try {
                stat = fs.statSync(filePath);
            } catch {
                // File deleted
                clearInterval(pollTimer);
                abortSignal.removeEventListener("abort", onAbort);
                resolve(undefined);
                return;
            }

            if (stat.size < position) {
                // File was truncated — reset to beginning
                logger.info(TAG, `Log file truncated (${position} → ${stat.size}), resetting.`);
                position = 0;
                partial = "";
            } else if (stat.size === position) {
                staleChecks++;
                // Check if a newer file appeared
                if (staleChecks >= MAX_STALE_CHECKS) {
                    const dir = path.dirname(filePath);
                    const currentName = path.basename(filePath);
                    const latest = findLatestLog(dir);
                    if (latest && latest !== currentName) {
                        clearInterval(pollTimer);
                        abortSignal.removeEventListener("abort", onAbort);
                        resolve(latest);
                        return;
                    }
                }
                return;
            }

            staleChecks = 0;
            const fd = fs.openSync(filePath, "r");
            const readSize = stat.size - position;
            const buffer = Buffer.alloc(readSize);
            fs.readSync(fd, buffer, 0, readSize, position);
            fs.closeSync(fd);
            position = stat.size;

            const chunk = buffer.toString("utf-8");
            partial += chunk;

            const lines = partial.split("\n");
            // Keep the last element as partial (may be incomplete line)
            partial = lines.pop() ?? "";

            for (const rawLine of lines) {
                const line = rawLine.replace(/\r$/, "");
                if (line.length === 0) continue;

                // Check for rollover sentinel
                const match = ROLLOVER_RE.exec(line);
                if (match) {
                    clearInterval(pollTimer);
                    abortSignal.removeEventListener("abort", onAbort);
                    resolve(match[1]);
                    return;
                }

                if (!lineChannel.push(line)) {
                    logger.warn(TAG, "Line channel full — dropping game output.");
                }
            }
        }, 500);
    });
}
