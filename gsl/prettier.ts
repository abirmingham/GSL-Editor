import {
    window,
    languages,
    TextDocument,
    Selection,
    Range,
    TextEdit,
    EndOfLine,
} from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';

import { PrettierResult } from '../gsl-language-server/gsl-prettier/const';

type ReadyResponse = { isReady: true } | { isReady: false; reason: string };

const GSL_LANGUAGE_ID = 'gsl';

export const isReadyForPrettier = (document: TextDocument): ReadyResponse => {
    if (document.languageId !== GSL_LANGUAGE_ID) {
        return {
            isReady: false,
            reason: 'Prettier requires an active GSL script editor',
        };
    }
    const diagnostics = languages.getDiagnostics(document.uri);
    if (diagnostics.length > 0) {
        return {
            isReady: false,
            reason: 'Please fix diagnostic problems before running prettier',
        };
    }
    return { isReady: true };
};

interface PrettierSuggestedEdit {
    before: string;
    after: string;
    suggested: TextEdit;
}

/**
 * @returns suggested edit, or `undefined` if prettier suggests no changes.
 */
export const getPrettierSuggestedEdits = async (
    lspClient: LanguageClient,
    document: TextDocument,
    selection?: Selection
): Promise<PrettierSuggestedEdit | undefined> => {
    let text = document.getText();
    const before = text;

    // If a range is selected, truncate to that range
    let baseIndent = '';
    if (selection) {
        const lines = text
            .split(/\r?\n/)
            .slice(selection.start.line, selection.end.line + 1);
        text = lines.join('\r\n');
        baseIndent = getIndent(lines[0]); // Save indentation of first line
    }
    // Send request to language server
    const eol = document.eol === EndOfLine.CRLF ? 'crlf' : 'lf';
    const response = await lspClient.sendRequest<PrettierResult>(
        'gsl.runPrettier',
        { text, eol }
    );
    if (response.isError) throw Error(response.result);

    // Apply response
    let after = response.result;
    if (selection) {
        after = after.trimEnd();
        if (baseIndent) {
            // Restore indentation
            after = after
                .split('\r\n')
                .map((x) => baseIndent + x)
                .join('\r\n');
        }
    }
    if (text === after) {
        window.showInformationMessage('No formatting changes needed.');
        return;
    }

    const range = selection
        ? new Range(selection.start, selection.end)
        : new Range(
              document.positionAt(0),
              document.positionAt(document.getText().length)
          );

    return {
        before,
        after,
        suggested: TextEdit.replace(range, after),
    };
};

const getIndent = (line: string): string => {
    let result = '';
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== ' ') return result;
        result += ' ';
    }
    return result;
};
