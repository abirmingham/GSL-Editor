/**
 * Post-process markdown for Discord rendering.
 *
 * Discord adds its own visual spacing around block elements (headers, code fences),
 * so blank lines adjacent to those elements produce excessive whitespace.
 * This collapses redundant blank lines next to headers and fence delimiters.
 */
export function formatForDiscord(text: string): string {
    // Remove blank line immediately before a heading (# through ######)
    text = text.replace(/\n\n(#{1,6} )/g, "\n$1");

    // Remove blank line immediately before an opening code fence
    text = text.replace(/\n\n(```)/g, "\n$1");

    // Remove blank line immediately after a closing code fence (a line that is only ```)
    text = text.replace(/(^```\s*$)\n\n/gm, "$1\n");

    return text;
}
