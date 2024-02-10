import { DocumentFormattingEditProvider, TextDocument, Range, TextEdit, workspace } from "vscode"
import { getPrettierSuggestedEdits, isReadyForPrettier } from "./prettier"
import { LanguageClient } from "vscode-languageclient/node"

export class GSLDocumentFormattingEditProvider implements DocumentFormattingEditProvider {
    private gslEnablePrettier: boolean
    private lspClient: LanguageClient | undefined

    constructor (enablePrettier: boolean, lspClient?: LanguageClient) {
      this.gslEnablePrettier = enablePrettier
      this.lspClient = lspClient
    }

    async provideDocumentFormattingEdits (document: TextDocument) {
      if (this.gslEnablePrettier && isReadyForPrettier(document)) {
        if (this.lspClient) {
          const suggestedEdit = await getPrettierSuggestedEdits(
            this.lspClient,
            document,
          )
          if (suggestedEdit) return [suggestedEdit.suggested]
        }
        else {
          console.error('Failed to find LSP client')
        }
      }

      let textEdits = []
      let firstLine = document.lineAt(0)
      let lastLine = document.lineAt(document.lineCount - 1)
      let textRange = new Range(
        0,
        firstLine.range.start.character,
        document.lineCount - 1,
        lastLine.range.end.character
      )
      let documentText = document.getText()
        // Replace smart quotes and other common mistake with dumb variety
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        // Remove non-printable characters
        .replace(/[^\x00-\x7e]/g, '')
        // Remove blank lines
        .replace(/(\r?\n){2,}/g, '\r\n')

      textEdits.push(TextEdit.replace(textRange, documentText))

      return textEdits
    }
  }

  