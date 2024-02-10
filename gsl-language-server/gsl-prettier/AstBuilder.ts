import * as LexerUtil from '../util/LexerUtil';
import { GslLexer } from '../antlr/autogenerated/GslLexer';
import { ParseTree, RuleContext, TerminalNode } from 'antlr4ng';
import {
    ElseContext,
    EolContext,
    FastpushContext,
    FieldNameContext,
    IdentityExpressionContext,
    IfContext,
    ElseIfContext,
    LoopStatementContext,
    MatchMarkerContext,
    NodeContext,
    NodeFieldRefContext,
    NumberVariableContext,
    PushContext,
    ScriptContext,
    StatementContext,
    StringExpressionContext,
    StringVariableContext,
    TableAddressContext,
    TableReferenceContext,
    ValueExpressionContext,
    WhenStatementContext,
    NegativeNumberContext,
    ValueOperationContext,
    StringOperationContext,
    StringConcatenationContext,
    WhenCaseDefaultContext,
    WhenCaseContext,
    GslParser,
    EarlyPopStopContext,
} from '../antlr/autogenerated/GslParser';
import {
    FindChildrenPredicate,
    findChildren,
    getFirstToken,
    getLastToken,
} from '../util/ParserUtil';
import { isDefined } from '../util/TypeUtil';
import { isPostprocessDirective } from './Postprocessor';

interface AstNodeBase {
    /** The starting character index from the original source */
    locStart: number;
    /** The ending character index from the original source */
    locEnd: number;
}

export interface RootNode extends AstNodeBase {
    type: 'root';
    children: GslAst[];
}

