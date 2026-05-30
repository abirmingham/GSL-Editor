import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Channel } from "../src/channel";
import { Config } from "../src/config";
import { startTriggerWatcher, extractTriggerKey } from "../src/triggerWatcher";
import { InvestigationRequest } from "../src/types";
import { Logger } from "../src/logger";

const TEST_MATCHERS = [
    {
        name: "SCR*ERR",
        triggerPattern: "GM-[SCR*ERR]",
        captureEndPattern: "--- End of",
        preContextLines: 3,
        maxCaptureLines: 20,
        channelId: "test-channel-id",
        buildPreamble: (instanceName: string, lines: string[], _existence?: string) =>
            `preamble:${instanceName}:${lines.length}`,
    },
];

vi.mock("../src/triggerConfig", () => ({
    getTriggerMatchers: () => TEST_MATCHERS,
}));

function makeConfig(overrides: Partial<Config> = {}): Config {
    return {
        botWorkingTmpDir: "/tmp",
        logDir: "/tmp/logs",
        resultsDir: "/tmp/results",
        maxLogSizeBytes: 1000000,
        dedupCooldownMs: 60000,
        maxConcurrentInvestigations: 2,
        codexWorkdir: "/tmp/codex",
        character: "TestChar",
        account: "TEST",
        mcpServerPath: "/fake",
        gslPassword: "x",
        gslDownloadPath: "/tmp/dl",
        gslMcpLoginConfigFile: "/fake.json",
        instance: "GS4D",
        codexModel: undefined,
        codexReasoningEffort: "low",
        maxInvestigationsPerHour: 10,
        maxDiscordMessagesPerHour: 250,
        worktreeBaseDir: "/tmp/worktrees",
        ...overrides,
    };
}

function makeLogger(): Logger {
    return {
        info: vi.fn(),
        warn: vi.fn(),
        error: vi.fn(),
        close: vi.fn(),
    };
}

describe("extractTriggerKey", () => {
    it("extracts script, caller, and line for full SCR*ERR format", () => {
        const line =
            "GM-[SCR*ERR](Current Script: 24686. Called by: 14694) at line 125. Some extra text.";
        expect(extractTriggerKey(line)).toBe("SCR*ERR:24686:14694:125");
    });

    it("extracts script number only when caller/line are absent", () => {
        const line = "GM-[SCR*ERR](Current Script: 12345)";
        expect(extractTriggerKey(line)).toBe("SCR*ERR:12345");
    });

    it("falls back to first 80 chars for unrecognized format", () => {
        const line = "Some random trigger line that does not match the expected pattern at all";
        expect(extractTriggerKey(line)).toBe(line.slice(0, 80));
    });

    it("truncates fallback to 80 chars", () => {
        const line = "x".repeat(200);
        expect(extractTriggerKey(line)).toHaveLength(80);
    });
});

