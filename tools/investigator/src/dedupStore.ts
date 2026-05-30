import * as fs from "fs";
import * as path from "path";

/**
 * A simple file-backed dedup store that persists trigger key timestamps
 * to disk so they survive process restarts.
 */
export class DedupStore {
    private data: Record<string, number> = {};

    constructor(
        private readonly filePath: string,
        private readonly cooldownMs: number,
    ) {
        this.load();
    }

    /** Returns true if the key was fired within the cooldown window. */
    isDuplicate(key: string): boolean {
        const lastFired = this.data[key];
        if (!lastFired) return false;
        return Date.now() - lastFired < this.cooldownMs;
    }

    /** Record that a trigger key was just fired. Persists to disk. */
    record(key: string): void {
        this.data[key] = Date.now();
        this.prune();
        this.save();
    }

    private load(): void {
        try {
            const raw = fs.readFileSync(this.filePath, "utf-8");
            const parsed = JSON.parse(raw);
            if (typeof parsed === "object" && parsed !== null) {
                // Validate: only keep entries with finite numeric timestamps
                this.data = {};
                for (const [key, value] of Object.entries(parsed)) {
                    if (typeof value === "number" && Number.isFinite(value)) {
                        this.data[key] = value;
                    }
                }
            }
        } catch {
            this.data = {};
        }
        this.prune();
        this.save();
    }

    private prune(): void {
        const now = Date.now();
        for (const key of Object.keys(this.data)) {
            if (now - this.data[key] >= this.cooldownMs) {
                delete this.data[key];
            }
        }
    }

    private save(): void {
        try {
            const dir = path.dirname(this.filePath);
            fs.mkdirSync(dir, { recursive: true });
            // Atomic write: write to temp file, then rename
            const tmpPath = `${this.filePath}.${process.pid}.tmp`;
            fs.writeFileSync(tmpPath, JSON.stringify(this.data));
            fs.renameSync(tmpPath, this.filePath);
        } catch {
            // Non-fatal: in-memory data is still valid as fallback
        }
    }
}
