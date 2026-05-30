import * as fs from "fs";
import * as path from "path";

import { DiscordApi } from "./discordApi";
import { Logger } from "./logger";
import { parseDayCsvFile, parseMonthCsvFiles } from "./tokenUsageCsv";

const TAG = "TokenUsageReporter";

/** Cost per 1M tokens by model (input, output). */
const MODEL_COSTS: Record<string, { input: number; output: number }> = {
    "gpt-5.5": { input: 5.0, output: 30.0 },
    "gpt-5.4": { input: 2.5, output: 15.0 },
    "gpt-5.4-mini": { input: 0.75, output: 4.5 },
};

/** Normalize model name for cost lookup (case-insensitive, strip dates/suffixes). */
export function normalizeModelForCost(model: string): string | undefined {
    const lower = model.toLowerCase();
    // Try exact matches first
    if (MODEL_COSTS[lower]) return lower;
    // Try prefix matching (longest key first so "gpt-5.4-mini" beats "gpt-5.4")
    const keys = Object.keys(MODEL_COSTS).sort((a, b) => b.length - a.length);
    for (const key of keys) {
        if (lower.startsWith(key)) return key;
    }
    return undefined;
}

export function formatCost(dollars: number): string {
    if (dollars < 0.01) return `$${dollars.toFixed(4)}`;
    return `$${dollars.toFixed(2)}`;
}

