import { Channel } from "./channel";
import { Config } from "./config";
import { DedupStore } from "./dedupStore";
import { Logger } from "./logger";
import { getTriggerMatchers, TriggerMatcher } from "./triggerConfig";
import { InvestigationRequest } from "./types";

const TAG = "TriggerWatcher";

// After completing a capture, suppress any new trigger within this window.
// Derivative screamers (e.g. Push/Pop mismatch) always follow immediately.
const SUPPRESSION_WINDOW_MS = 1000;

// Lines matching these patterns are navigation/menu noise unrelated to errors.
const NOISE_PATTERNS = [/^To select .+, type /, /^\s*\(Currently in GameMaster/];

const enum State {
    IDLE,
    CAPTURING,
}

export async function startTriggerWatcher(
    config: Config,
    lineChannel: Channel<string>,
    investigationQueue: Channel<InvestigationRequest>,
    logger: Logger,
    abortSignal: AbortSignal,
    dedupStore?: DedupStore,
): Promise<void> {
    const preBuffer: string[] = [];
    const matchers = getTriggerMatchers();
    const maxPreBuffer = Math.max(...matchers.map((m) => m.preContextLines));
    const cooldowns = new Map<string, number>();
    let lineNumber = 0;

    let state = State.IDLE;
    let activeMatcher: TriggerMatcher | undefined;
    let captureLines: string[] = [];
    let triggerLine = "";
    let triggerKey = "";
    let triggerLineNumber = 0;
    let lastCaptureEndTime = 0;

    while (!abortSignal.aborted) {
        const line = await lineChannel.pull(abortSignal);
        if (line === undefined) break;
        lineNumber++;

        if (state === State.IDLE) {
            // Maintain a rolling pre-context buffer
            preBuffer.push(line);
            if (preBuffer.length > maxPreBuffer) {
                preBuffer.shift();
            }

            // Check each matcher for a trigger
            const matcher = matchers.find((m) => line.includes(m.triggerPattern));
            if (!matcher) continue;

            // Skip lines matching exclude patterns
            if (matcher.excludePatterns?.some((re) => re.test(line))) {
                logger.info(TAG, `Excluded by pattern: ${line.slice(0, 80)}`);
                continue;
            }

            // Skip derivative screamers that immediately follow a prior capture
            const now = Date.now();
            if (lastCaptureEndTime > 0 && now - lastCaptureEndTime < SUPPRESSION_WINDOW_MS) {
                logger.info(
                    TAG,
                    `Suppressing trigger within ${SUPPRESSION_WINDOW_MS}ms of prior capture`,
                );
                continue;
            }

            // Check dedupe cooldown
            triggerKey = extractTriggerKey(line);
            const isDup = dedupStore
                ? dedupStore.isDuplicate(triggerKey)
                : (() => {
                      const lastFired = cooldowns.get(triggerKey);
                      return !!(lastFired && now - lastFired < config.dedupCooldownMs);
                  })();
            if (isDup) {
                logger.info(TAG, `Dedup: skipping "${triggerKey}" (cooldown active)`);
                // Still update suppression time so derivative screamers
                // (e.g. Push/Pop mismatch) that follow are also suppressed
                lastCaptureEndTime = now;
                continue;
            }

            // Start capturing
            state = State.CAPTURING;
            activeMatcher = matcher;
            triggerLine = line;
            triggerLineNumber = lineNumber;
            const preLines = preBuffer.slice(-(matcher.preContextLines + 1), -1);
            captureLines = [...preLines, line];
            logger.info(
                TAG,
                `Trigger [${matcher.name}] detected at line ${lineNumber}, capturing...`,
            );

            // Check if capture is already complete (single-line triggers)
            const immediatelyDone =
                line.includes(matcher.captureEndPattern) ||
                captureLines.length >= matcher.maxCaptureLines;
            if (!immediatelyDone) continue;
        } else {
            // CAPTURING
            captureLines.push(line);

            const done =
                line.includes(activeMatcher!.captureEndPattern) ||
                captureLines.length >= activeMatcher!.maxCaptureLines;

            if (!done) continue;
        }

        // Capture complete
        state = State.IDLE;
        lastCaptureEndTime = Date.now();
        if (dedupStore) {
            dedupStore.record(triggerKey);
        } else {
            cooldowns.set(triggerKey, lastCaptureEndTime);
        }
        preBuffer.length = 0; // reset pre-buffer after a capture

        // Filter out navigation/menu noise
        const filteredLines = captureLines.filter(
            (l) => !NOISE_PATTERNS.some((pat) => pat.test(l)),
        );

        logger.info(
            TAG,
            `Capture complete: ${captureLines.length} lines (${captureLines.length - filteredLines.length} noise lines removed) from line ${triggerLineNumber}`,
        );

        const request: InvestigationRequest = {
            triggerName: activeMatcher!.name,
            triggerLine,
            contextLines: filteredLines,
            triggerKey,
            logFile: "live-stream",
            lineNumber: triggerLineNumber,
            channelId: activeMatcher!.channelId,
            buildPreamble: activeMatcher!.buildPreamble,
        };
        activeMatcher = undefined;

        if (!investigationQueue.push(request)) {
            logger.warn(TAG, "Investigation queue full — dropping request.");
        }
    }

    logger.info(TAG, "Stopped.");
}

export function extractTriggerKey(line: string): string {
    // Extract the static identifier: script number, caller, and line number.
    // e.g. "GM-[SCR*ERR](Current Script: 24686. Called by: 14694) at line 125."
    // becomes "SCR*ERR:24686:14694:125"
    const match = line.match(/Current Script:\s*(\d+)\.\s*Called by:\s*(\d+)\)\s*at line\s*(\d+)/);
    if (match) {
        return `SCR*ERR:${match[1]}:${match[2]}:${match[3]}`;
    }
    // Fallback: just use script number if caller/line not present
    const simpleMatch = line.match(/Current Script:\s*(\d+)/);
    if (simpleMatch) {
        return `SCR*ERR:${simpleMatch[1]}`;
    }
    return line.slice(0, 80);
}
