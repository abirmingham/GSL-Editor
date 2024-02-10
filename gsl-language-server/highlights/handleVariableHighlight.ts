import { DocumentHighlight } from 'vscode-languageclient';
import { ParseTree, Token, TerminalNode } from 'antlr4ng';
import * as LexerUtil from '../util/LexerUtil';
import { getTokenHighlight } from './HighlightUtil';
import { GslLexer } from '../antlr/autogenerated/GslLexer';
import { ParseResult } from '../ParsingManager';
import {
    StackScope,
    findAncestor,
    findNodeForToken,
    findStackScopes,
    getFirstToken,
    getToken,
} from '../util/ParserUtil';
import {
    BitgetContext,
    BitsetContext,
    CanDoContext,
    ClearContext,
    CreateItemContext,
    CreateRoomContext,
    CreateTableContext,
    CreateTextContext,
    DecodeAttackContext,
    DoCreateContext,
    FastpushContext,
    GatherContext,
    GatherFirstContext,
    GatherFirstRoomContext,
    GatherNextContext,
    GatherNextRoomContext,
    GatherPlayerContext,
    GetIndexOfContext,
    GetMaxContext,
    GetWatchContext,
    Hash1Context,
    Hash2Context,
    InPhraseContext,
    IndexContext,
    IsInjuredContext,
    ItemSnapshotContext,
    LoadCharDataContext,
    LowercaseContext,
    MatchMarkerContext,
    NextEffectContext,
    NextNodeContext,
    OutPhraseContext,
    ParseDecimalContext,
    PushContext,
    RandomContext,
    RootExistOfContext,
    ScanContext,
    ScriptContext,
    SetContext,
    StatementContext,
    StovContext,
    SubstringContext,
    UppercaseContext,
    VtosContext,
    WhereAtContext,
    WhereContext,
    WhereItemContext,
} from '../antlr/autogenerated/GslParser';

export const handleVariableHighlight = (
    { token }: LexerUtil.FindTokenResult,
    { syntaxTree }: ParseResult
): DocumentHighlight[] => {
    const { text } = token;
    if (!text) {
        console.error('Failed to find token text', text);
        return [];
    }
    return highlightVariables(
        token,
        token.type,
        text.toUpperCase(),
        syntaxTree
    );
};

export const highlightVariables = (
    origin: Token,
    variableType: number,
    variableName: string,
    syntaxTree: ParseTree
): DocumentHighlight[] => {
    const node = findNodeForToken(syntaxTree, origin);
    if (!node) {
        console.error('Failed to find node in parse tree');
        return [];
    }
    if (!(node instanceof TerminalNode)) {
        console.error('Expected terminal node for variable');
        return [];
    }
    const topLevelNode = findAncestor(
        node,
        (n) => n instanceof MatchMarkerContext || n instanceof ScriptContext
    );
    if (!topLevelNode) {
        throw new Error('Failed to find scope for: ' + origin.text);
    }

    variableName = variableName.toUpperCase();
    const stackScopes = findStackScopes(node, variableType);
    const results: DocumentHighlight[] = [];

    gatherHighlights(
        topLevelNode,
        stackScopes,
        variableType,
        variableName,
        getStringInterpolationKeyword(variableName),
        results
    );
    return results;
};

/**
 * Creates document highlights for matching symbols. Symbols are defined
 * as matching if they are:
 * A) The same variable type.
 * AND B) Referenced in the same scope, or are referenced in an ancestor
 *        scope prior to this scope.
 *
 * @example
 * set T0 to "foo" ! 1
 * push
 *   clear T0      ! 2
 *   push
 *     clear T0    ! 3
 *   pop
 * pop
 * push
 *   clear T0      ! 4
 * pop
 * clear T0        ! 5
 *
 * Highlights per cursor:
 * 1 -> 1, 2, 3, 4, 5
 * 2 -> 1, 2, 3
 * 3 -> 1, 2, 3
 * 4 -> 1, 4
 * 5 -> 1, 5
 */
