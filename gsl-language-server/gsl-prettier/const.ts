// Put this here so that the base extension doesn't need to import
// prettier (which uses dynamic ES imports that vscode base extensions
// struggle with)
export type PrettierResult = { result: string; isError: boolean };

export const TWO_SPACES = '  ';
export const CRLF = '\r\n';
