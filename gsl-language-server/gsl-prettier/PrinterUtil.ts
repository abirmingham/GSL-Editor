import { AstPath, Doc, doc } from 'prettier';
import { GslAst } from './AstBuilder';
import { hasOwnProperty } from '../util/TypeUtil';

const { join, hardline, dedent, ifBreak, group, indent } = doc.builders;

type Selector<T extends GslAst> =
    | (keyof T & string)
    | number
    | Array<(keyof T & string) | number>
    | AstPath<T>;
export type PrintCallback<T extends GslAst> = (selector: Selector<T>) => Doc;

export const joinLines = <T extends GslAst>(
    path: AstPath<T>,
    print: PrintCallback<T>,
    selector: keyof T & string
): Doc[] => {
    const node = path.getNode();
    if (!hasOwnProperty(node, selector)) {
        throw new Error('Expected property ' + selector);
    }
    const value = node[selector];
    if (!Array.isArray(value)) {
        throw new Error('Expected array on property ' + selector);
    }
    return value.length === 0
        ? []
        : [hardline, ...[join(hardline, mapPrint(path, print, selector))]];
};

export const joinLine = <T extends GslAst>(
    path: AstPath<T>,
    print: PrintCallback<T>,
    selector: keyof T & string
): Doc[] => {
    const node = path.getNode();
    if (!hasOwnProperty(node, selector)) {
        throw new Error('Expected property ' + selector);
    }
    const value = node[selector];
    if (value === undefined) return [];
    return [hardline, print(selector)];
};

export const trailingComment = (comment: string | undefined): string[] =>
    comment?.trim() ? [comment.trim()] : [];

/**
 * A type-safe version of path.map(print, <selector>);
 * TODO: dig into why this is necessary (it may be that the underlying
 *       types just aren't good enough).
 */
export const mapPrint = <T extends GslAst>(
    path: AstPath<T>,
    print: PrintCallback<T>,
    selector: keyof T & string
): Doc[] => path.map(print as any, selector as any);
