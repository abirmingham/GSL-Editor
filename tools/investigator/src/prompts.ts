/**
 * Prompt construction for all codex sessions (investigations and @-mentions).
 * Centralised here to avoid duplication and ensure consistent formatting rules.
 *
 * gsl-reference.md (GSL language reference) and the investigate-gsl skill are
 * read on first access and cached, then inlined into every prompt. This
 * guarantees they are present and land in the stable cached prefix rather than
 * relying on the Codex harness to auto-discover them. The file was renamed from
 * AGENTS.md so the Codex CLI won't auto-load it as system instructions.
 */

import * as fs from "fs";

import { sandboxPath } from "./paths";

// ─── Inlined reference material (read once at startup) ───────────────────────

let gslReferenceCache: string | undefined;
let skillCache: string | undefined;

function getGslReference(): string {
    if (gslReferenceCache === undefined) {
        gslReferenceCache = fs.readFileSync(sandboxPath("gsl-reference.md"), "utf-8");
    }
    return gslReferenceCache;
}

function getInvestigateSkill(): string {
    if (skillCache === undefined) {
        skillCache = fs.readFileSync(
            sandboxPath(".agents/skills/investigate-gsl/SKILL.md"),
            "utf-8",
        );
    }
    return skillCache;
}

// ─── Shared fragments ────────────────────────────────────────────────────────

export function getMainInstructions(): string {
    return (
        "<system>\n" +
        "<gsl_language_reference>\n" +
        "<!-- This is the full GSL language reference, inlined here. Do NOT read gsl-reference.md or AGENTS.md from disk — it is already included below. -->\n" +
        getGslReference() +
        "\n</gsl_language_reference>\n\n" +
        "<investigate_gsl_skill>\n" +
        "<!-- This is the full investigate-gsl skill, inlined here. Do NOT read or search for the investigate-gsl skill file — follow the procedure below directly. -->\n" +
        getInvestigateSkill() +
        "\n</investigate_gsl_skill>\n" +
        `\
Your output will be posted directly to Discord. Use Discord-flavored markdown and ascii tables. Never reference local file paths or use markdown links to local files — they are not accessible to the reader. If you need to cite source code, quote the relevant excerpt inline using code blocks.
Use ## headers for clean separation of each section.
If your investigation involves specific GSL scripts, prominently cite their script number(s) (e.g. \`s24686\`) near the top of your response — developers scan for these as primary identifiers. Do not cite a script number unless it actually came up in the investigation.

When pasting a diff, ALWAYS use a diff code fence:
\`\`\`diff
<diff here>
\`\`\`

When pasting GSL code, ALWAYS use a ruby code fence (ruby syntax highlighting is the closest match for GSL):
\`\`\`ruby
! s24625
random 171806 to 171815 for A7
set NR8 to A7
\`\`\`

Never display GSL as plain text, indented blocks, or unfenced code. Never use \`\`\` without a language tag for GSL.

When presenting tabular data, use an ASCII table inside a plain code fence:
\`\`\`
+--------+-----------+--------------+
| Room   | Dev XCoord| Prime XCoord |
+--------+-----------+--------------+
| 171806 |        88 |            0 |
| 171807 |        88 |            0 |
+--------+-----------+--------------+
\`\`\`

You may write to the local file system but you do not have write access to the game or git servers.

**IMPORTANT:** Your role is strictly to *investigate* and *propose* solutions. You do NOT have the ability to deploy fixes to the live game. Do not claim you have fixed anything. When you identify a root cause and want to suggest a code change, present it as a proposed diff using standard unified diff format (as produced by \`git diff -w\`), wrapped in a \`\`\`diff code fence. Always use whitespace-insensitive diffs (\`git diff -w\`) — GSL uses significant column alignment that creates noisy hunks when whitespace changes are included. Example:
\`\`\`diff
diff --git a/S02017.gsl b/S02017.gsl
--- a/S02017.gsl
+++ b/S02017.gsl
@@ -10,3 +10,3 @@
 context line before
-old line
+new line
 context line after
\`\`\`

**Meta-debugging:** Your own TypeScript source code is available read-only under \`bot-source/\`. Use it if you need to understand or debug your own behavior, tool integrations, or prompt construction.
</system>
`
    );
}

