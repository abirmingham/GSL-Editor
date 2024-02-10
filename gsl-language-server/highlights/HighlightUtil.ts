import { DocumentHighlight } from 'vscode-languageclient';
import * as LexerUtil from '../util/LexerUtil';
import { Token } from 'antlr4ng';

export const getTokenHighlight = (
    {
        line,
        column,
        text,
    }: {
        line: number;
        column: number;
        text: string | undefined | null;
    },
    isWrite: boolean = false
): DocumentHighlight => ({
    range: {
        start: {
            line: line - 1,
            character: column,
        },
        end: {
            line: line - 1,
            character: LexerUtil.getEndColumn({ column, text }),
        },
    },
    kind: isWrite ? 3 : 2,
});

const createBlankHighlight = (): DocumentHighlight => ({
    range: {
        start: { line: -1, character: -1 },
        end: { line: -1, character: -1 },
    },
});

export const createHighlightRange = (
    tokens: Token[],
    isWrite: boolean = false
): DocumentHighlight => {
    return tokens.reduce(
        ({ range: { start, end } }, t) => ({
            range: {
                start: {
                    line:
                        start.line === -1
                            ? t.line - 1
                            : Math.min(t.line - 1, start.line),
                    character:
                        start.character === -1
                            ? t.column
                            : Math.min(t.column, start.character),
                },
                end: {
                    line: Math.max(t.line - 1, end.line),
                    character: Math.max(
                        t.column + (t.text?.length || 0),
                        end.character
                    ),
                },
            },
            kind: isWrite ? 3 : 2,
        }),
        createBlankHighlight()
    );
};
