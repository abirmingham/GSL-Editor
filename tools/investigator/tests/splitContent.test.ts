import { describe, it, expect } from "vitest";
import { splitContent } from "../src/splitContent";

describe("splitContent", () => {
    describe("basic splitting (no code fences)", () => {
        it("returns text as-is when under maxLen", () => {
            const result = splitContent("hello world", 2000);
            expect(result).toEqual(["hello world"]);
        });

        it("splits long text at newline boundaries", () => {
            const line = "a".repeat(50) + "\n";
            const text = line.repeat(5); // 255 chars
            const result = splitContent(text, 120);
            expect(result.length).toBeGreaterThan(1);
            for (const chunk of result) {
                expect(chunk.length).toBeLessThanOrEqual(120);
            }
        });
    });

    describe("code fence handling", () => {
        it("keeps a small code fence in a single chunk", () => {
            const text = "Here is code:\n```\nfoo\nbar\n```\nDone.";
            const result = splitContent(text, 2000);
            expect(result).toEqual([text]);
        });

        it("sends pre-fence text, fence, and post-fence text as separate chunks when fence is large", () => {
            const before = "Here is the result:\n";
            const fenceContent = "line\n".repeat(100); // 500 chars
            const fence = "```\n" + fenceContent + "```\n";
            const after = "That's all.";
            const text = before + fence + after;
            // maxLen that can fit before + some fence but not all
            const result = splitContent(text, 200);

            // Each chunk must be self-contained: no unclosed fences
            for (const chunk of result) {
                const _opens = (chunk.match(/^```/gm) || []).length;
                const _closes = (chunk.match(/^```$/gm) || []).length;
                // If a chunk contains a code fence opener, it must also contain a closer
                const fenceStarts = (chunk.match(/^```[\w-]*$/gm) || []).length;
                const fenceEnds = (chunk.match(/^```$/gm) || []).length;
                if (fenceStarts > 0 || fenceEnds > 0) {
                    // Each chunk with fences should be balanced
                    expect(fenceStarts).toBe(fenceEnds);
                }
            }
        });

        it("handles ```diff fenced blocks", () => {
            const text = "Changes:\n```diff\n+ added line\n- removed line\n```\nDone.";
            const result = splitContent(text, 2000);
            expect(result).toEqual([text]);
        });

        it("splits a large ```diff block with proper fence tags in each chunk", () => {
            const diffLines = Array.from(
                { length: 100 },
                (_, i) => `${i % 2 === 0 ? "+" : "-"} line ${i}`,
            ).join("\n");
            const text = `Results:\n\`\`\`diff\n${diffLines}\n\`\`\`\nEnd.`;
            const result = splitContent(text, 300);

            // Verify all chunks are under maxLen
            for (const chunk of result) {
                expect(chunk.length).toBeLessThanOrEqual(300);
            }

            // Chunks that contain fence content should open with ```diff and close with ```
            const fenceChunks = result.filter(
                (c) => c.includes("```diff") || c.includes("+ line") || c.includes("- line"),
            );
            for (const chunk of fenceChunks) {
                if (chunk.includes("+ line") || chunk.includes("- line")) {
                    expect(chunk).toMatch(/```diff/);
                    expect(chunk).toMatch(/```\s*$/);
                }
            }
        });

        it("handles ```ruby fenced blocks", () => {
            const rubyCode = 'puts "hello"\n'.repeat(80);
            const text = `Example:\n\`\`\`ruby\n${rubyCode}\`\`\`\nDone.`;
            const result = splitContent(text, 300);

            for (const chunk of result) {
                expect(chunk.length).toBeLessThanOrEqual(300);
            }

            // Any chunk containing ruby code should have opening and closing fences
            const codeChunks = result.filter((c) => c.includes("puts"));
            for (const chunk of codeChunks) {
                expect(chunk).toMatch(/```ruby/);
                expect(chunk).toMatch(/```\s*$/);
            }
        });

        it("handles multiple code fences in one message", () => {
            const text =
                "First:\n```js\nconsole.log('a');\n```\nSecond:\n```python\nprint('b')\n```\nEnd.";
            const result = splitContent(text, 2000);
            expect(result).toEqual([text]);
        });

        it("handles multiple large code fences", () => {
            const jsCode = "console.log('x');\n".repeat(30);
            const pyCode = "print('y')\n".repeat(30);
            const text = `First:\n\`\`\`js\n${jsCode}\`\`\`\nSecond:\n\`\`\`python\n${pyCode}\`\`\`\nEnd.`;
            const result = splitContent(text, 300);

            for (const chunk of result) {
                expect(chunk.length).toBeLessThanOrEqual(300);
            }

            // Reassembled content should equal original (minus any added fence markers)
            // The key invariant: no chunk has an unclosed fence
            for (const chunk of result) {
                const _opens = [...chunk.matchAll(/^```[\w-]*\s*$/gm)].length;
                const _closes = [...chunk.matchAll(/^```\s*$/gm)].length;
                // opens includes both opening and bare closing ``` lines
                // Let's count properly:
                const allFenceLines = [...chunk.matchAll(/^```.*$/gm)].map((m) => m[0]);
                let depth = 0;
                for (const line of allFenceLines) {
                    if (line === "```" && depth > 0) {
                        depth--;
                    } else if (line.startsWith("```")) {
                        depth++;
                    }
                }
                expect(depth).toBe(0);
            }
        });

        it("preserves content integrity when reassembled", () => {
            const lines = Array.from({ length: 50 }, (_, i) => `line ${i}`).join("\n");
            const text = `Before\n\`\`\`\n${lines}\n\`\`\`\nAfter`;
            const result = splitContent(text, 200);

            // All original content lines should appear somewhere in the output
            for (let i = 0; i < 50; i++) {
                const found = result.some((chunk) => chunk.includes(`line ${i}`));
                expect(found).toBe(true);
            }
        });

        it("does not produce empty chunks", () => {
            const text = "x\n".repeat(100);
            const result = splitContent(text, 50);
            for (const chunk of result) {
                expect(chunk.trim().length).toBeGreaterThan(0);
            }
        });
    });
});