export function formatTokens(tokens: number): string {
    if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(2)}M`;
    if (tokens >= 1_000) return `${(tokens / 1_000).toFixed(1)}K`;
    return String(tokens);
}

/** Cached input tokens are charged at 10% of the input rate. */
const CACHE_DISCOUNT = 0.1;

export function computeCost(
    model: string,
    inputTokens: number,
    outputTokens: number,
    cachedInputTokens = 0,
): number {
    const costKey = normalizeModelForCost(model);
    if (!costKey) return 0;
    const rates = MODEL_COSTS[costKey];
    const uncachedInput = inputTokens - cachedInputTokens;
    return (
        (uncachedInput / 1_000_000) * rates.input +
        (cachedInputTokens / 1_000_000) * rates.input * CACHE_DISCOUNT +
        (outputTokens / 1_000_000) * rates.output
    );
}

interface ModelUsage {
    inputTokens: number;
    cachedInputTokens: number;
    outputTokens: number;
    cost: number;
}

function buildReport(
    dailyByModel: Map<string, ModelUsage>,
    monthlyByModel: Map<string, ModelUsage>,
    today: string,
    yearMonth: string,
): string {
    const lines: string[] = [];
    lines.push(`📊 **Token Usage Report**`);
    lines.push("");

    // Daily
    lines.push(`**Today (${today}):**`);
    if (dailyByModel.size === 0) {
        lines.push("  No usage today.");
    } else {
        let dailyTotalCost = 0;
        for (const [model, usage] of dailyByModel) {
            const costStr = usage.cost > 0 ? ` (~${formatCost(usage.cost)})` : "";
            const cacheStr =
                usage.cachedInputTokens > 0
                    ? ` (${formatTokens(usage.cachedInputTokens)} cached)`
                    : "";
            lines.push(
                `  • **${model}**: ${formatTokens(usage.inputTokens)} in${cacheStr} / ${formatTokens(usage.outputTokens)} out${costStr}`,
            );
            dailyTotalCost += usage.cost;
        }
        if (dailyTotalCost > 0) {
            lines.push(`  • **Total estimated cost:** ${formatCost(dailyTotalCost)}`);
        }
    }

    lines.push("");

    // Monthly
    lines.push(`**This month (${yearMonth}):**`);
    if (monthlyByModel.size === 0) {
        lines.push("  No usage this month.");
    } else {
        let monthlyTotalCost = 0;
        for (const [model, usage] of monthlyByModel) {
            const costStr = usage.cost > 0 ? ` (~${formatCost(usage.cost)})` : "";
            const cacheStr =
                usage.cachedInputTokens > 0
                    ? ` (${formatTokens(usage.cachedInputTokens)} cached)`
                    : "";
            lines.push(
                `  • **${model}**: ${formatTokens(usage.inputTokens)} in${cacheStr} / ${formatTokens(usage.outputTokens)} out${costStr}`,
            );
            monthlyTotalCost += usage.cost;
        }
        if (monthlyTotalCost > 0) {
            lines.push(`  • **Total estimated cost:** ${formatCost(monthlyTotalCost)}`);
        }
    }

    return lines.join("\n");
}

/**
 * Starts the hourly token usage reporter.
 * Runs every hour, parses CSV files, and posts a summary to the #token-usage channel.
 * Skips posting if there's been no new usage since the last report.
 */
export function startTokenUsageReporter(
    csvDir: string,
    discord: DiscordApi,
    logger: Logger,
    abortSignal: AbortSignal,
    channelId?: string,
): Promise<void> {
    const resolvedChannelId = channelId ?? process.env.DISCORD_TOKEN_USAGE_CHANNEL_ID;
    if (!resolvedChannelId) {
        logger.warn(
            TAG,
            "No token usage channel configured (set DISCORD_TOKEN_USAGE_CHANNEL_ID). Reporter disabled.",
        );
        return new Promise<void>((resolve) => {
            abortSignal.addEventListener("abort", () => resolve(), { once: true });
            if (abortSignal.aborted) resolve();
        });
    }
    const reportChannelId: string = resolvedChannelId;

    // Persist the last report hash to disk so we can skip redundant posts after restart
    const hashFilePath = path.join(csvDir, ".last-report-hash");
    let lastReportHash = "";
    try {
        if (fs.existsSync(hashFilePath)) {
            lastReportHash = fs.readFileSync(hashFilePath, "utf-8").trim();
        }
    } catch {
        // If we can't read it, just start fresh
    }

    function persistHash(hash: string): void {
        try {
            fs.mkdirSync(path.dirname(hashFilePath), { recursive: true });
            fs.writeFileSync(hashFilePath, hash);
        } catch {
            // best effort
        }
    }

    async function report(): Promise<void> {
        try {
            const now = new Date();
            const today = now.toISOString().slice(0, 10);
            const yearMonth = today.slice(0, 7);

            // Parse today's usage
            const dailySummary = parseDayCsvFile(csvDir, today);
            const dailyByModel = new Map<string, ModelUsage>();
            if (dailySummary) {
                for (const [model, usage] of dailySummary.byModel) {
                    const cost = computeCost(
                        model,
                        usage.inputTokens,
                        usage.outputTokens,
                        usage.cachedInputTokens,
                    );
                    dailyByModel.set(model, { ...usage, cost });
                }
            }

            // Parse monthly usage
            const monthSummaries = parseMonthCsvFiles(csvDir, yearMonth);
            const monthlyByModel = new Map<string, ModelUsage>();
            for (const day of monthSummaries) {
                for (const [model, usage] of day.byModel) {
                    const existing = monthlyByModel.get(model) ?? {
                        inputTokens: 0,
                        cachedInputTokens: 0,
                        outputTokens: 0,
                        cost: 0,
                    };
                    existing.inputTokens += usage.inputTokens;
                    existing.cachedInputTokens += usage.cachedInputTokens;
                    existing.outputTokens += usage.outputTokens;
                    existing.cost = computeCost(
                        model,
                        existing.inputTokens,
                        existing.outputTokens,
                        existing.cachedInputTokens,
                    );
                    monthlyByModel.set(model, existing);
                }
            }

            // Build a hash of the data to detect no-change
            const hashInput = JSON.stringify([
                [...dailyByModel.entries()],
                [...monthlyByModel.entries()],
            ]);

            if (hashInput === lastReportHash) {
                logger.info(TAG, "No new token usage since last report — skipping.");
                return;
            }

            // Check if there's any usage at all
            if (monthlyByModel.size === 0) {
                logger.info(TAG, "No token usage data found — skipping.");
                return;
            }

            lastReportHash = hashInput;
            persistHash(hashInput);

            const message = buildReport(dailyByModel, monthlyByModel, today, yearMonth);
            await discord.sendToChannel(reportChannelId, message);
            logger.info(TAG, "Posted hourly token usage report.");
        } catch (e: unknown) {
            logger.error(TAG, "Failed to post token usage report", e);
        }
    }

    return new Promise<void>((resolve) => {
        logger.info(TAG, "Will post initial usage report in 10s.");

        // Run first report after a short delay (let system start up)
        const initialDelay = setTimeout(() => {
            if (abortSignal.aborted) {
                resolve();
                return;
            }
            report();
        }, 10_000); // 10 seconds after start

        // Then every hour
        const interval = setInterval(() => {
            if (abortSignal.aborted) {
                clearInterval(interval);
                resolve();
                return;
            }
            report();
        }, 3_600_000); // 1 hour

        abortSignal.addEventListener(
            "abort",
            () => {
                clearTimeout(initialDelay);
                clearInterval(interval);
                resolve();
            },
            { once: true },
        );

        if (abortSignal.aborted) {
            clearTimeout(initialDelay);
            clearInterval(interval);
            resolve();
        }
    });
}
