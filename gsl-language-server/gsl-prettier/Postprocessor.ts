import { CRLF, TWO_SPACES } from './const';

const DIRECTIVE_STEM = '! <gsl-prettier:';
const getDirective = (name: string): string => `${DIRECTIVE_STEM}${name}>`;

export const isPostprocessDirective = (line: string): boolean =>
    line.trimStart().startsWith(DIRECTIVE_STEM);

export const PostprocessDirective = {
    preserveCommentColumn: (column: number) =>
        getDirective('preserveCommentColumn') + column,
    lineContinuation: getDirective('lineContinuation'),
    newline: getDirective('newline'),
} as const;

export const postprocessGsl = (text: string): string => {
    let result = '';
    const lines = text.split(CRLF);
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trimStart().startsWith(DIRECTIVE_STEM)) {
            const directiveName = line.split(DIRECTIVE_STEM)[1].split('>')[0];
            const directive = getDirective(directiveName);
            const postprocessor = Postprocessing[directiveName];
            if (!postprocessor) {
                throw new Error(
                    `Failed to find postprocessor for ${directiveName}`
                );
            }
            const { addLines, seekTo } = postprocessor(directive, lines, i);
            addLines.forEach((l) => (result += l + CRLF));
            if (seekTo === i) throw new Error('Postprocess did not advance');
            i = seekTo - 1;
            continue;
        }
        result += line + CRLF;
    }
    return (
        result
            // Remove blank lines; normalize LF to CRLF
            .trimEnd()
            .replace(/(\r?\n)+/g, CRLF) + CRLF
    );
};

type Postprocessor = (
    directive: string,
    lines: string[],
    i: number
) => {
    /** Lines to add to the result*/
    addLines: string[];
    /** The next line index to process */
    seekTo: number;
};

const Postprocessing: Record<string, Postprocessor> = {
    preserveCommentColumn: (directive, lines, i) => {
        const targetColumn = Number(lines[i].split(directive)[1]);
        if (targetColumn <= 0 || isNaN(targetColumn)) {
            throw new Error(
                'Failed to find target comment column:' +
                    `\n${lines[i]}\n${lines[i + 1]}`
            );
        }
        const nextLine = lines[i + 1];
        // Process bare comments
        if (nextLine.match(/^\s*!/)) {
            // Special case for bare comments, because these
            // are used for stuff like matchmarker documentation.
            // The below code doesn't handle negative needed space,
            // so we handle these here.
            const leftpad = ' '.repeat(targetColumn - 1)
            return {
                addLines: [leftpad + nextLine.trimStart()],
                seekTo: i + 2, // skip next line; we just inserted it
            };
        }

        // Process comments on lines with other content
        const currentColumn = getCommentColumn(nextLine);
        if (!currentColumn) {
            throw new Error(
                `Failed to find current comment column: ${nextLine}`
            );
        }
        const neededSpace = targetColumn - currentColumn;
        if (neededSpace < 0) {
            // Line was expanded, not contracted. Don't attempt preservation.
            return { addLines: [], seekTo: i + 1 };
        }
        return {
            addLines: [
                nextLine.slice(0, currentColumn - 1) +
                    ' '.repeat(neededSpace) +
                    nextLine.slice(currentColumn - 1),
            ],
            seekTo: i + 2, // skip next line; we just inserted it
        };
    },
    lineContinuation: (directive, lines, i) => {
        return {
            addLines: [
                lines[i]
                    .split(directive)[1] // get text after directive
                    .split(PostprocessDirective.newline)
                    .map(l => l + CRLF)
                    .join(''),
            ],
            seekTo: i + 2, // skip next line; it's the collapsed one
        };
    },
} as const;

/**
 * @returns the column number of the line's comment
 * (returns undefined if the line does not contain a comment).
 * Column is 1-based.
 */
export const getCommentColumn = (line: string): number | undefined => {
    let inString = false;
    let paransCount = 0;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') {
            inString = !inString;
            continue;
        }
        if (!inString && line[i] === '(') {
            paransCount += 1
            continue;
        }
        if (!inString && line[i] === ')') {
            paransCount -= 1
            continue;
        }
        if (line[i] === '\\' && !inString) {
            return
        }
        if (line[i] === '!' && !inString && paransCount === 0) {
            return i + 1;
        }
    }
};