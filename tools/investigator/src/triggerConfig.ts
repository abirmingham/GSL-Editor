import { buildBugReportStdinPreamble, buildInvestigationStdinPreamble } from "./prompts";

export interface TriggerMatcher {
    /** Human-readable name for this trigger type. */
    name: string;
    /** Substring that must appear in a line to start capture. */
    triggerPattern: string;
    /** Regex patterns that, if matched, cause the trigger to be skipped. */
    excludePatterns?: RegExp[];
    /** Substring that marks the end of the capture window. */
    captureEndPattern: string;
    /** Number of pre-context lines to keep before the trigger. */
    preContextLines: number;
    /** Maximum lines to capture (including pre-context and trigger). */
    maxCaptureLines: number;
    /** Discord channel ID where announcements for this trigger type are posted. */
    channelId: string;
    /** Builds the investigation preamble from the captured context. */
    buildPreamble: (instanceName: string, contextLines: string[], existenceData?: string) => string;
}

function requireEnvForTrigger(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

let _cachedMatchers: TriggerMatcher[] | undefined;

export function getTriggerMatchers(): TriggerMatcher[] {
    if (!_cachedMatchers) {
        _cachedMatchers = [
            {
                name: "SCR*ERR",
                triggerPattern: "GM-[SCR*ERR]",
                captureEndPattern: "This call sequence was triggered by",
                preContextLines: 0,
                maxCaptureLines: 200,
                channelId: requireEnvForTrigger("DISCORD_SCREAMER_CHANNEL_ID"),
                buildPreamble: buildInvestigationStdinPreamble,
            },
            {
                name: "BUG",
                triggerPattern: "submitted a bug report",
                excludePatterns: [/Web FE Bug.*Processing Error/],
                captureEndPattern: "{monitor}",
                preContextLines: 0,
                maxCaptureLines: 1,
                channelId: requireEnvForTrigger("DISCORD_BUG_CHANNEL_ID"),
                buildPreamble: buildBugReportStdinPreamble,
            },
        ];
    }
    return _cachedMatchers;
}
