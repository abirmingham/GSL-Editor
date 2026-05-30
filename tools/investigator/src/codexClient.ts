import * as fs from "fs";
import { spawn } from "child_process";

import { Logger } from "./logger";
import { LlmSessionLogger, parseTokenUsage } from "./llmLogger";

export type CodexResult =
    | { kind: "success"; threadId: string; stdout: string }
    | { kind: "timeout"; threadId?: string }
    | { kind: "session-limit"; threadId?: string }
    | { kind: "error"; message: string; threadId?: string };

export interface CodexExecOptions {
    prompt: string;
    evidence: string;
    outputReportPath: string;
    workdir: string;
    model?: string;
    reasoning?: string;
    additionalDirs?: string[];
    timeoutMs?: number;
    abortSignal?: AbortSignal;
}

export interface CodexResumeOptions {
    sessionId: string;
    prompt: string;
    outputReportPath: string;
    workdir: string;
    model?: string;
    reasoning?: string;
    timeoutMs?: number;
    abortSignal?: AbortSignal;
}

interface SpawnCodexOptions {
    args: string[];
    workdir: string;
    stdinData?: string;
    outputReportPath?: string;
    timeoutMs: number;
    abortSignal?: AbortSignal;
    onSuccess?: (stdout: string, outputReportPath?: string) => void;
    label: string;
}

/**
 * Shared implementation for spawning a codex process with timeout/abort handling.
 */
/** Build a filtered environment for the codex subprocess (no secrets it doesn't need). */
function buildCodexEnv(): Record<string, string> {
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
        "CODEX_",
        "OPENAI_",
        "AZURE_OPENAI_",
    ];
    const env: Record<string, string> = {};
    for (const [key, value] of Object.entries(process.env)) {
        if (value === undefined) continue;
        if (allowPrefixes.some((p) => key.startsWith(p))) {
            env[key] = value;
        }
    }
    return env;
}

function spawnCodex(options: SpawnCodexOptions, logger: Logger): Promise<CodexResult> {
    const { args, workdir, stdinData, outputReportPath, timeoutMs, abortSignal, label } = options;

    return new Promise<CodexResult>((resolve) => {
        const child = spawn("codex", args, {
            cwd: workdir,
            env: buildCodexEnv(),
            stdio: ["pipe", "pipe", "pipe"],
        });

        let stdout = "";
        let stderr = "";
        let settled = false;
        let timer: NodeJS.Timeout | undefined;

        if (timeoutMs > 0) {
            timer = setTimeout(() => {
                if (!settled) {
                    settled = true;
                    child.kill("SIGTERM");
                    const partialId = parseThreadId(stdout);
                    resolve({
                        kind: "timeout",
                        threadId: partialId !== "unknown" ? partialId : undefined,
                    });
                }
            }, timeoutMs);
        }

        if (abortSignal) {
            const onAbort = () => {
                if (!settled) {
                    settled = true;
                    if (timer) clearTimeout(timer);
                    child.kill("SIGTERM");
                    const partialId = parseThreadId(stdout);
                    resolve({
                        kind: "error",
                        message: "Aborted by shutdown signal",
                        threadId: partialId !== "unknown" ? partialId : undefined,
                    });
                }
            };
            if (abortSignal.aborted) {
                child.kill("SIGTERM");
                resolve({ kind: "error", message: "Aborted by shutdown signal" });
                return;
            }
            abortSignal.addEventListener("abort", onAbort, { once: true });
            child.on("close", () => abortSignal.removeEventListener("abort", onAbort));
        }

        if (stdinData) {
            child.stdin.write(stdinData);
        }
        child.stdin.end();

        child.stdout.on("data", (chunk: Buffer) => {
            stdout += chunk.toString();
        });

        child.stderr.on("data", (chunk: Buffer) => {
            stderr += chunk.toString();
        });

        child.on("error", (err) => {
            if (settled) return;
            settled = true;
            if (timer) clearTimeout(timer);
            logger.error("CodexClient", `Failed to spawn codex (${label})`, err);
            const partialId = parseThreadId(stdout);
            resolve({
                kind: "error",
                message: err.message,
                threadId: partialId !== "unknown" ? partialId : undefined,
            });
        });

        child.on("close", (code) => {
            if (settled) return;
            settled = true;
            if (timer) clearTimeout(timer);

            if (code === 0) {
                if (options.onSuccess) {
                    options.onSuccess(stdout, outputReportPath);
                }
                const threadId = parseThreadId(stdout);
                resolve({ kind: "success", threadId, stdout });
            } else {
                const result = classifyError(stderr, code);
                if (result.kind === "error") {
                    logger.error(
                        "CodexClient",
                        `codex ${label} failed (code=${code}): ${result.message}`,
                    );
                }
                const partialId = parseThreadId(stdout);
                if (partialId !== "unknown") {
                    (result as { threadId?: string }).threadId = partialId;
                }
                resolve(result);
            }
        });
    });
}

