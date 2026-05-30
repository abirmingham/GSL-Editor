import * as fs from "fs";
import * as path from "path";

interface RegistryEntry {
    sessionId: string;
    lastAccess: number;
}

function debugLog(msg: string): void {
    if (!process.env.DEBUG_THREAD_REGISTRY) return;
    const ts = new Date().toISOString();
    console.log(`${ts} [ThreadRegistry] ${msg}`);
}

/**
 * Maps Discord thread IDs to Codex session IDs so that
 * follow-up messages in a thread can resume the correct session.
 *
 * Entries are persisted to disk so they survive bot restarts.
 * Entries are evicted after a configurable TTL to prevent unbounded growth.
 */
export class ThreadRegistry {
    private readonly map = new Map<string, RegistryEntry>();
    private readonly ttlMs: number;
    private readonly persistPath: string | undefined;
    private saveTimer: ReturnType<typeof setTimeout> | null = null;
    private dirty = false;

    constructor(opts?: { ttlMs?: number; persistPath?: string }) {
        this.ttlMs = opts?.ttlMs ?? 48 * 60 * 60 * 1000;
        this.persistPath = opts?.persistPath;
        this.load();
        debugLog(
            `Initialized with ${this.map.size} entries from ${this.persistPath ?? "(no persist)"}`,
        );
    }

    /** Register a Discord thread as associated with a codex session. */
    register(discordThreadId: string, codexSessionId: string): void {
        debugLog(`register(thread=${discordThreadId}, session=${codexSessionId})`);
        this.prune();
        this.map.set(discordThreadId, { sessionId: codexSessionId, lastAccess: Date.now() });
        this.save();
        debugLog(`register done — map now has ${this.map.size} entries`);
    }

    /** Look up the codex session ID for a Discord thread. */
    getSessionId(discordThreadId: string): string | undefined {
        const entry = this.map.get(discordThreadId);
        if (!entry) {
            debugLog(
                `getSessionId(thread=${discordThreadId}) → NOT FOUND (map has ${this.map.size} entries)`,
            );
            return undefined;
        }
        if (Date.now() - entry.lastAccess > this.ttlMs) {
            debugLog(
                `getSessionId(thread=${discordThreadId}) → EXPIRED (age=${Date.now() - entry.lastAccess}ms)`,
            );
            this.map.delete(discordThreadId);
            this.save();
            return undefined;
        }
        entry.lastAccess = Date.now();
        this.deferSave();
        debugLog(`getSessionId(thread=${discordThreadId}) → ${entry.sessionId}`);
        return entry.sessionId;
    }

    /** Check if a thread is known to this bot. */
    hasThread(discordThreadId: string): boolean {
        return this.getSessionId(discordThreadId) !== undefined;
    }

    private prune(): void {
        const now = Date.now();
        for (const [key, entry] of this.map) {
            if (now - entry.lastAccess > this.ttlMs) {
                this.map.delete(key);
            }
        }
    }

    private load(): void {
        if (!this.persistPath) return;
        try {
            const raw = fs.readFileSync(this.persistPath, "utf-8");
            const entries: Record<string, RegistryEntry> = JSON.parse(raw);
            const now = Date.now();
            for (const [key, entry] of Object.entries(entries)) {
                if (now - entry.lastAccess <= this.ttlMs) {
                    this.map.set(key, entry);
                }
            }
        } catch {
            // File doesn't exist or is corrupt — start fresh
        }
    }

    private save(): void {
        if (!this.persistPath) return;
        this.dirty = false;
        if (this.saveTimer) {
            clearTimeout(this.saveTimer);
            this.saveTimer = null;
        }
        const obj: Record<string, RegistryEntry> = {};
        for (const [key, entry] of this.map) {
            obj[key] = entry;
        }
        const dir = path.dirname(this.persistPath);
        fs.mkdirSync(dir, { recursive: true });
        // Atomic write: write to temp file then rename to prevent corruption on crash
        const tmp = this.persistPath + ".tmp";
        fs.writeFileSync(tmp, JSON.stringify(obj, null, 2));
        fs.renameSync(tmp, this.persistPath);
    }

    /** Schedule a save within 5 seconds. Coalesces multiple lastAccess updates. */
    private deferSave(): void {
        this.dirty = true;
        if (this.saveTimer) return;
        this.saveTimer = setTimeout(() => {
            this.saveTimer = null;
            if (this.dirty) this.save();
        }, 5000);
        this.saveTimer.unref();
    }
}