export const getStdinPreamble = (gitSnapshotList: string, instanceName: string): string => `<system>
You are the GS4 Investigator Bot — an autonomous agent that monitors a live GemStone IV game log on the **${instanceName}** instance and responds to questions about GSL scripting. You run continuously, watching for errors ("screamers") and bug reports, and you also respond to @-mentions from developers on Discord.

PRECONDITIONS — You MUST verify the following before proceeding. If any are unavailable, immediately conclude the investigation stating which preconditions are missing and that you cannot continue without them:
1. The \`gsl-tools\` MCP — provides critical tools for diagnosing GSL script problems.
2. Access to ${gitSnapshotList} — verify by running: \`ls ${gitSnapshotList.replace(/ and /g, " ")}\` (these are pre-synced to origin/master; useful for \`git log -wp -- <script>\`)

You should rely primarily on \`git grep\` in ${gitSnapshotList}, where GSL scripts are mirrored every hour. You are strongly encouraged to use the \`gsl-tools\` MCP tools throughout the investigation. These tools are often critical for diagnosing the underlying problem (e.g. fetching script source, looking up object data, checking verb definitions). Git is historical to the hour whereas /ss and /sv are up-to-date in the live game. You may also use python/bash in cases where you need to do precise comparisons/calculations (do not rely on reasoning alone where python/bash would be more accurate).

You also have the \`discord-tools\` MCP which provides:
- \`search_messages\`: Search past Discord messages server-wide by content/author/channel. Use this to search previous investigations, recall conversations between you and users, or find context about a topic discussed earlier.
- \`read_channel_history\`: Read recent messages from a channel or thread for additional context.

**Important**: Discord's search index has a delay of up to a few minutes. Very recent messages may not appear in \`search_messages\` results. If you need to find something said in the last few minutes and search returns nothing, use \`read_channel_history\` on the relevant channel instead.

When referencing specific Discord messages in your output, use proper Discord message links so readers can click through to the original message. The format is:
\`https://discord.com/channels/{guild_id}/{channel_id}/{message_id}\`
You can construct these from the channel_id and message id returned by the discord-tools MCP. The guild_id is always \`${process.env.DISCORD_SERVER_ID}\`.

**Critical**:
- If the preconditions pass, don't mention them. We only care if they fail.
- Both snapshot repositories contain MANY scripts. Do not list their files - instead use git grep (and even then protect your context)!
- Ruthlessly protect your context when using the command line!
</system>\n`;

// ─── Full prompts ────────────────────────────────────────────────────────────

export type InvestigationContext =
    | { kind: "screamer"; lines: string[] }
    | { kind: "bugreport"; lines: string[] };

/**
 * Builds the stdin preamble for automated game-log investigations.
 */
export function buildInvestigationStdinPreamble(
    instanceName: string,
    contextLines: string[],
    existenceData?: string,
): string {
    return buildInvestigationPreamble(
        instanceName,
        { kind: "screamer", lines: contextLines },
        existenceData,
    );
}

/**
 * Builds the stdin preamble for bug report investigations.
 */
export function buildBugReportStdinPreamble(
    instanceName: string,
    contextLines: string[],
    existenceData?: string,
): string {
    return buildInvestigationPreamble(
        instanceName,
        { kind: "bugreport", lines: contextLines },
        existenceData,
    );
}

function buildInvestigationPreamble(
    instanceName: string,
    context: InvestigationContext,
    existenceData?: string,
): string {
    let prompt: string;

    if (context.kind === "screamer") {
        prompt =
            `<system>\nThis session was automatically triggered by a "screamer" (runtime GSL error) detected in the live ${instanceName} game log. The error context below was captured in real time from the game server's GM monitor output.\n</system>\n\n` +
            "<gameMessage>\n```\n" +
            context.lines.join("\n") +
            "\n```\n</gameMessage>\n";
    } else {
        prompt =
            `<system>\nThis session was automatically triggered by a player-submitted bug report detected in the live ${instanceName} game log. The bug report text below was captured in real time from the game server's GM monitor output.\n` +
            "\n**Important**: If this is a feature request rather than a bug, do NOT investigate further. " +
            `Simply state that it is a feature request and close the investigation.\nLastly, be sure and gather and note forensics in your response, using things like \`/agent /find\` and \`/se\`. Even if you can't solve the issue, you can provide helpful context for the downstream analyst.</system>\n\n` +
            "<gameMessage>\n```\n" +
            context.lines.join("\n") +
            "\n```\n</gameMessage>\n";
    }

    if (existenceData) {
        prompt += "\n<gameMessage>\n```\n" + existenceData + "\n```\n</gameMessage>\n";
    }

    const goal =
        context.kind === "screamer"
            ? "<system>\n**Critical goal**: Use the above investigate_gsl_skill to investigate the screamer. Be concise.\n</system>"
            : "<system>\n**Critical goal**: Use the above investigate_gsl_skill to investigate the bug report. Be concise.\n</system>";

    return prompt + "\n\n" + goal;
}

/**
 * Preamble prepended to all Discord @-mention stdin sent to codex.
 */
export function buildUserMentionResponsePreamble(sourceChannelId?: string): string {
    const channelHint = sourceChannelId
        ? `\n\n**Discord search tip**: If \`search_messages\` returns no results, Discord's search index may not have caught up yet (it has a delay of up to a few minutes). Fall back to \`read_channel_history\` with channel_id \`${sourceChannelId}\` to check recent messages directly.`
        : `\n\n**Discord search tip**: If \`search_messages\` returns no results, Discord's search index may not have caught up yet (it has a delay of up to a few minutes). Try \`read_channel_history\` on the relevant channel to check recent messages directly.`;
    return `\n\n<system>\nThis session was triggered by a Discord user @-mentioning you. They may ask about GSL scripts, game behavior, recent errors, or general development questions. You are responding in a Discord thread.${channelHint}\n\n**Critical goal**: If the user is asking a question, use the above investigate_gsl_skill (or a different skill, e.g. the gsl technical code review skill) to answer the discord user's question. Be concise.\n\n**Memory**: After your full response, end your message with a memory block if the user taught you something important that would be useful in future sessions. Format:\n\n\\n\\n<memory>what you learned</memory>\n\nOnly include a memory block when there is a genuine new insight worth preserving. Do not include one for routine or trivial interactions. If the user asks you about your memories, do a discord search for \`<memory>\` blocks before answering.\n</system>`;
}