/**
 * Runs `codex exec` with the given prompt and evidence piped on stdin.
 * Returns a discriminated union so callers must handle each outcome.
 */
export async function codexExec(
    options: CodexExecOptions,
    logger: Logger,
    llmLogger?: LlmSessionLogger,
): Promise<CodexResult> {
    const {
        prompt,
        evidence,
        outputReportPath,
        workdir,
        model,
        reasoning = "low",
        additionalDirs = [],
        timeoutMs = 300000,
        abortSignal,
    } = options;

    const args = [
        "exec",
        "--json",
        "--sandbox",
        "workspace-write",
        "--skip-git-repo-check",
        "--output-last-message",
        outputReportPath,
        ...(model ? ["--model", model] : []),
        "-c",
        `model_reasoning_effort="${reasoning}"`,
        ...additionalDirs.flatMap((dir) => ["--add-dir", dir]),
        prompt,
    ];

    const startTime = Date.now();
    const result = await spawnCodex(
        {
            args,
            workdir,
            stdinData: evidence,
            outputReportPath,
            timeoutMs,
            abortSignal,
            label: "exec",
        },
        logger,
    );

    if (llmLogger) {
        const durationMs = Date.now() - startTime;
        const stdout = result.kind === "success" ? result.stdout : "";
        let report = "";
        try {
            report = fs.readFileSync(outputReportPath, "utf-8");
        } catch {
            /* may not exist */
        }
        llmLogger.logCall({
            timestamp: new Date().toISOString(),
            type: "exec",
            model: model || "codex",
            durationMs,
            prompt,
            evidence,
            stdout,
            report,
            result: result.kind,
            errorMessage: result.kind === "error" ? result.message : undefined,
            tokenUsage: parseTokenUsage(stdout),
        });
    }

    return result;
}

function parseThreadId(stdout: string): string {
    const lines = stdout.split("\n");
    // Scan first 20 lines for the thread_id field (in case codex emits
    // metadata or non-JSON lines before the first event).
    const limit = Math.min(lines.length, 20);
    for (let i = 0; i < limit; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        try {
            const event = JSON.parse(line);
            if (event.thread_id) {
                return event.thread_id;
            }
        } catch {
            /* not valid JSON, skip */
        }
    }
    return "unknown";
}

function classifyError(stderr: string, code: number | null): CodexResult {
    const lower = stderr.toLowerCase();
    if (
        lower.includes("session limit") ||
        lower.includes("rate limit") ||
        lower.includes("quota")
    ) {
        return { kind: "session-limit" };
    }
    return {
        kind: "error",
        message: stderr.trim() || `Process exited with code ${code}`,
    };
}

/**
 * Resumes an existing codex session with a follow-up prompt.
 * Uses `codex exec resume <sessionId> <prompt>`.
 */
export async function codexResume(
    options: CodexResumeOptions,
    logger: Logger,
    llmLogger?: LlmSessionLogger,
): Promise<CodexResult> {
    const {
        sessionId,
        prompt,
        outputReportPath,
        workdir,
        model,
        reasoning = "low",
        timeoutMs = 300000,
        abortSignal,
    } = options;

    const args = [
        "exec",
        "resume",
        "--json",
        "--skip-git-repo-check",
        "--output-last-message",
        outputReportPath,
        ...(model ? ["--model", model] : []),
        "-c",
        `model_reasoning_effort="${reasoning}"`,
        sessionId,
        prompt,
    ];

    logger.info("CodexClient", `Resuming session: ${sessionId}`);

    const startTime = Date.now();
    const result = await spawnCodex(
        {
            args,
            workdir,
            outputReportPath,
            timeoutMs,
            abortSignal,
            label: "resume",
        },
        logger,
    );

    if (llmLogger) {
        const durationMs = Date.now() - startTime;
        const stdout = result.kind === "success" ? result.stdout : "";
        let report = "";
        try {
            report = fs.readFileSync(outputReportPath, "utf-8");
        } catch {
            /* may not exist */
        }
        llmLogger.logCall({
            timestamp: new Date().toISOString(),
            type: "resume",
            model: model || "codex",
            durationMs,
            prompt,
            evidence: "",
            stdout,
            report,
            result: result.kind,
            errorMessage: result.kind === "error" ? result.message : undefined,
            tokenUsage: parseTokenUsage(stdout),
        });
    }

    return result;
}
