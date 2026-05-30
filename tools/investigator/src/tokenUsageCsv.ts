import * as fs from "fs";
import * as path from "path";

const CSV_HEADER = "timestamp,model,input_tokens,cached_input_tokens,output_tokens,total_tokens\n";

/**
 * Returns the path to today's CSV file: `<baseDir>/token-usage-YYYY-MM-DD.csv`
 */
function getDailyCsvPath(baseDir: string, date?: Date): string {
    const d = date ?? new Date();
    const dateStr = d.toISOString().slice(0, 10); // YYYY-MM-DD
    return path.join(baseDir, `token-usage-${dateStr}.csv`);
}

/**
 * Append a single token usage row to the daily CSV file.
 * Creates the file with a header if it doesn't exist.
 */
export function appendTokenUsageCsv(
    baseDir: string,
    timestamp: string,
    model: string,
    inputTokens: number,
    cachedInputTokens: number,
    outputTokens: number,
    totalTokens: number,
): void {
    fs.mkdirSync(baseDir, { recursive: true });
    const csvPath = getDailyCsvPath(baseDir);
    if (!fs.existsSync(csvPath)) {
        fs.writeFileSync(csvPath, CSV_HEADER);
    }
    // Escape model name in case it contains commas
    const safeModel = model.includes(",") ? `"${model}"` : model;
    const row = `${timestamp},${safeModel},${inputTokens},${cachedInputTokens},${outputTokens},${totalTokens}\n`;
    fs.appendFileSync(csvPath, row);
}

export interface DailyTokenSummary {
    date: string;
    byModel: Map<string, { inputTokens: number; cachedInputTokens: number; outputTokens: number }>;
}

/**
 * Parse all CSV files in the base directory for a given month (YYYY-MM).
 * Returns per-day summaries grouped by model.
 */
export function parseMonthCsvFiles(baseDir: string, yearMonth: string): DailyTokenSummary[] {
    if (!fs.existsSync(baseDir)) return [];

    const prefix = `token-usage-${yearMonth}-`;
    const files = fs
        .readdirSync(baseDir)
        .filter((f) => f.startsWith(prefix) && f.endsWith(".csv"))
        .sort();

    const results: DailyTokenSummary[] = [];

    for (const file of files) {
        const date = file.replace("token-usage-", "").replace(".csv", "");
        const byModel = new Map<
            string,
            { inputTokens: number; cachedInputTokens: number; outputTokens: number }
        >();

        const content = fs.readFileSync(path.join(baseDir, file), "utf-8");
        const lines = content.split("\n");

        // Detect format from header: 6 columns = new format with cached_input_tokens
        const header = lines[0] ?? "";
        const hasCache = header.includes("cached_input_tokens");

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const parts = parseCsvLine(line);
            if (parts.length < 5) continue;

            const model = parts[1];
            let inputTokens: number;
            let cachedInputTokens: number;
            let outputTokens: number;
            if (hasCache && parts.length >= 6) {
                inputTokens = parseInt(parts[2], 10) || 0;
                cachedInputTokens = parseInt(parts[3], 10) || 0;
                outputTokens = parseInt(parts[4], 10) || 0;
            } else {
                inputTokens = parseInt(parts[2], 10) || 0;
                cachedInputTokens = 0;
                outputTokens = parseInt(parts[3], 10) || 0;
            }

            const existing = byModel.get(model) ?? {
                inputTokens: 0,
                cachedInputTokens: 0,
                outputTokens: 0,
            };
            existing.inputTokens += inputTokens;
            existing.cachedInputTokens += cachedInputTokens;
            existing.outputTokens += outputTokens;
            byModel.set(model, existing);
        }

        if (byModel.size > 0) {
            results.push({ date, byModel });
        }
    }

    return results;
}

/**
 * Parse a single day's CSV file.
 */
export function parseDayCsvFile(baseDir: string, date: string): DailyTokenSummary | undefined {
    const csvPath = path.join(baseDir, `token-usage-${date}.csv`);
    if (!fs.existsSync(csvPath)) return undefined;

    const byModel = new Map<
        string,
        { inputTokens: number; cachedInputTokens: number; outputTokens: number }
    >();
    const content = fs.readFileSync(csvPath, "utf-8");
    const lines = content.split("\n");

    // Detect format from header: 6 columns = new format with cached_input_tokens
    const header = lines[0] ?? "";
    const hasCache = header.includes("cached_input_tokens");

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const parts = parseCsvLine(line);
        if (parts.length < 5) continue;

        const model = parts[1];
        let inputTokens: number;
        let cachedInputTokens: number;
        let outputTokens: number;
        if (hasCache && parts.length >= 6) {
            inputTokens = parseInt(parts[2], 10) || 0;
            cachedInputTokens = parseInt(parts[3], 10) || 0;
            outputTokens = parseInt(parts[4], 10) || 0;
        } else {
            inputTokens = parseInt(parts[2], 10) || 0;
            cachedInputTokens = 0;
            outputTokens = parseInt(parts[3], 10) || 0;
        }

        const existing = byModel.get(model) ?? {
            inputTokens: 0,
            cachedInputTokens: 0,
            outputTokens: 0,
        };
        existing.inputTokens += inputTokens;
        existing.cachedInputTokens += cachedInputTokens;
        existing.outputTokens += outputTokens;
        byModel.set(model, existing);
    }

    if (byModel.size === 0) return undefined;
    return { date, byModel };
}

/** Simple CSV line parser that handles quoted fields. */
export function parseCsvLine(line: string): string[] {
    const parts: string[] = [];
    let current = "";
    let inQuotes = false;

    for (const ch of line) {
        if (ch === '"') {
            inQuotes = !inQuotes;
        } else if (ch === "," && !inQuotes) {
            parts.push(current);
            current = "";
        } else {
            current += ch;
        }
    }
    parts.push(current);
    return parts;
}
