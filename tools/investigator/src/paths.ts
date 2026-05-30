/**
 * Central path constants for the investigator project.
 * Call `setSandboxDir()` once from main.ts before importing any other modules
 * that depend on it. This decouples path resolution from `process.cwd()`.
 */

import { execFileSync } from "child_process";
import * as path from "path";

let sandboxDir: string | undefined;

/** Set the sandbox directory (absolute path). Call once at startup. */
export function setSandboxDir(dir: string): void {
    sandboxDir = dir;
}

/** Get the sandbox directory. Throws if not yet initialized. */
export function getSandboxDir(): string {
    if (!sandboxDir) {
        throw new Error("sandboxDir not initialized — call setSandboxDir() from main.ts first");
    }
    return sandboxDir;
}

/** Git snapshot repo directories relative to sandbox. */
export const SNAPSHOT_REPOS = ["git/GS-Dev-Snapshots", "git/GS-Prime-Snapshots"];

/** Resolve a path relative to the sandbox directory. */
export function sandboxPath(...segments: string[]): string {
    return path.join(getSandboxDir(), ...segments);
}

/** Destination directory for the bot's own TypeScript source inside the sandbox. */
export const BOT_SOURCE_DIR = "bot-source";

/**
 * Syncs the bot's own .ts source files into sandbox/bot-source/ using rsync.
 * Handles additions, modifications, and deletions. Fast no-op when unchanged.
 */
export function syncBotSource(): void {
    const projectRoot = path.resolve(getSandboxDir(), "..") + "/";
    const dest = path.join(getSandboxDir(), BOT_SOURCE_DIR) + "/";

    execFileSync("rsync", [
        "-a",
        "--delete",
        "--filter=+ /src/",
        "--filter=+ /src/*/",
        "--filter=+ /src/**/*.ts",
        "--filter=+ /src/*.ts",
        "--filter=+ /*.ts",
        "--filter=- *",
        projectRoot,
        dest,
    ]);
}
