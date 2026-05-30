/**
 * Regex matching a code fence opening line (``` optionally followed by a language tag).
 * Also matches a bare ``` which closes an open fence.
 */
const FENCE_OPEN_RE = /^```([\w-]*)\s*$/;
const FENCE_CLOSE_RE = /^```\s*$/;

/**
 * Split a Discord message into chunks of at most `maxLen` characters,
 * ensuring code fences are properly closed and reopened across chunk boundaries.
 *
 * Strategy:
 * 1. Parse the text into segments: prose segments and code-fence segments.
 * 2. Each code-fence segment includes its opening and closing ``` lines.
 * 3. Prose segments are split naively at newline boundaries.
 * 4. Code-fence segments that are too large are split into sub-chunks,
 *    each wrapped with the appropriate opening (e.g. ```diff) and closing ```.
 */
export function splitContent(text: string, maxLen: number): string[] {
    if (text.length <= maxLen) return [text];

    const segments = parseSegments(text);
    const chunks: string[] = [];

    for (const seg of segments) {
        if (seg.type === "prose") {
            splitProse(seg.content, maxLen, chunks);
        } else {
            splitFence(seg.content, seg.lang, maxLen, chunks);
        }
    }

    return chunks.filter((c) => c.trim().length > 0);
}

interface Segment {
    type: "prose" | "fence";
    content: string;
    lang: string; // e.g. "diff", "ruby", "" for plain ```
}

/**
 * Parse text into alternating prose and fence segments.
 */
function parseSegments(text: string): Segment[] {
    const lines = text.split("\n");
    const segments: Segment[] = [];
    let currentLines: string[] = [];
    let inFence = false;
    let fenceLang = "";

    for (const line of lines) {
        if (!inFence) {
            const openMatch = line.match(FENCE_OPEN_RE);
            if (
                (openMatch && openMatch[1] !== undefined && line.trim() !== "```") ||
                (openMatch && line.trim() === "```" && !inFence)
            ) {
                // Check: is this an opening fence? A bare ``` outside a fence opens one.
                // But we need to distinguish opening from closing. Outside a fence, ``` always opens.
                if (openMatch[1] || line.trim() === "```") {
                    // Flush current prose
                    if (currentLines.length > 0) {
                        segments.push({
                            type: "prose",
                            content: currentLines.join("\n"),
                            lang: "",
                        });
                        currentLines = [];
                    }
                    inFence = true;
                    fenceLang = openMatch[1] || "";
                    currentLines.push(line);
                    continue;
                }
            }
            currentLines.push(line);
        } else {
            // Inside a fence
            if (FENCE_CLOSE_RE.test(line)) {
                currentLines.push(line);
                // Close the fence segment
                segments.push({ type: "fence", content: currentLines.join("\n"), lang: fenceLang });
                currentLines = [];
                inFence = false;
                fenceLang = "";
            } else {
                currentLines.push(line);
            }
        }
    }

    // Flush remaining (unclosed fence or trailing prose)
    if (currentLines.length > 0) {
        if (inFence) {
            // Unclosed fence — treat as fence anyway
            segments.push({
                type: "fence",
                content: currentLines.join("\n") + "\n```",
                lang: fenceLang,
            });
        } else {
            segments.push({ type: "prose", content: currentLines.join("\n"), lang: "" });
        }
    }

    return segments;
}

/**
 * Split prose text into chunks at newline boundaries.
 */
function splitProse(text: string, maxLen: number, chunks: string[]): void {
    if (text.length <= maxLen) {
        chunks.push(text);
        return;
    }
    let remaining = text;
    while (remaining.length > 0) {
        if (remaining.length <= maxLen) {
            chunks.push(remaining);
            break;
        }
        let splitAt = remaining.lastIndexOf("\n", maxLen);
        if (splitAt <= 0) {
            splitAt = maxLen;
        }
        chunks.push(remaining.slice(0, splitAt));
        remaining = remaining.slice(splitAt + 1);
    }
}

/**
 * Split a code fence segment into chunks, each properly wrapped with
 * opening and closing fence markers.
 */
function splitFence(text: string, lang: string, maxLen: number, chunks: string[]): void {
    if (text.length <= maxLen) {
        chunks.push(text);
        return;
    }

    // Extract the inner content (strip the opening and closing fence lines)
    const lines = text.split("\n");
    // First line is the opening fence, last non-empty might be closing
    const innerLines: string[] = [];
    let startIdx = 0;
    let endIdx = lines.length - 1;

    // Find opening fence line
    if (FENCE_OPEN_RE.test(lines[0])) {
        startIdx = 1;
    }
    // Find closing fence line
    if (endIdx > startIdx && FENCE_CLOSE_RE.test(lines[endIdx])) {
        endIdx--;
    }

    for (let i = startIdx; i <= endIdx; i++) {
        innerLines.push(lines[i]);
    }

    const opener = "```" + lang;
    const closer = "```";
    // Reserve space for opener + newline + closer + newline
    const overhead = opener.length + 1 + closer.length + 1;
    const availablePerChunk = maxLen - overhead;

    if (availablePerChunk <= 0) {
        // maxLen is too small to fit even the fence markers — just push as-is
        chunks.push(text);
        return;
    }

    let currentChunkLines: string[] = [];
    let currentLen = 0;

    for (const line of innerLines) {
        const lineLen = line.length + 1; // +1 for the newline
        if (currentLen + lineLen > availablePerChunk && currentChunkLines.length > 0) {
            // Flush current chunk
            chunks.push(opener + "\n" + currentChunkLines.join("\n") + "\n" + closer);
            currentChunkLines = [];
            currentLen = 0;
        }
        currentChunkLines.push(line);
        currentLen += lineLen;
    }

    // Flush remaining
    if (currentChunkLines.length > 0) {
        chunks.push(opener + "\n" + currentChunkLines.join("\n") + "\n" + closer);
    }
}
