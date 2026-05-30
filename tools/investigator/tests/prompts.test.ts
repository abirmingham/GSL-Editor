import { describe, it, expect, vi, beforeAll } from "vitest";

vi.mock("fs", () => ({
    readFileSync: vi.fn((filePath: string) => {
        if (filePath.includes("gsl-reference.md")) return "FAKE_GSL_REFERENCE";
        if (filePath.includes("SKILL.md")) return "FAKE_SKILL_CONTENT";
        throw new Error(`Unexpected readFileSync call: ${filePath}`);
    }),
}));

import { setSandboxDir } from "../src/paths";
import {
    getMainInstructions,
    getStdinPreamble,
    buildInvestigationStdinPreamble,
    buildUserMentionResponsePreamble,
} from "../src/prompts";

beforeAll(() => {
    setSandboxDir("/tmp/test-sandbox");
});

describe("prompts", () => {
    describe("getMainInstructions", () => {
        it("returns a string containing the GSL reference", () => {
            const result = getMainInstructions();
            expect(result).toContain("FAKE_GSL_REFERENCE");
        });

        it("returns a string containing the investigate skill", () => {
            const result = getMainInstructions();
            expect(result).toContain("FAKE_SKILL_CONTENT");
        });

        it("wraps the GSL reference in XML tags", () => {
            const result = getMainInstructions();
            expect(result).toContain("<gsl_language_reference>");
            expect(result).toContain("</gsl_language_reference>");
        });

        it("wraps the skill in XML tags", () => {
            const result = getMainInstructions();
            expect(result).toContain("<investigate_gsl_skill>");
            expect(result).toContain("</investigate_gsl_skill>");
        });

        it("is stable across calls (same reference returned)", () => {
            const a = getMainInstructions();
            const b = getMainInstructions();
            expect(a).toBe(b);
        });

        it("contains formatting instructions for Discord", () => {
            const result = getMainInstructions();
            expect(result).toContain("Discord-flavored markdown");
            expect(result).toContain("```diff");
            expect(result).toContain("```ruby");
        });
    });

    describe("getStdinPreamble", () => {
        it("includes the snapshot list in preconditions", () => {
            const result = getStdinPreamble(
                "./git/GS-Dev-Snapshots and ./git/GS-Prime-Snapshots",
                "GS4 Development",
            );
            expect(result).toContain("./git/GS-Dev-Snapshots and ./git/GS-Prime-Snapshots");
        });

        it("mentions gsl-tools MCP", () => {
            const result = getStdinPreamble("./foo", "GS4 Development");
            expect(result).toContain("gsl-tools");
        });

        it("mentions git grep", () => {
            const result = getStdinPreamble("./foo", "GS4 Development");
            expect(result).toContain("git grep");
        });

        it("includes preconditions header", () => {
            const result = getStdinPreamble("./foo", "GS4 Development");
            expect(result).toContain("PRECONDITIONS");
        });

        it("ends with a newline", () => {
            const result = getStdinPreamble("./foo", "GS4 Development");
            expect(result.endsWith("\n")).toBe(true);
        });

        it("includes the instance name", () => {
            const result = getStdinPreamble("./foo", "GS4 Prime");
            expect(result).toContain("GS4 Prime");
        });
    });

    describe("buildInvestigationStdinPreamble", () => {
        it("includes the instance name", () => {
            const result = buildInvestigationStdinPreamble("GemStone IV Dev", ["error line"]);
            expect(result).toContain("GemStone IV Dev");
        });

        it("includes screamer lines joined by newlines", () => {
            const result = buildInvestigationStdinPreamble("Dev", ["line1", "line2", "line3"]);
            expect(result).toContain("line1\nline2\nline3");
        });

        it("wraps screamer in properly closed code fences and XML tags", () => {
            const result = buildInvestigationStdinPreamble("Dev", ["err"]);
            expect(result).toContain("<gameMessage>\n```\n");
            expect(result).toContain("\n```\n</gameMessage>\n");
        });

        it("includes existence data with proper code fences", () => {
            const result = buildInvestigationStdinPreamble("Dev", ["err"], "node data here");
            expect(result).toContain("node data here");
            expect(result).toContain("<gameMessage>\n```\n");
            expect(result).toContain("\n```\n</gameMessage>\n");
        });

        it("omits existence section when not provided", () => {
            const result = buildInvestigationStdinPreamble("Dev", ["err"]);
            // Only one gameMessage block (the screamer) — existence data absent
            const matches = result.match(/<gameMessage>/g);
            expect(matches).toHaveLength(1);
        });
    });

    describe("buildUserMentionResponsePreamble", () => {
        it("returns a string", () => {
            const result = buildUserMentionResponsePreamble();
            expect(typeof result).toBe("string");
        });
    });
});
