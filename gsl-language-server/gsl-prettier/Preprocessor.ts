import {
    PostprocessDirective,
    getCommentColumn,
    isPostprocessDirective,
} from './Postprocessor';
import { CRLF, TWO_SPACES } from './const';

export const preprocessGsl = (text: string): string => {
    text = text
        // Replace smart quotes and other common mistake with dumb variety
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        // Remove non-printable characters
        .replace(/[^\x00-\x7e]/g, '')
        // Normalize tabs to spaces
        .replace(/\t/, TWO_SPACES)
        // Remove blank lines; normalize LF to CRLF
        .replace(/(\r?\n)+/g, CRLF);
    text = injectDirectives(text);
    return text.trim() + CRLF;
};

const injectDirectives = (text: string): string => {
    // Preserve line continuations first
    return DirectiveInjections.lineContinuation(
        DirectiveInjections.preserveCommentColumn(text)
    );
};

const DirectiveInjections = {
    preserveCommentColumn: (text: string): string => {
        const lines = text.split(CRLF);
        let result = '';
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const column = getCommentColumn(line);
            if (column && isMisalignedMatchMarkerDoc(line, column)) {
                // Hack to pull these left. This is such a common case that
                // it's worth the hack, because when a user copies/pastes MMs
                // the MM doc comment becomes indented and has to be manually
                // unindented.
                result += PostprocessDirective.preserveCommentColumn(1) + CRLF;
                result += line + CRLF;
                continue;
            }
            const willBeProcessedByOtherDirective =
                hasLineContinuation(lines, i) ||
                (i !== 0 && hasLineContinuation(lines, i - 1));
            if (
                column !== undefined &&
                // Bare comments: if comment is at the very left of the doc,
                // preserve the comment because it is likely a "doc comment"
                // e.g. for a matchmarker or script header. Other bare comments
                // should be aligned the same as other children.
                !line.match(/^\s\s*!/) &&
                !isPostprocessDirective(line) &&
                !willBeProcessedByOtherDirective
            ) {
                result +=
                    PostprocessDirective.preserveCommentColumn(column) + CRLF;
            }
            result += line + CRLF;
        }
        return result;
    },
    lineContinuation: (text: string): string => {
        const lines = text.split(CRLF);
        let result = '';
        let inContinuation = false;
        for (let i = 0; i < lines.length; i++) {
            const marker = getLcMarker(lines, i);
            if (inContinuation && !marker) {
                inContinuation = false;
            } else if (!inContinuation && marker) {
                result += marker + CRLF;
                inContinuation = true;
            }
            result += lines[i] + CRLF;
        }
        return result;
    },
};

const isMisalignedMatchMarkerDoc = (
    line: string,
    commentColumn: number
): boolean => {
    return (
        line.length >= 120 &&
        commentColumn === 3 &&
        line.trimStart().startsWith('!')
    );
};

const getLcMarker = (lines: string[], index: number): string | undefined => {
    const line = lines[index];
    const isBareComment = line.match(/^\s*!/);
    if (isPostprocessDirective(line) || isBareComment) return;

    let inString = false;
    for (let i = 0; i < line.length; i++) {
        if (line[i] === '"') {
            inString = !inString;
            continue;
        }
        if (line[i] === '\\' && !inString) {
            const continuedLines = [line];
            for (let j = 1; index + j < lines.length; j++) {
                continuedLines.push(lines[index + j]);
                const endOfSequence = !hasLineContinuation(lines, index + j);
                if (endOfSequence) {
                    return (
                        PostprocessDirective.lineContinuation +
                        continuedLines.join(PostprocessDirective.newline)
                    );
                }
            }
        }
    }
};

const hasLineContinuation = (lines: string[], index: number) =>
    Boolean(getLcMarker(lines, index));
