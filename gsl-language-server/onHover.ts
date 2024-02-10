import { Hover, HoverParams } from 'vscode-languageclient';
import { ParseResult } from './ParsingManager';
import { findRuleContext, printTreeString } from './util/ParserUtil';

// TODO this is unused... and for good reason right now,
// because the `hoverProvider.ts` does what we need and
// the `findRuleContext` method we use here is not efficient.
export const onHover = (
    params: HoverParams,
    { tokenStream, syntaxTree }: ParseResult,
    debug: boolean
): Hover | null => {
    let ruleContext;
    try {
        if (tokenStream && syntaxTree) {
            ruleContext = findRuleContext(
                tokenStream,
                syntaxTree,
                params.position
            );
        }
    } catch (e) {
        console.error(e);
    }

    let content = '';
    if (debug && ruleContext) {
        content += '\n\nDEBUG INFO:\n\n```\n';
        content += printTreeString(ruleContext);
        content += '\n```';
    }

    if (!content) return null;
    return {
        contents: { kind: 'markdown', value: content },
    };
};
