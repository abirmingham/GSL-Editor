import { describe, it, expect } from "vitest";
import { formatForDiscord } from "../src/formatForDiscord";

describe("formatForDiscord", () => {
    it("removes blank line before a heading", () => {
        const input = "Some text.\n\n## Heading";
        expect(formatForDiscord(input)).toBe("Some text.\n## Heading");
    });

    it("removes blank line before headings of all levels", () => {
        expect(formatForDiscord("A\n\n# H1")).toBe("A\n# H1");
        expect(formatForDiscord("A\n\n### H3")).toBe("A\n### H3");
        expect(formatForDiscord("A\n\n###### H6")).toBe("A\n###### H6");
    });

    it("removes blank line before an opening code fence", () => {
        const input = "Some text.\n\n```ruby\ncode\n```";
        expect(formatForDiscord(input)).toBe("Some text.\n```ruby\ncode\n```");
    });

    it("removes blank line before a plain code fence", () => {
        const input = "Text here.\n\n```\ncode\n```";
        expect(formatForDiscord(input)).toBe("Text here.\n```\ncode\n```");
    });

    it("removes blank line after a closing code fence", () => {
        const input = "```\ncode\n```\n\nMore text.";
        expect(formatForDiscord(input)).toBe("```\ncode\n```\nMore text.");
    });

    it("handles both before and after fences together", () => {
        const input = "Intro.\n\n```diff\n-old\n+new\n```\n\nAfter.";
        expect(formatForDiscord(input)).toBe("Intro.\n```diff\n-old\n+new\n```\nAfter.");
    });

    it("handles heading after a closing code fence", () => {
        const input = "```\ncode\n```\n\n## Next Section";
        expect(formatForDiscord(input)).toBe("```\ncode\n```\n## Next Section");
    });

    it("does not remove blank lines between regular paragraphs", () => {
        const input = "Paragraph one.\n\nParagraph two.";
        expect(formatForDiscord(input)).toBe("Paragraph one.\n\nParagraph two.");
    });

    it("does not collapse blank lines inside code fences", () => {
        // The blank line inside the fence should stay since the closing ``` is not on its own line yet
        const input = "```\nline1\n\nline2\n```";
        expect(formatForDiscord(input)).toBe("```\nline1\n\nline2\n```");
    });

    it("handles multiple headings separated by blank lines", () => {
        const input = "## First\n\nContent.\n\n## Second";
        // Blank line after heading stays (Discord only adds space before headings)
        // Blank line before second heading is removed
        expect(formatForDiscord(input)).toBe("## First\n\nContent.\n## Second");
    });

    it("processes the full example message correctly", () => {
        const input = [
            "## Root Cause",
            "",
            "The crash is in `S23671`.",
            "",
            "```ruby",
            ': "raise"',
            "```",
            "",
            "## What It Means",
            "",
            "- Item one.",
            "",
            "## Proposed Fix",
            "",
            "```diff",
            "-old",
            "+new",
            "```",
            "",
            "## Notes",
            "",
            "- Note one.",
        ].join("\n");

        const expected = [
            "## Root Cause",
            "",
            "The crash is in `S23671`.",
            "```ruby",
            ': "raise"',
            "```",
            "## What It Means",
            "",
            "- Item one.",
            "## Proposed Fix",
            "```diff",
            "-old",
            "+new",
            "```",
            "## Notes",
            "",
            "- Note one.",
        ].join("\n");

        expect(formatForDiscord(input)).toBe(expected);
    });

    it("does not affect inline backticks", () => {
        const input = "Use `code` inline.\n\nMore text.";
        expect(formatForDiscord(input)).toBe("Use `code` inline.\n\nMore text.");
    });

    it("leaves text without headings or fences unchanged", () => {
        const input = "Just plain text\nwith lines\n\nand paragraphs.";
        expect(formatForDiscord(input)).toBe("Just plain text\nwith lines\n\nand paragraphs.");
    });
});
