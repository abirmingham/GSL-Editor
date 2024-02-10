import { RemoteWorkspace } from 'vscode-languageserver';

export interface GslServerSettings {
    maxNumberOfProblems: number;
}

const defaultSettings = { maxNumberOfProblems: 1000 } as const;

/**
 * The global settings, used when the `workspace/configuration`
 * request is not supported by the client.
 */
let globalSettings: GslServerSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<GslServerSettings>> = new Map();

export const getGlobalSettings = (): GslServerSettings => ({
    ...globalSettings,
});
export const setGlobalSettings = (
    settings: GslServerSettings | null | undefined
): void => {
    globalSettings = settings ? { ...settings } : defaultSettings;
};

export const getDocumentSettings = (
    workspace: RemoteWorkspace,
    documentUri: string
): Thenable<GslServerSettings> => {
    let result = documentSettings.get(documentUri);
    if (!result) {
        result = workspace.getConfiguration({
            scopeUri: documentUri,
            section: 'gslLanguageServer',
        });
        documentSettings.set(documentUri, result);
    }
    return result;
};

export const clearDocumentSettings = (documentUri: string): void => {
    documentSettings.delete(documentUri);
};

export const clearAllDocumentSettings = () => {
    documentSettings.clear();
};
