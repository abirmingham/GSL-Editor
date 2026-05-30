import { describe, it, expect, beforeEach, afterEach } from "vitest";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";
import { DedupStore } from "../src/dedupStore";

describe("DedupStore", () => {
    let tmpDir: string;
    let storePath: string;

    beforeEach(() => {
        tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "dedup-test-"));
        storePath = path.join(tmpDir, "dedup.json");
    });

    afterEach(() => {
        fs.rmSync(tmpDir, { recursive: true, force: true });
    });

    it("records a trigger key and reports it within cooldown", () => {
        const store = new DedupStore(storePath, 60000);
        expect(store.isDuplicate("key1")).toBe(false);
        store.record("key1");
        expect(store.isDuplicate("key1")).toBe(true);
    });

    it("allows a trigger key after cooldown expires", () => {
        const _store = new DedupStore(storePath, 1000);
        // Manually write an old timestamp
        const data = { key1: Date.now() - 2000 };
        fs.writeFileSync(storePath, JSON.stringify(data));

        const store2 = new DedupStore(storePath, 1000);
        expect(store2.isDuplicate("key1")).toBe(false);
    });

    it("persists across instances (survives restart)", () => {
        const store1 = new DedupStore(storePath, 60000);
        store1.record("key1");

        // Simulate restart by creating a new instance
        const store2 = new DedupStore(storePath, 60000);
        expect(store2.isDuplicate("key1")).toBe(true);
    });

    it("handles missing file gracefully", () => {
        const store = new DedupStore(storePath, 60000);
        expect(store.isDuplicate("anything")).toBe(false);
    });

    it("handles corrupt file gracefully", () => {
        fs.writeFileSync(storePath, "not json at all {{{");
        const store = new DedupStore(storePath, 60000);
        expect(store.isDuplicate("anything")).toBe(false);
    });

    it("handles malformed timestamps gracefully", () => {
        fs.writeFileSync(storePath, JSON.stringify({ key1: "not-a-number", key2: null }));
        const store = new DedupStore(storePath, 60000);
        expect(store.isDuplicate("key1")).toBe(false);
        expect(store.isDuplicate("key2")).toBe(false);
    });

    it("prunes expired entries on load", () => {
        const now = Date.now();
        const data = {
            expired: now - 120000,
            fresh: now - 10000,
        };
        fs.writeFileSync(storePath, JSON.stringify(data));

        const store = new DedupStore(storePath, 60000);
        expect(store.isDuplicate("expired")).toBe(false);
        expect(store.isDuplicate("fresh")).toBe(true);

        // Verify the expired entry was removed from disk
        const onDisk = JSON.parse(fs.readFileSync(storePath, "utf-8"));
        expect(onDisk).not.toHaveProperty("expired");
        expect(onDisk).toHaveProperty("fresh");
    });

    it("different keys are independent", () => {
        const store = new DedupStore(storePath, 60000);
        store.record("key1");
        expect(store.isDuplicate("key1")).toBe(true);
        expect(store.isDuplicate("key2")).toBe(false);
    });
});
