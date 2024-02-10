import { AstPath, Doc, doc } from 'prettier';

import * as LexerUtil from '../util/LexerUtil';
import {
    BlockNode,
    CommandNode,
    ElseIfNode,
    ElseNode,
    GslAst,
    IfNode,
    LeafNode,
    ExpressionNode,
    ExpressionRightNode,
    MatchMarkerNode,
    TableAddressNode,
    LoopNode,
    WhenNode,
    WhenCaseNode,
    EarlyPopStopNode,
} from './AstBuilder';
import { assertNever } from '../util/TypeUtil';
import {
    PrintCallback,
    joinLine,
    joinLines,
    mapPrint,
    trailingComment,
} from './PrinterUtil';
import { GslLexer } from '../antlr/autogenerated/GslLexer';

const { join, hardline, indent } = doc.builders;

export const printGslAsPrettierDoc = <T extends GslAst>(
    path: AstPath<T>,
    _options: unknown,
    print: PrintCallback<any>
): Doc => {
    const { node } = path;
    switch (node.type) {
        case 'root':
            return join(hardline, mapPrint(path, print, 'children'));
        case 'leaf':
            return handleLeaf(node);
        case 'matchMarker':
            return handleMatchMarker(node, path, print);
        case 'block':
            return handleBlock(node, path, print);
        case 'if':
            return handleIf(node, path, print);
        case 'elseIf':
            return handleElseIf(node, path, print);
        case 'else':
            return handleElse(node, path, print);
        case 'when':
            return handleWhen(node, path, print);
        case 'whenCase':
            return handleWhenCase(node, path, print);
        case 'whenCaseDefault':
            return handleWhenCaseDefault(node, path, print);
        case 'loop':
            return handleLoop(node, path, print);
        case 'earlyPopStop':
            return handleEarlyPopStop(node, path, print);
        case 'command':
            return handleCommand(node, path, print);
        case 'expression':
            return handleExpression(node, path, print);
        case 'expressionRight':
            return handleExpressionRight(node, path, print);
        case 'tableAddress':
            return handleTableAddress(node, path, print);
        case 'bareComment':
            return node.text.trim();
        case 'opaque':
            return node.text;
        default:
            return assertNever(node, []);
    }
};

const handleTableAddress = <T extends TableAddressNode>(
    { tableId }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => [
    tableId[0] === '$' ? '' : 'table:',
    tableId,
    '[',
    ...join(',', mapPrint(path, print, 'coordinates')),
    ']',
];

const handleExpression = <T extends ExpressionNode>(
    { rightExpressions }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc =>
    rightExpressions.length === 0
        ? print('leftExpression')
        : [
              '(',
              join(' ', [
                  print('leftExpression'),
                  ...mapPrint(path, print, 'rightExpressions'),
              ]),
              ')',
          ];

const handleExpressionRight = <T extends ExpressionRightNode>(
    { operator }: T,
    _path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [join(' ', [operator.toLowerCase(), print('operand')])];
};

const handleLeaf = ({ text, tokenType }: LeafNode): Doc => {
    switch (tokenType) {
        case GslLexer.AND:
            return '&';
        case GslLexer.OR:
            return '|';
        case GslLexer.COMPARATOR:
            return text === '==' ? '=' : text;
        case GslLexer.STRING:
        case GslLexer.CARET_OPERATOR:
        case GslLexer.LABEL:
        case GslLexer.GOTO:
        case GslLexer.NEWLINE:
        case GslLexer.WORD:
            return text;
    }

    if (LexerUtil.Symbols.Variables.has(tokenType)) {
        return text.toUpperCase();
    } else {
        return text.toLowerCase();
    }
};

const handleCommand = <T extends CommandNode>(
    { parseRule, comment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    const children = mapPrint(path, print, 'children');
    if (parseRule === 'callmatch' && typeof children[2] === 'string') {
        // Uppercase matchmarker name
        children[2] =
            children[2][0] === '$' ? children[2].toUpperCase() : children[2];
    }
    return join(' ', [...children, trailingComment(comment)]);
};

const handleMatchMarker = <T extends MatchMarkerNode>(
    { label, openComment, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', [':', label, ...trailingComment(openComment)]),
        indent([
            hardline,
            ...[join(hardline, mapPrint(path, print, 'children'))],
        ]),
        hardline,
        join(' ', ['.', ...trailingComment(closeComment)]),
    ];
};

const handleBlock = <T extends BlockNode>(
    { open, openComment, close, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', [open.toLowerCase(), ...trailingComment(openComment)]),
        indent([
            hardline,
            ...[join(hardline, mapPrint(path, print, 'children'))],
        ]),
        hardline,
        join(' ', [close.toLowerCase(), ...trailingComment(closeComment)]),
    ];
};

const handleIf = <T extends IfNode>(
    { open, openComment, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', [
            open.toLowerCase(),
            print('expression'),
            'then',
            ...trailingComment(openComment),
        ]),
        indent(joinLines(path, print, 'statements')),
        ...joinLines(path, print, 'elseIfs'),
        ...joinLine(path, print, 'else'),
        hardline,
        join(' ', ['.', ...trailingComment(closeComment)]),
    ];
};

const handleElseIf = <T extends ElseIfNode>(
    { open, openComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', [
            open.toLowerCase(),
            print('expression'),
            'then',
            ...trailingComment(openComment),
        ]),
        indent([
            hardline,
            ...[join(hardline, mapPrint(path, print, 'statements'))],
        ]),
    ];
};

const handleElse = <T extends ElseNode>(
    { openComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', ['else', ...trailingComment(openComment)]),
        indent([
            hardline,
            ...[join(hardline, mapPrint(path, print, 'statements'))],
        ]),
    ];
};

const handleWhen = <T extends WhenNode>(
    { openComment, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', [
            'when',
            print('expression'),
            ...trailingComment(openComment),
        ]),
        indent([
            ...joinLines(path, print, 'cases'),
        ]),
        hardline,
        join(' ', ['.', ...trailingComment(closeComment)]),
    ];
};

const handleWhenCase = <T extends WhenCaseNode>(
    { openComment, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', ['is', print('expression'), ...trailingComment(openComment)]),
        indent(joinLines(path, print, 'statements')),
        hardline,
        join(' ', ['.', ...trailingComment(closeComment)]),
    ];
};

const handleWhenCaseDefault = <T extends WhenCaseNode>(
    { openComment, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', ['default', ...trailingComment(openComment)]),
        indent(joinLines(path, print, 'statements')),
        hardline,
        join(' ', ['.', ...trailingComment(closeComment)]),
    ];
};

const handleLoop = <T extends LoopNode>(
    { openComment, closeComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    return [
        join(' ', [
            'loop',
            print('expression'),
            ...trailingComment(openComment),
        ]),
        indent([
            hardline,
            ...[join(hardline, mapPrint(path, print, 'statements'))],
        ]),
        hardline,
        join(' ', ['.', ...trailingComment(closeComment)]),
    ];
};

const handleEarlyPopStop = <T extends EarlyPopStopNode>(
    { isFastpop, popComment, cleanupStatements, stopComment }: T,
    path: AstPath<T>,
    print: PrintCallback<T>
): Doc => {
    const pop = isFastpop ? 'fastpop' : 'pop';
    return [
        join(' ', [pop, ...trailingComment(popComment)]),
        hardline,
        joinLines(path, print, 'cleanupStatements'),
        ...(cleanupStatements.length > 0 ? [hardline] : []),
        join(' ', ['stop', ...trailingComment(stopComment)]),
    ];
};