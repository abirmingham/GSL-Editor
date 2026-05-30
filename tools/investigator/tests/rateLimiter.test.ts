import { describe, it, expect, beforeEach, vi } from "vitest";
import { RateLimiter } from "../src/rateLimiter";

describe("RateLimiter", () => {
    const HOUR_MS = 60 * 60 * 1000;

    beforeEach(() => {
        vi.useFakeTimers();
    });

    it("allows actions up to the limit", () => {
        const limiter = new RateLimiter(3);
        expect(limiter.canProceed()).toBe(true);
        limiter.record();
        expect(limiter.canProceed()).toBe(true);
        limiter.record();
        expect(limiter.canProceed()).toBe(true);
        limiter.record();
        // At limit now
        expect(limiter.canProceed()).toBe(false);
    });

    it("currentCount reflects recorded actions", () => {
        const limiter = new RateLimiter(10);
        expect(limiter.currentCount()).toBe(0);
        limiter.record();
        limiter.record();
        expect(limiter.currentCount()).toBe(2);
    });

    it("prunes timestamps older than 1 hour", () => {
        const limiter = new RateLimiter(2);
        limiter.record(); // at t=0
        limiter.record(); // at t=0
        expect(limiter.canProceed()).toBe(false);

        // Advance time by exactly 1 hour — timestamps at t=0 should be pruned
        // (the cutoff uses <=, so timestamps exactly at the cutoff are removed)
        vi.advanceTimersByTime(HOUR_MS);
        expect(limiter.canProceed()).toBe(true);
        expect(limiter.currentCount()).toBe(0);
    });

    it("does not prune timestamps that are within the hour", () => {
        const limiter = new RateLimiter(2);
        limiter.record(); // at t=0
        limiter.record(); // at t=0

        // Advance time by 1ms less than an hour
        vi.advanceTimersByTime(HOUR_MS - 1);
        expect(limiter.canProceed()).toBe(false);
        expect(limiter.currentCount()).toBe(2);
    });

    it("shouldNotify returns true only once per window when limit is hit", () => {
        const limiter = new RateLimiter(2);
        limiter.record();
        limiter.record();

        expect(limiter.shouldNotify()).toBe(true);
        // Second call should be false — already notified
        expect(limiter.shouldNotify()).toBe(false);
    });

    it("shouldNotify returns false when under the limit", () => {
        const limiter = new RateLimiter(5);
        limiter.record();
        expect(limiter.shouldNotify()).toBe(false);
    });

    it("shouldNotify resets after the hour rolls over", () => {
        const limiter = new RateLimiter(1);
        limiter.record();
        expect(limiter.shouldNotify()).toBe(true);
        expect(limiter.shouldNotify()).toBe(false);

        // Advance past the hour window
        vi.advanceTimersByTime(HOUR_MS + 1);
        // Now add another record to hit the limit again
        limiter.record();
        expect(limiter.shouldNotify()).toBe(true);
    });

    it("handles maxPerHour of 0 (always at limit)", () => {
        const limiter = new RateLimiter(0);
        expect(limiter.canProceed()).toBe(false);
    });

    it("handles sliding window correctly", () => {
        const limiter = new RateLimiter(2);

        // Record at t=0
        limiter.record();
        // Advance 30 minutes and record again
        vi.advanceTimersByTime(HOUR_MS / 2);
        limiter.record();

        expect(limiter.canProceed()).toBe(false);

        // Advance 30 more minutes — first record falls off, second still within window
        vi.advanceTimersByTime(HOUR_MS / 2);
        expect(limiter.canProceed()).toBe(true);
        expect(limiter.currentCount()).toBe(1);
    });
});
