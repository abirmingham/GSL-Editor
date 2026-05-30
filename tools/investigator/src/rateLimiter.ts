const HOUR_MS = 60 * 60 * 1000;

export class RateLimiter {
    private readonly maxPerHour: number;
    private readonly timestamps: number[] = [];
    private limitNotifiedAt: number | null = null;

    constructor(maxPerHour: number) {
        this.maxPerHour = maxPerHour;
    }

    /** Prune timestamps older than 1 hour. */
    private prune(now: number): void {
        const cutoff = now - HOUR_MS;
        while (this.timestamps.length > 0 && this.timestamps[0] <= cutoff) {
            this.timestamps.shift();
        }
        // Reset notification flag if we've rolled into a new hour window
        if (this.limitNotifiedAt !== null && this.limitNotifiedAt <= cutoff) {
            this.limitNotifiedAt = null;
        }
    }

    /** Check if we can perform an action. Does NOT consume a slot. */
    canProceed(): boolean {
        const now = Date.now();
        this.prune(now);
        return this.timestamps.length < this.maxPerHour;
    }

    /** Record that an action was performed. */
    record(): void {
        this.timestamps.push(Date.now());
    }

    /**
     * Returns true if the limit was just hit and we haven't notified yet this window.
     * Calling this marks the notification as sent.
     */
    shouldNotify(): boolean {
        if (this.canProceed()) return false;
        if (this.limitNotifiedAt !== null) return false;
        this.limitNotifiedAt = Date.now();
        return true;
    }

    /** Get the count used in the current hour window. */
    currentCount(): number {
        this.prune(Date.now());
        return this.timestamps.length;
    }
}
