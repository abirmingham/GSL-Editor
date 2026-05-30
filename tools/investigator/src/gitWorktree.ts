import { execFile as execFileCb, execFileSync } from "child_process";
import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

import { Logger } from "./logger";
import { getSandboxDir, SNAPSHOT_REPOS } from "./paths";

const execFile = promisify(execFileCb);

const TAG = "GitWorktree";

/**
 * Prunes stale worktrees in each snapshot repo. Call at startup to clean up
 * after crashes that left orphaned worktrees on disk.
 */
export async function pruneWorktrees(worktreeBaseDir: string, logger: Logger): Promise<void> {
    for (const rel of SNAPSHOT_REPOS) {
        const repo = path.join(getSandboxDir(), rel);
        if (!fs.existsSync(repo)) continue;
        try {
            await execFile("git", ["worktree", "prune"], {
                cwd: repo,
                timeout: 15000,
            });
            logger.info(TAG, `Pruned stale worktrees in ${rel}.`);
        } catch (e: unknown) {
            logger.warn(TAG, `Failed to prune worktrees in ${rel}: ${e}`);
        }
    }

    // Remove any leftover worktree directories on disk
    if (fs.existsSync(worktreeBaseDir)) {
        try {
            const entries = fs.readdirSync(worktreeBaseDir);
            for (const entry of entries) {
                const full = path.join(worktreeBaseDir, entry);
                if (fs.statSync(full).isDirectory()) {
                    fs.rmSync(full, { recursive: true, force: true });
                }
            }
            logger.info(TAG, `Cleaned up ${entries.length} leftover worktree dir(s).`);
        } catch (e: unknown) {
            logger.warn(TAG, `Failed to clean worktree base dir: ${e}`);
        }
    }
}

export interface WorktreeSession {
    /** Absolute paths to the created worktree directories. */
    dirs: string[];
    /** Call to remove all worktrees created for this session. */
    cleanup: () => void;
}

/**
 * Creates per-session git worktrees for each snapshot repo at origin/master.
 * Returns the worktree paths (to pass as additionalDirs) and a cleanup function.
 */
export async function createWorktreeSession(
    worktreeBaseDir: string,
    sessionId: string,
    logger: Logger,
): Promise<WorktreeSession> {
    const base = path.join(worktreeBaseDir, sessionId);
    fs.mkdirSync(base, { recursive: true });

    const dirs: string[] = [];

    for (const rel of SNAPSHOT_REPOS) {
        const repo = path.join(getSandboxDir(), rel);
        if (!fs.existsSync(repo)) {
            logger.warn(TAG, `Snapshot repo missing, skipping: ${rel}`);
            continue;
        }

        // Fetch latest from remote
        try {
            await execFile("git", ["fetch"], { cwd: repo, timeout: 30000 });
        } catch (e: unknown) {
            logger.warn(TAG, `git fetch failed in ${rel}: ${e}`);
        }

        const repoName = path.basename(rel);
        const worktreePath = path.join(base, repoName);

        try {
            await execFile("git", ["worktree", "add", worktreePath, "origin/master"], {
                cwd: repo,
                timeout: 30000,
            });
            dirs.push(worktreePath);
            logger.info(TAG, `Created worktree for ${repoName} at ${worktreePath}`);
        } catch (e: unknown) {
            logger.warn(TAG, `Failed to create worktree for ${repoName}: ${e}`);
        }
    }

    const cleanup = () => {
        for (const rel of SNAPSHOT_REPOS) {
            const repo = path.join(getSandboxDir(), rel);
            if (!fs.existsSync(repo)) continue;
            const repoName = path.basename(rel);
            const worktreePath = path.join(base, repoName);
            try {
                execFileSync("git", ["worktree", "remove", worktreePath, "--force"], {
                    cwd: repo,
                    stdio: "pipe",
                    timeout: 15000,
                });
            } catch {
                // If worktree remove fails, try manual cleanup
                try {
                    fs.rmSync(worktreePath, { recursive: true, force: true });
                    execFileSync("git", ["worktree", "prune"], {
                        cwd: repo,
                        stdio: "pipe",
                        timeout: 15000,
                    });
                } catch {
                    /* best effort */
                }
            }
        }
        // Remove the session base dir
        try {
            fs.rmSync(base, { recursive: true, force: true });
        } catch {
            /* best effort */
        }
        logger.info(TAG, `Cleaned up worktrees for session ${sessionId}.`);
    };

    return { dirs, cleanup };
}
