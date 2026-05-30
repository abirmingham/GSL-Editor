import { describe, it, expect } from "vitest";
import {
    normalizeModelForCost,
    computeCost,
    formatCost,
    formatTokens,
} from "../src/tokenUsageReporter";

describe("normalizeModelForCost", () => {
    it("returns exact match for known model", () => {
        expect(normalizeModelForCost("gpt-5.5")).toBe("gpt-5.5");
    });

    it("handles case-insensitive matching", () => {
        expect(normalizeModelForCost("GPT-5.5")).toBe("gpt-5.5");
    });

    it("matches model with date suffix via prefix", () => {
        expect(normalizeModelForCost("gpt-5.5-2026-05-01")).toBe("gpt-5.5");
    });

    it("matches mini variant", () => {
        expect(normalizeModelForCost("gpt-5.4-mini")).toBe("gpt-5.4-mini");
    });

    it("matches mini variant with date suffix", () => {
        expect(normalizeModelForCost("gpt-5.4-mini-2026-01-15")).toBe("gpt-5.4-mini");
    });

    it("returns undefined for unknown model", () => {
        expect(normalizeModelForCost("claude-3-opus")).toBeUndefined();
    });

    it("returns undefined for empty string", () => {
        expect(normalizeModelForCost("")).toBeUndefined();
    });
});

describe("computeCost", () => {
    it("computes correct cost for known model", () => {
        // gpt-5.5: $5.00 per 1M input, $30.00 per 1M output
        const cost = computeCost("gpt-5.5", 1_000_000, 1_000_000);
        expect(cost).toBeCloseTo(35.0);
    });

    it("computes cost for fractional token amounts", () => {
        // 1 input token at $5.00/1M = $0.000005
        const cost = computeCost("gpt-5.5", 1, 0);
        expect(cost).toBeCloseTo(0.000005);
    });

    it("returns 0 for unknown model", () => {
        expect(computeCost("unknown-model", 1_000_000, 1_000_000)).toBe(0);
    });

    it("returns 0 for zero tokens", () => {
        expect(computeCost("gpt-5.5", 0, 0)).toBe(0);
    });

    it("handles model with date suffix", () => {
        const cost = computeCost("gpt-5.5-2026-05-01", 1_000_000, 0);
        expect(cost).toBeCloseTo(5.0);
    });

    it("output tokens cost more than input tokens", () => {
        const inputCost = computeCost("gpt-5.5", 1_000_000, 0);
        const outputCost = computeCost("gpt-5.5", 0, 1_000_000);
        expect(outputCost).toBeGreaterThan(inputCost);
    });

    it("applies 10% rate for cached input tokens", () => {
        // 1M input, all cached: $5 * 0.1 = $0.50
        const allCached = computeCost("gpt-5.5", 1_000_000, 0, 1_000_000);
        expect(allCached).toBeCloseTo(0.5);
    });

    it("mixed cached and uncached costs less than all uncached", () => {
        const noCaching = computeCost("gpt-5.5", 1_000_000, 0, 0);
        const halfCached = computeCost("gpt-5.5", 1_000_000, 0, 500_000);
        expect(halfCached).toBeLessThan(noCaching);
        // uncached: 500k * $5/1M = $2.50, cached: 500k * $0.50/1M = $0.25
        expect(halfCached).toBeCloseTo(2.75);
    });
});

describe("formatCost", () => {
    it("formats small costs with 4 decimals", () => {
        expect(formatCost(0.005)).toBe("$0.0050");
    });

    it("formats larger costs with 2 decimals", () => {
        expect(formatCost(1.5)).toBe("$1.50");
    });

    it("formats zero", () => {
        expect(formatCost(0)).toBe("$0.0000");
    });

    it("formats costs at the boundary (0.01)", () => {
        expect(formatCost(0.01)).toBe("$0.01");
    });
});

describe("formatTokens", () => {
    it("formats millions", () => {
        expect(formatTokens(1_500_000)).toBe("1.50M");
    });

    it("formats thousands", () => {
        expect(formatTokens(15_000)).toBe("15.0K");
    });

    it("formats small numbers as-is", () => {
        expect(formatTokens(500)).toBe("500");
    });

    it("formats exactly 1M", () => {
        expect(formatTokens(1_000_000)).toBe("1.00M");
    });

    it("formats exactly 1K", () => {
        expect(formatTokens(1_000)).toBe("1.0K");
    });

    it("formats zero", () => {
        expect(formatTokens(0)).toBe("0");
    });
});
