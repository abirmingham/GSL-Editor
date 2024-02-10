/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
    createConnection,
    TextDocuments,
    ProposedFeatures,
    InitializeParams,
    TextDocumentSyncKind,
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';

import { runPrettier } from './gsl-prettier';
import * as Settings from './Settings';
import * as Parsing from './ParsingManager';
import { onDocumentHighlight } from './onDocumentHighlight';
import { PrettierResult } from './gsl-prettier/const';
import { debounce } from './util/debounce';

console.log('Starting GSL language server');

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((_params: InitializeParams) => {
    return {
        capabilities: {
            documentHighlightProvider: true,
            hoverProvider: false,
            textDocumentSync: TextDocumentSyncKind.Incremental,
        },
    };
});
connection.onDocumentHighlight((params, _token, _progress, _resultProgress) => {
    const lastParseResult = Parsing.getLastParseResult(params.textDocument.uri);
    if (!lastParseResult) return [];
    return onDocumentHighlight(params, lastParseResult);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent((change) => {
    console.log(`onDidChangeContent: ${change.document.uri}`);
    parseAndSendDiagnostics(change.document.uri);
    console.log(`onDidChangeContent done: ${change.document.uri}`);
});

documents.onDidClose(({ document: { uri } }) => {
    // Remove state for closed documents
    Settings.clearDocumentSettings(uri);
    Parsing.forgetDocument(uri);
});

connection.onRequest(
    'gsl.runPrettier',
    async ({
        text,
        eol,
    }: {
        text: string;
        eol: 'crlf' | 'lf';
    }): Promise<PrettierResult> => {
        try {
            const newText = await runPrettier(text, eol);
            return { result: newText, isError: false };
        } catch (e) {
            const ERROR_MSG = 'Failed to format document with prettier';
            console.error(ERROR_MSG, e);
            return { result: ERROR_MSG, isError: true };
        }
    }
);

// Listen
documents.listen(connection);
connection.listen();

// Helpers
const parseAndSendDiagnostics = debounce(
    (documentUri: string): void => {
        console.log(`parseAndSendDiagnostics: ${documentUri}`)
        const document = documents.get(documentUri);
        if (!document) {
            console.error('Failed to find by uri: ' + documentUri);
            return;
        }
        const { diagnostics } = Parsing.parseDocument(document);
        connection.sendDiagnostics({ uri: document.uri, diagnostics });
        console.log(`parseAndSendDiagnostics done: ${documentUri}`)
    },
    500,
    { leading: true }
);
