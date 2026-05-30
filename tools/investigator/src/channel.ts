/**
 * A simple bounded async channel for producer/consumer communication.
 *
 * When the channel is at capacity:
 * - `dropOldest: true` (default for large buffers): drops the oldest entry to make room.
 * - `dropOldest: false`: rejects the push and returns false.
 */
export class Channel<T> {
    private queue: T[] = [];
    private waiters: Array<(value: T | undefined) => void> = [];
    private closed = false;
    private readonly capacity: number;
    private readonly dropOldest: boolean;

    constructor(capacity = Infinity, dropOldest = false) {
        this.capacity = capacity;
        this.dropOldest = dropOldest;
    }

    /**
     * Push a value into the channel.
     * If at capacity and `dropOldest` is true, evicts the oldest entry.
     * If at capacity and `dropOldest` is false, returns false (value not enqueued).
     */
    push(value: T): boolean {
        if (this.closed) return false;
        if (this.waiters.length > 0) {
            const waiter = this.waiters.shift()!;
            waiter(value);
            return true;
        }
        if (this.queue.length >= this.capacity) {
            if (this.dropOldest) {
                this.queue.shift();
            } else {
                return false;
            }
        }
        this.queue.push(value);
        return true;
    }

    /**
     * Pull the next value, waiting if none available.
     * Returns undefined if closed or if the provided AbortSignal fires.
     */
    async pull(signal?: AbortSignal): Promise<T | undefined> {
        if (signal?.aborted) return undefined;
        if (this.queue.length > 0) {
            return this.queue.shift()!;
        }
        if (this.closed) return undefined;
        return new Promise<T | undefined>((resolve) => {
            const waiter = (value: T | undefined) => {
                cleanup();
                resolve(value);
            };

            const onAbort = () => {
                const idx = this.waiters.indexOf(waiter);
                if (idx >= 0) this.waiters.splice(idx, 1);
                cleanup();
                resolve(undefined);
            };

            const cleanup = () => {
                signal?.removeEventListener("abort", onAbort);
            };

            this.waiters.push(waiter);
            signal?.addEventListener("abort", onAbort, { once: true });
        });
    }

    close(): void {
        this.closed = true;
        for (const waiter of this.waiters) {
            waiter(undefined);
        }
        this.waiters = [];
    }

    get isClosed(): boolean {
        return this.closed;
    }
}