describe("startTriggerWatcher", () => {
    let lineChannel: Channel<string>;
    let investigationQueue: Channel<InvestigationRequest>;
    let logger: Logger;
    let abortController: AbortController;

    beforeEach(() => {
        lineChannel = new Channel<string>(1000);
        investigationQueue = new Channel<InvestigationRequest>(10);
        logger = makeLogger();
        abortController = new AbortController();
    });

    afterEach(() => {
        vi.useRealTimers();
        // Reset mocked matcher to defaults
        TEST_MATCHERS[0].preContextLines = 3;
        TEST_MATCHERS[0].maxCaptureLines = 20;
    });

    /**
     * Push lines into the channel, close it, then run the watcher to completion.
     * Since Channel.pull() returns immediately when data is queued and returns
     * undefined when closed+empty, the watcher processes all lines then exits.
     */
    async function runWithLines(config: Config, lines: string[]): Promise<InvestigationRequest[]> {
        for (const line of lines) {
            lineChannel.push(line);
        }
        lineChannel.close();

        await startTriggerWatcher(
            config,
            lineChannel,
            investigationQueue,
            logger,
            abortController.signal,
        );

        // Drain results
        investigationQueue.close();
        const results: InvestigationRequest[] = [];
        while (true) {
            const req = await investigationQueue.pull();
            if (req === undefined) break;
            results.push(req);
        }
        return results;
    }

    it("captures a complete trigger-to-end sequence", async () => {
        const config = makeConfig();
        const lines = [
            "Some pre-context line 1",
            "Some pre-context line 2",
            "GM-[SCR*ERR](Current Script: 100. Called by: 200) at line 50. Error occurred.",
            "Detail line 1",
            "Detail line 2",
            "--- End of error report ---",
        ];

        const results = await runWithLines(config, lines);

        expect(results).toHaveLength(1);
        expect(results[0].triggerKey).toBe("SCR*ERR:100:200:50");
        expect(results[0].triggerLine).toContain("GM-[SCR*ERR]");
        expect(results[0].contextLines).toContain("Some pre-context line 1");
        expect(results[0].contextLines).toContain("Detail line 2");
        expect(results[0].contextLines).toContain("--- End of error report ---");
    });

    it("includes pre-context lines up to configured limit", async () => {
        const config = makeConfig();
        TEST_MATCHERS[0].preContextLines = 3;
        const lines = [
            "Line A (too old)",
            "Line B (pre-context)",
            "Line C (pre-context)",
            "Line D (pre-context)",
            "GM-[SCR*ERR](Current Script: 1. Called by: 2) at line 3.",
            "--- End of error ---",
        ];

        const results = await runWithLines(config, lines);

        expect(results).toHaveLength(1);
        // preContextLines: 3, but trigger occupies one slot, so 2 pre-context lines survive
        expect(results[0].contextLines).toContain("Line C (pre-context)");
        expect(results[0].contextLines).toContain("Line D (pre-context)");
        expect(results[0].contextLines).not.toContain("Line A (too old)");
    });

    it("caps capture at maxCaptureLines when no end pattern appears", async () => {
        const config = makeConfig();
        TEST_MATCHERS[0].maxCaptureLines = 5;
        TEST_MATCHERS[0].preContextLines = 0;
        const lines = [
            "GM-[SCR*ERR](Current Script: 1. Called by: 2) at line 3.",
            "line 2",
            "line 3",
            "line 4",
            "line 5 (this triggers maxCaptureLines)",
            "line 6 should not appear",
        ];

        const results = await runWithLines(config, lines);

        expect(results).toHaveLength(1);
        expect(results[0].contextLines).toHaveLength(5);
        expect(results[0].contextLines).not.toContain("line 6 should not appear");
    });

    it("deduplicates triggers with same key within cooldown", async () => {
        const config = makeConfig({ dedupCooldownMs: 60000 });
        const lines = [
            "GM-[SCR*ERR](Current Script: 100. Called by: 200) at line 50.",
            "--- End of error ---",
            "GM-[SCR*ERR](Current Script: 100. Called by: 200) at line 50.",
            "--- End of error ---",
        ];

        const results = await runWithLines(config, lines);

        // Second occurrence should be deduped
        expect(results).toHaveLength(1);
    });

    it("allows same trigger key after cooldown expires", async () => {
        vi.useFakeTimers();
        const config = makeConfig({ dedupCooldownMs: 5000 });

        // Push first trigger + end
        lineChannel.push("GM-[SCR*ERR](Current Script: 100. Called by: 200) at line 50.");
        lineChannel.push("--- End of error ---");

        const watcherPromise = startTriggerWatcher(
            config,
            lineChannel,
            investigationQueue,
            logger,
            abortController.signal,
        );

        // Let the watcher process the first batch
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);

        // Advance time past cooldown
        vi.advanceTimersByTime(6000);

        // Second trigger (same key, after cooldown)
        lineChannel.push("GM-[SCR*ERR](Current Script: 100. Called by: 200) at line 50.");
        lineChannel.push("--- End of error ---");

        // Let watcher process second batch then close
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);

        lineChannel.close();
        await watcherPromise;

        investigationQueue.close();
        const results: InvestigationRequest[] = [];
        while (true) {
            const req = await investigationQueue.pull();
            if (req === undefined) break;
            results.push(req);
        }

        expect(results).toHaveLength(2);
    });

    it("filters out noise lines from captured output", async () => {
        const config = makeConfig();
        const lines = [
            "GM-[SCR*ERR](Current Script: 1. Called by: 2) at line 3.",
            "To select GameMaster, type GM",
            "  (Currently in GameMaster mode)",
            "Actual error detail",
            "--- End of error ---",
        ];

        const results = await runWithLines(config, lines);

        expect(results).toHaveLength(1);
        expect(results[0].contextLines).toContain("Actual error detail");
        expect(results[0].contextLines).not.toContain("To select GameMaster, type GM");
        expect(results[0].contextLines).not.toContain("  (Currently in GameMaster mode)");
    });

    it("handles abort signal gracefully", async () => {
        const config = makeConfig();

        const watcherPromise = startTriggerWatcher(
            config,
            lineChannel,
            investigationQueue,
            logger,
            abortController.signal,
        );

        abortController.abort();
        await watcherPromise;

        expect(logger.info).toHaveBeenCalledWith("TriggerWatcher", "Stopped.");
    });

    it("allows different trigger keys when suppression window has passed", async () => {
        vi.useFakeTimers();
        const config = makeConfig({ dedupCooldownMs: 60000 });

        // First trigger
        lineChannel.push("GM-[SCR*ERR](Current Script: 100. Called by: 200) at line 50.");
        lineChannel.push("--- End of error ---");

        const watcherPromise = startTriggerWatcher(
            config,
            lineChannel,
            investigationQueue,
            logger,
            abortController.signal,
        );

        // Let the watcher process the first batch
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);

        // Advance past suppression window (1000ms)
        vi.advanceTimersByTime(1100);

        // Second trigger with DIFFERENT key
        lineChannel.push("GM-[SCR*ERR](Current Script: 999. Called by: 200) at line 10.");
        lineChannel.push("--- End of error ---");

        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);
        await vi.advanceTimersByTimeAsync(0);

        lineChannel.close();
        await watcherPromise;

        investigationQueue.close();
        const results: InvestigationRequest[] = [];
        while (true) {
            const req = await investigationQueue.pull();
            if (req === undefined) break;
            results.push(req);
        }

        expect(results).toHaveLength(2);
        expect(results[0].triggerKey).toBe("SCR*ERR:100:200:50");
        expect(results[1].triggerKey).toBe("SCR*ERR:999:200:10");
    });
});