const gatherHighlights = (
    node: ParseTree,
    stackScopes: StackScope[],
    variableType: number,
    variableName: string,
    stringInterpolationKeyword: string,
    results: DocumentHighlight[]
): 'HALT' | undefined => {
    // TODO handle write vs read
    if (node instanceof PushContext || node instanceof FastpushContext) {
        const isEnclosedByInnerStackScope = findAncestor(
            node,
            (n) => n === stackScopes[0]
        );
        if (!stackScopes.includes(node) && !isEnclosedByInnerStackScope) {
            return;
        }
    }
    if (node instanceof TerminalNode) {
        const token = node.symbol;
        if (
            token.type === variableType &&
            token.text?.toUpperCase() === variableName
        ) {
            results.push(getTokenHighlight(token, isWriteContext(node)));
        }
        if (token.type === GslLexer.STRING) {
            handleStringHighlights(token, stringInterpolationKeyword)?.forEach(
                (h) => results.push(h)
            );
        }
    }

    for (let i = 0; i < node.getChildCount(); i++) {
        const child = node.getChild(i);
        if (!child) continue;

        const shouldHalt = gatherHighlights(
            child,
            stackScopes,
            variableType,
            variableName,
            stringInterpolationKeyword,
            results
        );
        if (shouldHalt) return 'HALT';
    }
    if (stackScopes[0] === node) return 'HALT';
};

const isWriteContext = (variable: TerminalNode): boolean => {
    const statement = findAncestor(
        variable,
        (n) => n instanceof StatementContext
    )?.getChild(0);
    if (!statement) return false;

    if (statement instanceof ClearContext) return true;
    if (statement instanceof LowercaseContext) return true;
    if (statement instanceof UppercaseContext) return true;
    if (statement instanceof SetContext) {
        // SET (numberVariable | stringVariable) TO...
        return getFirstToken(statement.getChild(1)!) === variable.symbol;
    }
    if (statement instanceof LoadCharDataContext) {
        // LOADCHARDATA WORD FOR valueExpression TO OBJECT_NODE eol
        return getFirstToken(statement.getChild(5)!) === variable.symbol;
    }
    // In all of the following, the variable simply follows FOR
    if (
        statement instanceof BitsetContext ||
        statement instanceof BitgetContext ||
        statement instanceof CanDoContext ||
        statement instanceof CreateTextContext ||
        statement instanceof CreateItemContext ||
        statement instanceof CreateRoomContext ||
        statement instanceof CreateTableContext ||
        statement instanceof DecodeAttackContext ||
        statement instanceof DoCreateContext ||
        statement instanceof GatherContext ||
        statement instanceof GatherFirstContext ||
        statement instanceof GatherFirstRoomContext ||
        statement instanceof GatherNextContext ||
        statement instanceof GatherNextRoomContext ||
        statement instanceof GatherPlayerContext ||
        statement instanceof GetIndexOfContext ||
        statement instanceof GetMaxContext ||
        statement instanceof GetWatchContext ||
        statement instanceof Hash1Context ||
        statement instanceof Hash2Context ||
        statement instanceof IndexContext ||
        statement instanceof InPhraseContext ||
        statement instanceof IsInjuredContext ||
        statement instanceof ItemSnapshotContext ||
        statement instanceof NextEffectContext ||
        statement instanceof NextNodeContext ||
        statement instanceof OutPhraseContext ||
        statement instanceof ParseDecimalContext ||
        statement instanceof RandomContext ||
        statement instanceof RootExistOfContext ||
        statement instanceof ScanContext ||
        statement instanceof StovContext ||
        statement instanceof SubstringContext ||
        statement instanceof VtosContext ||
        statement instanceof WhereContext ||
        statement instanceof WhereAtContext ||
        statement instanceof WhereItemContext
    ) {
        for (let i = 0; i < statement.getChildCount() - 1; i++) {
            const child = statement.getChild(i);
            if (
                child instanceof TerminalNode &&
                child.symbol.type === GslLexer.FOR &&
                getFirstToken(statement.getChild(i + 1)!) === variable.symbol
            ) {
                return true;
            }
        }
    }
    return false;
};

const handleStringHighlights = (
    token: Token,
    variableNameInString: string
): DocumentHighlight[] | null => {
    const text = token.text?.toUpperCase() || '';
    let highlights: DocumentHighlight[] | null = null;

    for (let i = 0; i < text.length; i++) {
        if (text.slice(i).startsWith(variableNameInString)) {
            if (!highlights) {
                highlights = [];
            }
            highlights.push(
                getTokenHighlight({
                    line: token.line,
                    column: token.column + i,
                    text: variableNameInString,
                })
            );
        }
    }

    return highlights;
};

const getStringInterpolationKeyword = (variableName: string): string => {
    let inString = variableName.startsWith('N')
        ? variableName.slice(1)
        : variableName;
    if (inString[0] !== '$') inString = `$${inString}`;
    return inString;
};