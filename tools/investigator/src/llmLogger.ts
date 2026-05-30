import * as fs from "fs";
import * as path from "path";

import { appendTokenUsageCsv } from "./tokenUsageCsv";

export interface TokenUsage {
    inputTokens: number;
    cachedInputTokens: number;
    outputTokens: number;
    totalTokens: number;
}

export interface LlmCallRecord {
    callIndex: number;
    timestamp: string;
    type: "exec" | "resume";
    model: string;
    durationMs: number;
    prompt: string;
    evidence: string;
    stdout: string;
    report: string;
    result: "success" | "timeout" | "session-limit" | "error";
    errorMessage?: string;
    tokenUsage: TokenUsage;
}

export interface LlmSessionLogger {
    /** Log a completed codex call. */
    logCall(record: Omit<LlmCallRecord, "callIndex">): void;
    /** Get cumulative token usage for this session. */
    getCumulativeUsage(): TokenUsage;
    /** Get the session log directory path. */
    getSessionDir(): string;
}

/**
 * Parse token usage from codex JSONL stdout.
 * Codex emits events as one JSON object per line; we look for usage fields.
 */
export function parseTokenUsage(stdout: string): TokenUsage {
    const usage: TokenUsage = {
        inputTokens: 0,
        cachedInputTokens: 0,
        outputTokens: 0,
        totalTokens: 0,
    };
    if (!stdout) return usage;

    for (const line of stdout.split("\n")) {
        if (!line.trim()) continue;
        try {
            const event = JSON.parse(line);

            // OpenAI-style usage object
            if (event.usage) {
                usage.inputTokens += event.usage.prompt_tokens ?? event.usage.input_tokens ?? 0;
                usage.cachedInputTokens += event.usage.cached_input_tokens ?? 0;
                usage.outputTokens +=
                    event.usage.completion_tokens ?? event.usage.output_tokens ?? 0;
                usage.totalTokens += event.usage.total_tokens ?? 0;
            }

            // Codex may report usage at top level
            if (event.input_tokens != null) {
                usage.inputTokens += event.input_tokens;
            }
            if (event.cached_input_tokens != null) {
                usage.cachedInputTokens += event.cached_input_tokens;
            }
            if (event.output_tokens != null) {
                usage.outputTokens += event.output_tokens;
            }
            if (event.total_tokens != null) {
                usage.totalTokens += event.total_tokens;
            }
        } catch {
            // Not JSON, skip
        }
    }

    // If total wasn't explicitly reported, compute it
    if (usage.totalTokens === 0 && (usage.inputTokens > 0 || usage.outputTokens > 0)) {
        usage.totalTokens = usage.inputTokens + usage.outputTokens;
    }

    return usage;
}

/**
 * Creates a per-session LLM logger that writes all codex I/O to disk.
 * Each session gets a timestamped directory containing:
 *   - Individual call logs (call-001.json, call-002.json, ...)
 *   - session-summary.json (cumulative stats, updated after each call)
 */
export function createLlmSessionLogger(baseDir: string, csvDir: string): LlmSessionLogger {
    const sessionStart = new Date();
    const sessionId = sessionStart.toISOString().replace(/[:.]/g, "-");
    const sessionDir = path.join(baseDir, `session-${sessionId}`);
    fs.mkdirSync(sessionDir, { recursive: true });

    let callCount = 0;
    const cumulative: TokenUsage = {
        inputTokens: 0,
        cachedInputTokens: 0,
        outputTokens: 0,
        totalTokens: 0,
    };

    function writeSummary(): void {
        const summary = {
            sessionId,
            startedAt: sessionStart.toISOString(),
            lastUpdated: new Date().toISOString(),
            totalCalls: callCount,
            cumulativeTokenUsage: cumulative,
        };
        fs.writeFileSync(
            path.join(sessionDir, "session-summary.json"),
            JSON.stringify(summary, null, 2) + "\n",
        );
    }

    // Write initial summary
    writeSummary();

    return {
        logCall(record) {
            callCount++;
            const idx = callCount;
            const fullRecord: LlmCallRecord = { ...record, callIndex: idx };

            // Update cumulative usage
            cumulative.inputTokens += record.tokenUsage.inputTokens;
            cumulative.cachedInputTokens += record.tokenUsage.cachedInputTokens;
            cumulative.outputTokens += record.tokenUsage.outputTokens;
            cumulative.totalTokens += record.tokenUsage.totalTokens;

            // Write individual call file
            const callFile = path.join(sessionDir, `call-${String(idx).padStart(3, "0")}.json`);
            fs.writeFileSync(callFile, JSON.stringify(fullRecord, null, 2) + "\n");

            // Append to daily CSV
            appendTokenUsageCsv(
                csvDir,
                record.timestamp,
                record.model,
                record.tokenUsage.inputTokens,
                record.tokenUsage.cachedInputTokens,
                record.tokenUsage.outputTokens,
                record.tokenUsage.totalTokens,
            );

            // Update summary
            writeSummary();
        },

        getCumulativeUsage() {
            return { ...cumulative };
        },

        getSessionDir() {
            return sessionDir;
        },
    };
}
