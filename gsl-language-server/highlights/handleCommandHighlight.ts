import { DocumentHighlight } from 'vscode-languageclient';
import { Token } from 'antlr4ng';
import * as LexerUtil from '../util/LexerUtil';
import { getTokenHighlight } from './HighlightUtil';

export const handleCommandHighlight = (
    tokens: Token[],
    { token }: LexerUtil.FindTokenResult
): DocumentHighlight[] => {
    const highlights = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].type === token.type) {
            highlights.push(getTokenHighlight(tokens[i]));
        }
    }
    return highlights;
};