export interface MatchMarkerNode extends AstNodeBase {
    type: 'matchMarker';
    label: string;
    children: GslAst[];
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface BlockNode extends AstNodeBase {
    type: 'block';
    open: string;
    children: GslAst[];
    close: string;
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface LoopNode extends AstNodeBase {
    type: 'loop';
    expression: ExpressionNode;
    statements: GslAst[];
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface WhenNode extends AstNodeBase {
    type: 'when';
    expression: ExpressionNode;
    cases: (WhenCaseNode | WhenCaseDefaultNode | BareCommentNode)[];
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface WhenCaseNode extends AstNodeBase {
    type: 'whenCase';
    expression: ExpressionNode;
    statements: GslAst[];
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface WhenCaseDefaultNode extends AstNodeBase {
    type: 'whenCaseDefault';
    statements: GslAst[];
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface IfNode extends AstNodeBase {
    type: 'if';
    open: string;
    expression: GslAst;
    statements: GslAst[];
    elseIfs: ElseIfNode[];
    else?: ElseNode;
    openComment: string | undefined;
    closeComment: string | undefined;
}

export interface ElseIfNode extends AstNodeBase {
    type: 'elseIf';
    open: string;
    expression: GslAst;
    statements: GslAst[];
    openComment: string | undefined;
}

export interface ElseNode extends AstNodeBase {
    type: 'else';
    statements: GslAst[];
    openComment: string | undefined;
}

export interface EarlyPopStopNode extends AstNodeBase {
    type: 'earlyPopStop';
    isFastpop: boolean;
    /** These occur between the pop and the stop */
    cleanupStatements: GslAst[];
    popComment: string | undefined;
    stopComment: string | undefined;
}

export interface BareCommentNode extends AstNodeBase {
    type: 'bareComment';
    text: string;
}

export interface CommandNode extends AstNodeBase {
    type: 'command';
    parseRule: string;
    children: GslAst[];
    comment: string | undefined;
}

export interface LeafNode extends AstNodeBase {
    type: 'leaf';
    /** token type */
    tokenType: number;
    text: string;
}

export interface ExpressionNode extends AstNodeBase {
    type: 'expression';
    leftExpression: GslAst;
    rightExpressions: ExpressionRightNode[];
}

export interface ExpressionRightNode extends AstNodeBase {
    type: 'expressionRight';
    operator: string;
    operand: GslAst;
}

export interface TableAddressNode extends AstNodeBase {
    type: 'tableAddress';
    tableId: string;
    coordinates: ExpressionNode[];
}

/**
 * Text should be printed as-is without semantic understanding.
 * This is really just a shortcut to keep the AST simpler for now.
 *
 */
export interface OpaqueNode extends AstNodeBase {
    type: 'opaque';
    text: string;
}

export type GslAst =
    | RootNode
    | MatchMarkerNode
    | BlockNode
    | IfNode
    | ElseIfNode
    | ElseNode
    | WhenNode
    | WhenCaseNode
    | WhenCaseDefaultNode
    | LoopNode
    | EarlyPopStopNode
    | CommandNode
    | BareCommentNode
    | LeafNode
    | OpaqueNode
    | TableAddressNode
    | ExpressionNode
    | ExpressionRightNode;

export const buildAst = (node: ParseTree): GslAst | undefined => {
    if (node instanceof TerminalNode) {
        if (
            node.symbol.type === GslLexer.NEWLINE &&
            node.getText().trimStart().startsWith('!')
        ) {
            return doBareComment(node);
        }
        if (
            node.symbol.type === GslLexer.EOF ||
            node.symbol.type === GslLexer.BACKSLASH_NEWLINE
        ) {
            // TODO grammar must be adjusted to track comments in
            // BACKSLASH_NEWLINE
            return;
        }
        return {
            type: 'leaf',
            tokenType: node.symbol.type,
            text: node.getText().trimEnd(),
            ...getSourceLocs(node),
        };
    }
    if (!(node instanceof RuleContext)) {
        // All non-terminal nodes should be instances of RuleContext
        throw new Error('Expected RuleContext');
    }

    // Handle root
    if (node instanceof ScriptContext) {
        return {
            type: 'root',
            children: mapChildren(node),
            ...getSourceLocs(node),
        };
    }
    // Unwrap script node and statement nodes
    if (node instanceof StatementContext) return firstChild(node);

    // Handle control nodes
    if (node instanceof IfContext) return doIf(node);
    if (node instanceof WhenStatementContext) return doWhenStatement(node);
    if (node instanceof LoopStatementContext) return doLoopStatement(node);
    if (node instanceof EarlyPopStopContext) return doEarlyPopStop(node);

    // Handle block nodes
    if (node instanceof MatchMarkerContext) return doMatchMarker(node);
    if (node instanceof FastpushContext) return doFastpush(node);
    if (node instanceof PushContext) return doPush(node);

    // Handle expression nodes
    if (node instanceof ValueExpressionContext) return doExpression(node);
    if (node instanceof StringExpressionContext) return doExpression(node);
    if (node instanceof IdentityExpressionContext) {
        return doIdentityExpression(node);
    }

    // Handle non-command nodes
    if (node instanceof NegativeNumberContext) return doNegativeNumber(node);
    if (node instanceof NodeContext) return firstChild(node);
    if (node instanceof NumberVariableContext) return firstChild(node);
    if (node instanceof StringVariableContext) return firstChild(node);
    if (node instanceof TableReferenceContext) return doTableReference(node);
    if (node instanceof TableAddressContext) return doTableAddress(node);
    if (node instanceof FieldNameContext) return doFieldName(node);
    if (node instanceof NodeFieldRefContext) return doNodeFieldRef(node);
    if (node instanceof EolContext) return;

    // Handle command nodes
    return {
        type: 'command',
        parseRule: GslParser.ruleNames[node.ruleIndex],
        children: mapChildren(node),
        comment: optionalComment(lastChild(node)),
        ...getSourceLocs(node),
    };
};

const doLoopStatement = (node: LoopStatementContext): LoopNode => ({
    type: 'loop',
    expression: doExpression(
        node.getChild(1) as ValueExpressionContext | StringExpressionContext
    ),
    statements: mapChildren(node, (x) => x instanceof StatementContext),
    openComment: optionalComment(node.getChild(2)),
    closeComment: optionalComment(lastChild(node)),
    ...getSourceLocs(node),
});

const doWhenStatement = (node: WhenStatementContext): WhenNode => {
    let defaultCaseIndex: number | undefined;
    const cases = findChildren(node)
        .slice(3, defaultCaseIndex || node.getChildCount() - 1)
        .flatMap<WhenCaseNode | WhenCaseDefaultNode | BareCommentNode>(
            child => {
                if (child instanceof WhenCaseContext) {
                    return [doWhenCase(child)];
                }
                if (child instanceof WhenCaseDefaultContext) {
                    return [doWhenCaseDefault(child)];
                }
                if (isComment(child)) {
                    return [doBareComment(child)];
                }
                return [];
            }
        );
    return {
        type: 'when',
        expression: doExpression(
            node.getChild(1) as ValueExpressionContext | StringExpressionContext
        ),
        cases,
        openComment: optionalComment(node.getChild(2)),
        closeComment: optionalComment(lastChild(node)),
        ...getSourceLocs(node),
    };
};

const doWhenCase = (node: WhenCaseContext): WhenCaseNode => ({
    type: 'whenCase',
    expression: doExpression(
        node.getChild(1) as ValueExpressionContext | StringExpressionContext
    ),
    statements: mapChildren(node, (x) => x instanceof StatementContext),
    openComment: optionalComment(node.getChild(2)),
    closeComment: optionalComment(lastChild(node)),
    ...getSourceLocs(node),
});

const doWhenCaseDefault = (
    node: WhenCaseDefaultContext
): WhenCaseDefaultNode => ({
    type: 'whenCaseDefault',
    statements: mapChildren(
        node,
        (x) => x instanceof StatementContext
    ),
    openComment: optionalComment(node.getChild(1)),
    closeComment: optionalComment(lastChild(node)),
    ...getSourceLocs(node),
});

const doEarlyPopStop = (node: EarlyPopStopContext): EarlyPopStopNode => {
    const stopComment = optionalComment(node.getChild(node.getChildCount() - 1))
    const cleanupStatements = findChildren(node)
        .slice(2, node.getChildCount() - 2)
        .map(buildAst)
        .filter(isDefined)
    return {
        type: 'earlyPopStop',
        isFastpop: node.getChild(0)?.getText().toLowerCase() === 'fastpop',
        popComment: optionalComment(node.getChild(1)),
        cleanupStatements,
        stopComment,
        ...getSourceLocs(node),
    };
};

/** @example data1 */
const doFieldName = (node: FieldNameContext): OpaqueNode => ({
    type: 'opaque',
    text: node.getText(),
    ...getSourceLocs(node),
});

/** table:<id>[<x>,<y>,<z>] */
const doTableAddress = (node: TableAddressContext): TableAddressNode => {
    const children = findChildren(node);
    /** Offset by two tokens if the first two tokens are TABLE COLON */
    let offset =
        children[0] instanceof TerminalNode &&
        children[0].symbol.type === GslLexer.TABLE
            ? 2
            : 0;
    return {
        type: 'tableAddress',
        tableId: getTableIdText(children[0 + offset]),
        coordinates: [2, 4, 6].map((position) => {
            return doExpression(
                children[position + offset] as ValueExpressionContext
            );
        }),
        ...getSourceLocs(node),
    };
};

/** table:<id> */
const doTableReference = (node: TableReferenceContext): OpaqueNode => ({
    type: 'opaque',
    text: 'table:' + getTableIdText(node.getChild(2)!),
    ...getSourceLocs(node),
});

const getTableIdText = (node: ParseTree): string =>
    node instanceof NodeFieldRefContext
        ? doNodeFieldRef(node).text
        : // XXX cheat a bit and do casing here to avoid another AST type
          node.getText().toUpperCase();

/** node:<ref> */
const doNodeFieldRef = (node: NodeFieldRefContext): OpaqueNode => {
    const children = findChildren(node);
    return {
        type: 'opaque',
        // XXX cheat a bit and do casing here to avoid another AST type
        text:
            children[0].getText().toUpperCase() +
            children
                .slice(1)
                .map((x) => x.getText())
                .join(''),
        ...getSourceLocs(node),
    };
};

/** value/string expressions */
const doExpression = (
    node: ValueExpressionContext | StringExpressionContext
): ExpressionNode => {
    const { left, right } = expressionHelper(node);
    return {
        type: 'expression',
        leftExpression: left,
        rightExpressions: right.map(
            ({ operator, operand, locStart, locEnd }) => ({
                type: 'expressionRight',
                operator,
                operand,
                locStart,
                locEnd,
            })
        ),
        ...getSourceLocs(node),
    };
};

/** @example `N01:data1` */
const doIdentityExpression = (
    node: IdentityExpressionContext
): ExpressionNode => {
    const children = findChildren(node, notParans);
    const leftExpression = buildAst(children[0]);
    const operatorToken = getFirstToken(children[1]);
    if (!operatorToken) {
        throw new Error('Failed to find identity expression operator');
    }
    const operator = operatorToken.text;
    const operand = buildAst(children[2]);
    if (!leftExpression || !operator || !operand) {
        throw new Error('Unexpected identity expression: ' + node.getText());
    }
    return {
        type: 'expression',
        leftExpression,
        rightExpressions: [
            {
                type: 'expressionRight',
                operator,
                operand,
                locStart: operatorToken.start,
                locEnd: operand.locEnd,
            },
        ],
        ...getSourceLocs(node),
    };
};

interface ExpressionParts {
    left: GslAst;
    right: {
        operator: string;
        operand: GslAst;
        locStart: number;
        locEnd: number;
    }[];
}

const expressionHelper = (
    node: ValueExpressionContext | StringExpressionContext
): ExpressionParts => {
    const children = findChildren(node, notParans);
    if (children.length !== 1) {
        throw new Error('Expected one child: ' + node.getText());
    }
    const child = children[0];

    // Handle nodes types with multiple expressions
    if (
        child instanceof ValueOperationContext ||
        child instanceof StringOperationContext ||
        child instanceof StringConcatenationContext
    ) {
        return operationHelper(child);
    }

    const left = buildAst(child);
    if (!left) {
        throw new Error('Expected left in expression: ' + node.getText());
    }
    return { left, right: [] };
};

const operationHelper = (
    node:
        | ValueOperationContext
        | StringOperationContext
        | StringConcatenationContext
): ExpressionParts => {
    const children = findChildren(node, notParans);
    const left = buildAst(children[0]);
    if (!left) {
        throw new Error('Expected left in expression: ' + node.getText());
    }
    const right: ExpressionParts['right'] = [];
    for (let i = 1; i < children.length; i += 2) {
        const operatorChild = children[i];
        if (!(operatorChild instanceof TerminalNode)) {
            throw new Error('Expected operator to be terminal node');
        }
        const operator = children[i].getText();
        const operand = buildAst(children[i + 1]);
        if (!operand) {
            throw new Error('Expected operand in node: ' + node.getText());
        }
        right.push({
            operator,
            operand,
            locStart: operatorChild.symbol.start,
            locEnd: operand.locEnd,
        });
    }
    return { left, right };
};

const doNegativeNumber = (node: NegativeNumberContext): GslAst => ({
    type: 'opaque',
    text: '-' + node.getChild(1)!.getText(),
    ...getSourceLocs(node),
});

const doIf = (node: IfContext): IfNode => {
    return {
        type: 'if',
        open: node.getChild(0)!.getText(),
        expression: buildAst(node.getChild(1)!)!,
        statements: mapChildren(node, (x) => x instanceof StatementContext),
        elseIfs: findChildren(node)
            .filter((x): x is ElseIfContext => x instanceof ElseIfContext)
            .map(doElseIf),
        else: doElse(
            findChildren(node).filter(
                (x): x is ElseContext => x instanceof ElseContext
            )[0]
        ),
        openComment: optionalComment(node.getChild(3)),
        closeComment: optionalComment(lastChild(node)),
        ...getSourceLocs(node),
    };
};

const doElseIf = (node: ElseIfContext): ElseIfNode => ({
    type: 'elseIf',
    open: node.getChild(0)!.getText(),
    expression: buildAst(node.getChild(1)!)!,
    statements: mapChildren(node, (x) => x instanceof StatementContext),
    openComment: optionalComment(node.getChild(3)),
    ...getSourceLocs(node),
});

const doElse = (node: ElseContext | undefined): ElseNode | undefined => {
    if (!node) return;
    return {
        type: 'else',
        statements: mapChildren(node, (x) => x instanceof StatementContext),
        openComment: optionalComment(node.getChild(1)),
        ...getSourceLocs(node),
    };
};

const doMatchMarker = (node: MatchMarkerContext): MatchMarkerNode => {
    const children = findChildren(node);
    return {
        type: 'matchMarker',
        label: node.getChild(1)!.getText(),
        children: children
            .slice(
                3,
                children.length - 2
            )
            .map(buildAst)
            .filter(isDefined),
        openComment: optionalComment(node.getChild(2)),
        closeComment: optionalComment(lastChild(node)),
        ...getSourceLocs(node),
    };
};

const doFastpush = (node: FastpushContext): BlockNode => ({
    type: 'block',
    open: 'fastpush',
    children: mapChildren(node, isNotLeaf),
    close: 'fastpop',
    openComment: optionalComment(node.getChild(1)),
    closeComment: optionalComment(lastChild(node)),
    ...getSourceLocs(node),
});

const doPush = (node: PushContext): BlockNode => ({
    type: 'block',
    open: 'push',
    children: mapChildren(node, isNotLeaf),
    close: 'pop',
    openComment: optionalComment(node.getChild(1)),
    closeComment: optionalComment(lastChild(node)),
    ...getSourceLocs(node),
});

const doBareComment = (node: TerminalNode): BareCommentNode => ({
    type: 'bareComment',
    text: node.getText().trim(),
    ...getSourceLocs(node),
});

// Utility
const firstChild = (node: RuleContext): GslAst | undefined => {
    const child = node.getChild(0);
    if (!child) throw new Error('Failed to find child');
    return buildAst(child);
};

const lastChild = (node: RuleContext): ParseTree => {
    const child = node.getChild(node.getChildCount() - 1);
    if (!child) throw new Error('Failed to find child');
    return child;
};

const mapChildren = (
    node: RuleContext,
    predicate?: FindChildrenPredicate
): GslAst[] => {
    return findChildren(node, predicate).map(buildAst).filter(isDefined);
};

const optionalComment = (
    node: ParseTree | null | undefined
): string | undefined => {
    if (!node) return;
    const text = node.getText().trim();
    if (text.startsWith('!')) return text;
};
const isNotLeaf = (node: ParseTree) => !(node instanceof TerminalNode);
const notParans = (x: ParseTree): boolean =>
    !(x instanceof TerminalNode) || !LexerUtil.Symbols.Paran.has(x.symbol.type);

const getSourceLocs = (
    ...nodes: ParseTree[]
): { locStart: number; locEnd: number } => {
    return nodes.reduce(
        (memo, node) => {
            const [firstSymbol, lastSymbol] =
                node instanceof TerminalNode
                    ? [node.symbol, node.symbol]
                    : [getFirstToken(node), getLastToken(node)];
            return {
                locStart: Math.min(memo.locStart, firstSymbol.start),
                locEnd: Math.max(memo.locEnd, lastSymbol.stop),
            };
        },
        { locStart: Number.MAX_SAFE_INTEGER, locEnd: Number.MIN_SAFE_INTEGER }
    );
};

const isComment = (node: ParseTree): node is TerminalNode =>
    node.getText().trimStart().startsWith('!');