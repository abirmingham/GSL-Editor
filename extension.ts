import * as path from 'path'
import * as fs from 'fs'
import * as os from 'os'

import {
    ExtensionContext, StatusBarAlignment, Disposable, DocumentSelector,
    Uri, QuickPickItem, StatusBarItem, OutputChannel,
    TextDocument, Diagnostic, DiagnosticCollection, ThemeColor, ViewColumn,
    ThemeIcon, QuickPickItemKind
} from 'vscode'

import { workspace, window, commands, languages, extensions } from 'vscode'

import {
    LanguageClient, LanguageClientOptions, ServerOptions, TransportKind, DiagnosticSeverity, Command
} from 'vscode-languageclient/node'

import {
    GSLDocumentSymbolProvider,
    GSLHoverProvider,
    GSLDefinitionProvider,
    GSLDocumentHighlightProvider,
    GSLDocumentFormattingEditProvider
} from './gsl'

import { EAccessClient } from './gsl/eaccessClient'
import { GameTerminal } from './gsl/gameTerminal'
import {
    ScriptCompileStatus,
    ScriptError,
    ScriptProperties,
    ScriptCompileResults,
    withEditorClient,
    EditorClientInterface
} from './gsl/editorClient'
import { assertNever } from './gsl/util/typeUtil'
import { formatDate } from './gsl/util/dateUtil'
import { showQuickPick } from './gsl/dialog/QuickPick'

const GSL_LANGUAGE_ID = 'gsl'
const GSLX_DEV_ACCOUNT = 'developmentAccount'
const GSLX_DEV_INSTANCE = 'developmentInstance'
const GSLX_DEV_CHARACTER = 'developmentCharacter'
const GSLX_DEV_PASSWORD = 'developmentPassword'
const GSLX_NEW_INSTALL_FLAG = 'gslExtNewInstallFlag'
const GSLX_SAVED_VERSION = 'savedVersion'
const GSLX_DISABLE_LOGIN = 'disableLoginAttempts'
const GSLX_AUTOMATIC_DOWNLOADS = 'automaticallyDownloadScripts'
const GSLX_ENABLE_SCRIPT_SYNC_CHECKS = 'enableScriptSyncChecks'
const rx_script_number = /^\d{1,5}$/
const rx_script_number_in_filename = /(\d+)\.gsl/

interface LastSeenScriptModification {
    modifier: string
    lastModifiedDate: Date
}

interface DownloadScriptResult {
    scriptNumber: number
    /** Local file system path of downloaded script */
    scriptPath: string
    /** Up-to-date script properties */
    scriptProperties: ScriptProperties
    /** Status for "/ss checkedit"; undefined if feature is disabled */
    syncStatus: string | undefined
}

export class GSLExtension {
    private static context: ExtensionContext
    private static diagnostics: DiagnosticCollection

    static init (context: ExtensionContext) {
        this.context = context
        this.diagnostics = languages.createDiagnosticCollection()
    }

    static getDownloadLocation (): string {
        let extPath: any = null
        let useWorkspaceFolder = workspace.getConfiguration(GSL_LANGUAGE_ID).get('downloadToWorkspace')
        if (useWorkspaceFolder && workspace.workspaceFolders) {
            extPath = workspace.workspaceFolders[0].uri.fsPath
        } else {
            extPath = workspace.getConfiguration(GSL_LANGUAGE_ID).get('downloadPath')
        }
        if (!extPath) {
            let rootPath = path.resolve(__dirname, '../gsl')
            if (!fs.existsSync(rootPath)) { // Directory doesn't exist
                fs.mkdirSync(rootPath) // Create directory
            }
            extPath = path.resolve(__dirname, '../gsl/scripts')
        }
        if (!fs.existsSync(extPath)) { // Directory doesn't exist
            fs.mkdirSync(extPath) // Create directory
        }
        return extPath
    }

    /** @returns path of newly downloaded script, or `undefined` if download failed */
    static async downloadScript (
        client: EditorClientInterface,
        script: number | string,
    ): Promise<DownloadScriptResult> {
        try {
            // Get script properties, keeping editor open
            const scriptProperties = await client.modifyScript(
                script,
                true
            ).catch((e: any) => {
                throw new Error(`Failed to get script properties: ${e.message}`)
            })
            // Write file
            const destinationPath = path.join(
                this.getDownloadLocation(),
                scriptProperties.path.split('/').pop()!
            )
            if (scriptProperties.new) {
                fs.writeFileSync(destinationPath, "")
                await client.exitModifyScript()
            } else {
                // Note that captureScript closes modifyScript
                let content = await client.captureScript().catch((e) => {
                    throw new Error(`Failed to download script: ${e.message}`)
                })
                if (content) {
                    if (content.slice(-2) !== '\r\n') { content += '\r\n' }
                    fs.writeFileSync(destinationPath, content)
                }
            }
            // Record script modification info
            const scriptNumber = Number(
                path.basename(destinationPath)
                    .match(rx_script_number_in_filename)![1]
            )
            if (Number.isNaN(scriptNumber)) throw new Error('Expected script number, not NaN')
            this.recordScriptModification(
                scriptNumber,
                scriptProperties.modifier,
                scriptProperties.lastModifiedDate,
            )
            const checkSyncStatus = workspace
                .getConfiguration(GSL_LANGUAGE_ID)
                .get(GSLX_ENABLE_SCRIPT_SYNC_CHECKS)
            let syncStatus = undefined
            if (checkSyncStatus) {
                syncStatus = await client.showScriptCheckStatus(scriptNumber).catch((e: any) => {
                    throw new Error(`Failed to run show script check: ${e.message}`)
                })
            }
            // Return results
            return {
                scriptNumber,
                scriptProperties,
                scriptPath: destinationPath,
                syncStatus
            }
        }
        catch (e) {
            // We passed keepalive=true to `modifyScript`, so we need to make sure
            // to exit the editor when something goes wrong.
            await client.exitModifyScript()
            throw e
        }
    }

    static async uploadScript (
        client: EditorClientInterface,
        script: number,
        document: TextDocument
    ): Promise<ScriptCompileResults | undefined> {
        // Get script properties, keeping editor open
        const scriptProperties = await client.modifyScript(script, true)
        // Confirm upload if needed
        const requiresConfirmation = GSLExtension.requiresUploadConfirmation(
            script,
            scriptProperties
        )
        if (requiresConfirmation) {
            const confirmation = await window.showWarningMessage(
                requiresConfirmation.prompt,
                { modal: true },
                'Yes'
            )
            if (confirmation !== 'Yes') {
                await client.exitModifyScript()
                return
            }
        }
        // Send script
        const lines = new Array<string>()
        for (let n = 0, nn = document.lineCount; n < nn; n++) {
            lines.push(document.lineAt(n).text)
        }
        if (lines[lines.length - 1] !== '') { lines.push('') }
        // Note that sendScript closes modifyScript
        let compileResults = await client.sendScript(lines, scriptProperties.new)
        // Verify success
        if (compileResults.status === ScriptCompileStatus.Failed) {
            const problems = compileResults.errorList.map((error: ScriptError) => {
                const line = document.lineAt(error.line - 1)!
                return new Diagnostic (line.range, error.message, DiagnosticSeverity.Error)
            })
            this.diagnostics.set(document.uri, problems)
            return compileResults
        }
        this.diagnostics.clear()
        // Record updated script properties
        const newScriptProperties = await client.modifyScript(script)
        this.recordScriptModification(
            script,
            newScriptProperties.modifier,
            newScriptProperties.lastModifiedDate,
        )
        return compileResults
    }

    static async checkModifiedDate (client: EditorClientInterface, script: number): Promise<Date | undefined> {
        try {
            const output = await client.showScript(script)
            if (!output || !output.lastModifiedDate) return
            return output.lastModifiedDate
        } catch (e) {
            console.error(e)
            throw new Error('Failed to get /ss output')
        }
    }

    static requiresUploadConfirmation (
        script: number,
        newestProperties: ScriptProperties
    ): { prompt: string } | undefined {
        if (newestProperties.new) return // New scripts don't need confirmation
        const lastSeenMod = this.findLastSeenScriptModification(script)
        let reasons = []

        if (!lastSeenMod || !lastSeenMod.lastModifiedDate || !lastSeenMod.modifier) {
            reasons.push(
                `I haven't seen you download this script before. This could be because you downloaded the script prior`
                + ` to the safety guard being added. If you want to be extra safe, you can download the script from the`
                + ` server, compare it with your local copy, and then proceed. At that point I will not warn you again`
                + ` for this specific reason. You can also proceed now if you are confident that your local copy`
                + ` should overwrite the server copy.`
            )
        }
        else if (
            lastSeenMod.lastModifiedDate.toISOString()
            !== newestProperties.lastModifiedDate.toISOString()
        ) {
            reasons.push(
                `It appears to have been edited since you last downloaded it.`
                + `\nLocal:  ${formatDate(lastSeenMod.lastModifiedDate)}.`
                + `\nServer: ${formatDate(newestProperties.lastModifiedDate)}.`
            )
        }
        const currentAccount = this.getAccountName()
        // The server truncates the account name to 12 characters, so we have to rely on startsWith.
        // This means that we have no ability to distinguish between modifiers W_GS4-Alornen and W_GS4-Alorner
        if (!currentAccount?.startsWith(newestProperties.modifier)) {
            reasons.push(
                `Someone else modified it last.\nLast Modifier: ${newestProperties.modifier}\nYou: ${currentAccount}`
            )
        }

        return reasons.length === 0 ? undefined : {
            prompt:
                `Overwriting script ${script} requires confirmation for the following reason(s):\n\n`
                + reasons.join('\n\n')
                + `\n\nWould you like to upload this script anyway?`,
        }
    }

    static recordScriptModification(
        script: number,
        modifier: string,
        lastModifiedDate: Date
    ): void {
        this.context.globalState.update(
            this.scriptPropsKey(script),
            { modifier, lastModifiedDate: lastModifiedDate.toISOString() }
        )
    }

    static findLastSeenScriptModification(
        script: number
    ): LastSeenScriptModification | undefined {
        const output = this.context.globalState.get<{
            modifier: string;
            lastModifiedDate: string;
        }>(this.scriptPropsKey(script))
        return output ? {
            modifier: output.modifier,
            lastModifiedDate: new Date(output.lastModifiedDate) // restore from ISO string
        } : undefined
    }

    /** @returns key for storing script modification data */
    private static scriptPropsKey(script: number): string {
        return `script_properties.${script}`
    }

    static getAccountName(): string | undefined {
        const name = this.context.globalState.get(GSLX_DEV_ACCOUNT)
        if (!name) return
        return `W_${name}`
    }
}

type OutOfDateButtonState =
    { state: 'loading' }
    | { state: 'out_of_date', lastModifier: string, lastModifiedDate: Date }
    | { state: 'hidden' }
    | { state: 'ignored', scriptNum: number }

enum OutOfDateChoice {
    SHOW_COMPARISON = 'SHOW_COMPARISON',
    OVERWRITE_LOCAL_COPY = 'OVERWRITE_LOCAL_COPY',
    STOP_MONITORING = 'STOP_MONITORING'
}

/**
 * When a user navigates to a new file, checks to see if that file is
 * up-to-date. Displays a button in the status bar indicating the status.
 * Clicking on the button allows for learning more and taking action.
 */
class OutOfDateButtonManager {
    private OUT_OF_DATE_BUTTON_CLICKED_CMD = 'internal.outOfDateManager.outOfDateClicked'
    private IGNORED_SCRIPT_BUTTON_CLICKED_CMD = 'internal.outOfDateManager.ignoredClicked'
    private DIFF_FILE_LOCAL = 'local.gsl'
    private DIFF_FILE_SERVER = 'server.gsl'
    private iteration = 0
    private isMonitoringActive = true

    constructor(
        private button: StatusBarItem,
        private withEditorClient: VSCodeIntegration["withEditorClient"],
        private showDownloadedScript: VSCodeIntegration["showDownloadedScript"],
        private context: ExtensionContext
    ) {}

    activate() {
        commands.registerCommand(
            this.OUT_OF_DATE_BUTTON_CLICKED_CMD,
            this.onClickOutOfDateButton,
            this
        )
        commands.registerCommand(
            this.IGNORED_SCRIPT_BUTTON_CLICKED_CMD,
            this.onClickIgnoredScriptButton,
            this
        )

        setTimeout(this.runCheck.bind(this), 0)
        return window.onDidChangeActiveTextEditor(this.runCheck.bind(this))
    }

    public renderButton(state: OutOfDateButtonState): void {
        if (state.state !== 'hidden') this.button.show()
        this.button.backgroundColor = undefined
        this.button.color = undefined
        this.button.command = undefined
        this.button.tooltip = undefined

        switch (state.state) {
            case ('loading'): {
                this.button.text = "Loading..."
                return
            }
            case ('ignored'): {
                this.button.text = "Not Monitoring Script"
                this.button.command = this.IGNORED_SCRIPT_BUTTON_CLICKED_CMD
                this.button.tooltip = 'Click to resume monitoring'
                return
            }
            case ('hidden'): {
                this.button.hide()
                return
            }
            case ('out_of_date'): {
                this.button.text = "$(alert) Script Out of Date"
                this.button.command = this.OUT_OF_DATE_BUTTON_CLICKED_CMD
                this.button.backgroundColor = new ThemeColor('statusBarItem.warningBackground')
                this.button.color = new ThemeColor('statusBarItem.warningForeground')
                return
            }
            default:
                assertNever(state, undefined)
        }
    }

    public stopMonitoring(): void {
        this.isMonitoringActive = false
    }

    public resumeMonitoring(): void {
        this.isMonitoringActive = true
    }

    private async runCheck() {
        if (!this.isMonitoringActive) return
        const localIteration = ++this.iteration
        await this.withEditorClient(async client => {
            const document = window.activeTextEditor?.document
            if (!document || this.isExecutionStale(localIteration, document)) {
                return
            }

            const shouldHideButton = await this.shouldHideButton(document)
            if (this.isExecutionStale(localIteration, document)) return
            const scriptNum = this.getScriptNumber(document)

            if (shouldHideButton || !scriptNum) {
                return void this.renderButton({ state: 'hidden' })
            }

            this.renderButton({ state: 'loading' })
            const state = await this.calculateState(client, document, scriptNum)
            if (this.isExecutionStale(localIteration, document)) return

            this.renderButton(state)
        })
    }
    private async shouldHideButton(document: TextDocument): Promise<boolean> {
        // Only check GSL files
        if (document.languageId !== GSL_LANGUAGE_ID) return true
        // Verify not viewing a diff with this same tool
        const { uri } = document
        if (
            uri.path.endsWith(this.DIFF_FILE_LOCAL) ||
            uri.path.endsWith(this.DIFF_FILE_SERVER)
        ) {
            return true
        }
        // Verify game access is possible
        const password = await this.context.secrets.get(GSLX_DEV_PASSWORD)
        return !password
    }

    private isExecutionStale(iteration: number, document: TextDocument): boolean {
        return iteration !== this.iteration
            || window.activeTextEditor?.document.uri !== document.uri
    }

    /**
     * @returns the correct button state for the given `document`. If the
     * script is older than the server script, AND the scripts content does
     * not match, then the button should alert the user that the document
     * is out of date.
     *
     * We compare the content of the scripts because it is possible that the
     * user has updated the script via git rather than through the vscode
     * command, and we do not want to bother the user in that case.
     */
    private async calculateState(
        client: EditorClientInterface,
        document: TextDocument,
        scriptNum: number
    ): Promise<OutOfDateButtonState> {
        // Compare time stamps
        const lastSeenMod = GSLExtension.findLastSeenScriptModification(scriptNum)
        const scriptProperties = await client.modifyScript(scriptNum)
        // Check if script timestamp has changed since we last downloaded it
        if (
            lastSeenMod &&
            lastSeenMod.lastModifiedDate.toISOString()
                === scriptProperties.lastModifiedDate.toISOString()
        ) {
            return { state: 'hidden' }
        }
        // Check if we are ignoring this script version
        if (this.isIgnoringScript(scriptNum, scriptProperties.lastModifiedDate)) {
            return { state: 'ignored', scriptNum }
        }
        // Script timestamp has changed since we downloaded it and we are not
        // ignoring this script version. Let's compare the contents.
        await client.modifyScript(scriptNum, true)
        const newScript = await client.captureScript() // closes modifyScript
        if (
            this.normalizeScriptContents(document.getText())
            === this.normalizeScriptContents(newScript)
        ) {
            // Update last seen script modification so that we don't continue
            // to check this script. This is both a performance optimization
            // and solves for the case where the user edits the file - in that
            // case the contents will differ and we don't want to tell the user
            // that the script is "out of date".
            GSLExtension.recordScriptModification(
                scriptNum,
                scriptProperties.modifier,
                scriptProperties.lastModifiedDate
            )
            return { state: 'hidden' }
        }
        return {
            state: 'out_of_date',
            lastModifiedDate: scriptProperties.lastModifiedDate,
            lastModifier: scriptProperties.modifier
        }
    }

    private isIgnoringScript(scriptNum: number, serverLastModifiedDate: Date): boolean {
        return this.context.globalState.get<{lastModifiedDate: string}>(
            this.getIgnoreKey(scriptNum)
        )?.lastModifiedDate === serverLastModifiedDate.toISOString()
    }

    private ignoreScript(scriptNum: number, serverLastModifiedDate: Date): void {
        this.context.globalState.update(
            this.getIgnoreKey(scriptNum),
            {lastModifiedDate: serverLastModifiedDate.toISOString()}
        )
    }

    private stopIgnoringScript(scriptNum: number): void {
        this.context.globalState.update(
            this.getIgnoreKey(scriptNum),
            undefined
        )
    }

    private getIgnoreKey(scriptNum: number): string {
        return `OutOfDateButtonManager.ignore.${scriptNum}`
    }

    private normalizeScriptContents(contents: string): string {
        return contents.replaceAll(/\r?\n/g, '\n').trim()
    }

    async onClickIgnoredScriptButton(): Promise<void> {
        const document = window.activeTextEditor?.document
        if (!document) return
        const scriptNum = this.getScriptNumber(document)
        if (!scriptNum) throw new Error('Failed to get script number')
        this.stopIgnoringScript(scriptNum)
        this.renderButton({ 'state': 'loading' })
        setTimeout(() => this.runCheck(), 0)
    }

    async onClickOutOfDateButton(): Promise<void> {
        const localIteration = this.iteration
        const document = window.activeTextEditor?.document
        if (!document) return

        await this.withEditorClient(async client => {
            if (this.isExecutionStale(localIteration, document)) return
            const scriptNum = this.getScriptNumber(document)
            if (!scriptNum) throw new Error('Failed to get script number')
            const {
                SHOW_COMPARISON,
                OVERWRITE_LOCAL_COPY,
                STOP_MONITORING
            } = OutOfDateChoice

            // Ask user for action
            const userChoice = await showQuickPick({
                title: `Script ${scriptNum} Differs`,
                items: [
                    {
                        id: SHOW_COMPARISON,
                        label: "Show Comparison",
                        iconPath: new ThemeIcon('diff'),
                        description: "Compare local script with server script.",
                    },
                    QuickPickItemKind.Separator,
                    {
                        id: OVERWRITE_LOCAL_COPY,
                        label: "Overwrite Local Copy",
                        iconPath: new ThemeIcon('cloud-download'),
                        description: `Download s${scriptNum} from server.`
                    },
                    QuickPickItemKind.Separator,
                    {
                        id: STOP_MONITORING,
                        label: "Stop Monitoring",
                        iconPath: new ThemeIcon('sync-ignored'),
                        description: "Stop monitoring script until next version.",
                    },
                ]
            })
            if (this.isExecutionStale(localIteration, document) || !userChoice) {
                return
            }

            // Take action
            switch (userChoice) {
                case SHOW_COMPARISON: {
                    this.button.hide()
                    return this.showDiff(client, scriptNum, document)
                }
                case OVERWRITE_LOCAL_COPY: {
                    this.button.hide()
                    const result = await GSLExtension.downloadScript(
                        client,
                        scriptNum,
                    )
                    if (!result) {
                        window.showErrorMessage('Failed to download script')
                        return
                    }
                    if (document.uri.fsPath !== result.scriptPath) {
                        window.showWarningMessage(
                            'Script downloaded, but download directory is different' +
                            ' than original file directory. The old file will remain' +
                            ' and the warning button will not appear again for the ' +
                            ' old file until a new server version is seen.' +
                            ` "${document.uri.fsPath}" vs "${result.scriptPath}"`
                        )
                    }
                    return void this.showDownloadedScript(result)
                }
                case STOP_MONITORING: {
                    this.renderButton({ state: 'ignored', scriptNum })
                    return this.stopCheckingScript(client, scriptNum)
                }
                default: {
                    console.error('Unexpected user choice', userChoice)
                    assertNever(userChoice, undefined)
                }
            }
        })
    }

    private getScriptNumber(document: TextDocument): number | undefined {
        const scriptNum = Number(scriptNumberFromFileName(document.fileName))
        if (!scriptNum || Number.isNaN(scriptNum)) return
        return scriptNum
    }

    /**
     * Display a diff to the user of the local vs remote script.
     */
    private async showDiff(
        client: EditorClientInterface,
        scriptNum: number,
        document: TextDocument
    ): Promise<void> {
        await client.modifyScript(scriptNum, true)
        const newScript = await client.captureScript() // closes modifyScript
        try {
            // Create a temporary directory
            const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'vscode-'));
            const oldFilePath = path.join(tempDir, this.DIFF_FILE_LOCAL);
            const newFilePath = path.join(tempDir, this.DIFF_FILE_SERVER);
            // Write content to temporary files
            fs.writeFileSync(
                oldFilePath,
                this.normalizeScriptContents(document.getText())
            );
            fs.writeFileSync(
                newFilePath,
                this.normalizeScriptContents(newScript)
            );
            // Open diff view
            await window.showTextDocument(
                Uri.file(oldFilePath),
                {viewColumn: ViewColumn.Beside}
            )
            await commands.executeCommand(
                'vscode.diff',
                Uri.file(oldFilePath),
                Uri.file(newFilePath),
                `Comparing s${scriptNum}: `
                    + `${this.DIFF_FILE_LOCAL} ↔ ${this.DIFF_FILE_SERVER}`
            );
        } catch (error) {
            window.showErrorMessage('Error comparing GSL files: ' + error);
        }
    }

    private async stopCheckingScript(
        client: EditorClientInterface,
        scriptNum: number
    ): Promise<void> {
        const lastModifiedDate = await GSLExtension.checkModifiedDate(
            client,
            scriptNum
        ) || GSLExtension.findLastSeenScriptModification(scriptNum)?.lastModifiedDate
        if (!lastModifiedDate) {
            console.error('Failed to find script properties', scriptNum)
            return
        }
        this.ignoreScript(scriptNum, lastModifiedDate)
    }
}

function scriptNumberFromFileName (fileName: string): string {
    return path.basename(fileName).replace(/\D+/g,'').replace(/^0+/,'')
}

interface QuickPickCommandItem extends QuickPickItem { name: string }

class VSCodeIntegration {
    private context: ExtensionContext

    private downloadButton: StatusBarItem
    private uploadButton: StatusBarItem
    private gslButton: StatusBarItem

    /** Managed entirely by `OutOfDateButtonManager` */
    private scriptOutOfDateButton: StatusBarItem

    private commandList: Array<QuickPickCommandItem>

    private outputChannel: OutputChannel

    private gameTerminal?: GameTerminal

    private loggingEnabled: boolean

    private outOfDateButtonManager: OutOfDateButtonManager

    constructor (context: ExtensionContext) {
        this.context = context

        this.downloadButton = window.createStatusBarItem(StatusBarAlignment.Left, 50)
        this.uploadButton = window.createStatusBarItem(StatusBarAlignment.Left, 50)
        this.gslButton = window.createStatusBarItem(StatusBarAlignment.Left, 50)
        // Place out-of-date button as far to the right as possible, but left of status message
        this.scriptOutOfDateButton = window.createStatusBarItem(StatusBarAlignment.Left, 5)

        this.commandList = [
            { label: "Download Script", name: 'gsl.downloadScript' },
            { label: "Upload Script", name: 'gsl.uploadScript' },
            { label: "Check script modification date", name: 'gsl.checkDate' },
            { label: "List GSL Tokens", name: 'gsl.listTokens'},
            { label: "Show GSL extension output channel", name: 'gsl.showChannel' },
            { label: "Toggle output logging", name: 'gsl.toggleLogging' },
            { label: "Open development terminal", name: 'gsl.openTerminal' },
            { label: "Connect to development server", name: 'gsl.openConnection' },
            { label: "User Setup", name: 'gsl.userSetup' },
        ]

        this.outputChannel = window.createOutputChannel("GSL Editor (debug)")

        this.loggingEnabled = false

        this.registerCommands()
        this.initializeComponents()

        // Watch active editor for files that are out-of-date relative to
        // the server. If a stale file is seen, highlight the stale file
        // button, subtly prompting the user to refresh the local copy.
        this.outOfDateButtonManager = new OutOfDateButtonManager(
            this.scriptOutOfDateButton,
            this.withEditorClient.bind(this),
            this.showDownloadedScript.bind(this),
            this.context
        )
        this.context.subscriptions.push(this.outOfDateButtonManager.activate())
    }

    private initializeComponents () {
        this.downloadButton.text = "$(cloud-download) Download"
        this.downloadButton.command = 'gsl.downloadScript'
        this.downloadButton.show()

        this.uploadButton.text = "$(cloud-upload) Upload"
        this.uploadButton.command = 'gsl.uploadScript'
        this.uploadButton.show()

        this.gslButton.text = "$(ruby) GSL"
        this.gslButton.command = 'gsl.showCommands'
        this.gslButton.show()

        if (workspace.getConfiguration(GSL_LANGUAGE_ID).get('displayGameChannel')) {
            this.outputChannel.show(true);
        }
    }

    /* commands */

    private async commandDownloadScript () {
        const prompt = 'Script number or verb name to download?'
        const input = await window.showInputBox({ prompt })
        if (!input) { return }
        const scriptOptions = input.replace(/\s/g, '').split(';')
        const scriptList: Array<number|string> = []
        for (let option of scriptOptions) {
            if (option.indexOf('-') > -1) {
                let [first, second] = option.split('-')
                let low = parseInt(first)
                let high = parseInt(second)
                if (isNaN(low) || isNaN(high) || low > high) {
                    window.showErrorMessage("Invalid script range: " + option)
                }
                for (;low <= high;) { scriptList.push(low++) }
            } else {
                const script = Number(option)
                if (isNaN(script)) {
                    scriptList.push(option)
                } else {
                    scriptList.push(script)
                }
            }
        }
        let script: string | number | undefined = undefined
        try {
            await this.withEditorClient(async (client) => {
                for (script of scriptList) {
                    const result = await GSLExtension.downloadScript(
                        client,
                        script
                    )
                    if (!result) continue
                    this.outOfDateButtonManager.renderButton({ state: 'hidden'})
                    await vsc?.showDownloadedScript(result)
                }
            })
        }
        catch (e: unknown) {
            console.error(e as any)
            const error = `Failed to download script ${script}`
            window.showErrorMessage((e instanceof Error) ? `${error} (${e.message})` : error)
        }
    }
    private async showDownloadedScript(result: DownloadScriptResult) {
        const { scriptNumber, scriptPath, scriptProperties, syncStatus } = result
        window.setStatusBarMessage(`Downloaded ${scriptPath}`, 5000)
        if (
            syncStatus
            && !syncStatus.match(/All instances in sync/i)
            && scriptProperties.modifier === GSLExtension.getAccountName()
        ) {
            window.showInformationMessage(
                `s${scriptNumber} - instances out of sync - ${syncStatus.toLowerCase()}`
            )
        }
        try {
            // Stop monitoring while we open the document so we don't
            // trigger an unnecessary download/check
            this.outOfDateButtonManager.stopMonitoring()
            await window.showTextDocument(
                await workspace.openTextDocument(scriptPath),
                { preview: false }
            )
            this.outOfDateButtonManager.renderButton({state: 'hidden'})
        }
        finally {
            this.outOfDateButtonManager.resumeMonitoring()
        }
    }

    private async commandUploadScript () {
        const document = window.activeTextEditor?.document
        if (!document || !(document.languageId === GSL_LANGUAGE_ID)) {
            return void window.showWarningMessage(
                "Script upload requires an active GSL script editor"
            )
        }
        if (document.isDirty) {
            let result = false
            let i = 0
            while (result === false && i++ < 3) {
                result = await document.save()
            }
            if (result === false) {
                return void window.showErrorMessage(
                    "Failed to save active script editor before upload."
                )
            }
        }
        if (document.getText().match(/^\s*$/)) {
            return void window.showErrorMessage('Cannot upload empty script')
        }
        // Infer script number
        const inferredScriptNum = scriptNumberFromFileName(document.fileName)
        let scriptNum: number
        if (rx_script_number.test(inferredScriptNum) === false) {
            const prompt = "Unable to parse script number from active editor file name."
            const placeHolder = "Script number to upload as?"
            const input = await window.showInputBox({ prompt, placeHolder })
            if (!input || rx_script_number.test(input) === false) {
                return void window.showErrorMessage("Invalid script number provided.")
            }
            scriptNum = Number(input)
        } else {
            scriptNum = Number(inferredScriptNum)
        }
        const uploadMessage = window.setStatusBarMessage(`Uploading Script...`, 60000)
        await this.withEditorClient(async (client) => {
            let compileResults: ScriptCompileResults | undefined
            try {
                // Send script
                compileResults = await GSLExtension.uploadScript(
                    client,
                    scriptNum,
                    document
                ) // closes modifyScript
                if (!compileResults) return
                // Display compilation feedback
                if (compileResults.status === ScriptCompileStatus.Failed) {
                    const {script, errors, warnings} = compileResults
                    window.showErrorMessage(
                        `Script ${script}: Compile failed; ${errors} error(s), ${warnings} warning(s).`
                    )
                    commands.executeCommand('workbench.actions.view.problems')
                    return
                }
                const {script, bytes, maxBytes} = compileResults
                const bytesRemaining = maxBytes - bytes
                const bytesMsg = `${bytes.toLocaleString()} bytes (${bytesRemaining.toLocaleString()} left)`
                window.setStatusBarMessage(`Script ${script}: Compile OK; ${bytesMsg}`, 5000)
                this.outOfDateButtonManager.renderButton({state: 'hidden'})
            } catch (e) {
                const error = `Failed to upload script ${inferredScriptNum}`
                window.showErrorMessage((e instanceof Error) ? `${error} (${e.message})` : error)
                console.error(e)
                // We passed keepalive=true to `modifyScript`, so we need to make sure
                // to exit the editor when something goes wrong.
                await client.exitModifyScript()
            }
            finally {
                uploadMessage.dispose()
            }
        })
    }

    private async commandShowCommands () {
        const command = await window.showQuickPick(
            this.commandList, { placeHolder: 'Select a command to execute.' }
        )
        if (command) { commands.executeCommand(command.name) }
    }

    private async commandCheckDate () {
        if (!window.activeTextEditor || !window.activeTextEditor.document) {
            return void window.showErrorMessage (
                "You must have an open script before you can check its date."
            )
        }
        let scriptNumber = path.basename(window.activeTextEditor.document.fileName)
        scriptNumber = scriptNumber.replace(/\D+/g, '').replace(/^0+/,'')
        const script = Number(scriptNumber)
        await this.withEditorClient(async (client) => {
            window.setStatusBarMessage(`Checking modification date for script ${script} ...`, 5000)
            const date = await GSLExtension.checkModifiedDate(client, script)
            if (!date) {
                window.showErrorMessage(`Failed to find modification date for script ${script}`)
                return
            }
            window.setStatusBarMessage(
                `Script ${script} was last modified on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`,
                5000
            )
        })
    }

    private commandListTokens () {
        let uri = Uri.file(path.resolve(__dirname, './syntaxes/tokens.md'))
        commands.executeCommand('markdown.showPreview', uri)
    }

    private async commandToggleLogging () {
        await this.withEditorClient(async (client) => {
            this.loggingEnabled = !this.loggingEnabled
            client.toggleLogging()
            window.setStatusBarMessage(this.loggingEnabled ? 'Logging enabled.' : 'Logging disabled.', 5000)
        })
    }

    private async commandUserSetup () {
        let account = await window.showInputBox({ prompt: "PLAY.NET Account:", ignoreFocusOut: true })
        if (!account) { return void window.showErrorMessage("No account name entered; aborting setup.") }

        let password = await window.showInputBox({ prompt: "Password:", ignoreFocusOut: true, password: true })
        if (!password) { return void window.showErrorMessage("No password entered; aborting setup.")}

        /* capture rejected promises */
        let error: Error | undefined
        const captureError = (e: Error) => (error = e, void(0))

        /* login */
        const gameChoice = await EAccessClient.login(account, password, { name: /.*?development.*?/i }).catch(captureError)
        if (!gameChoice) {
            const message = error ? error.message : "Login failed?"
            return void window.showErrorMessage(message)
        }

        /* pick a game */
        const gamePickOptions = {
            ignoreFocusOut: true, placeholder: "Select a game ..."
        }
        const game = await window.showQuickPick(
            gameChoice.toNameList(), gamePickOptions
        )
        if (!game) {
            gameChoice.cancel()
            return void window.showErrorMessage("No game selected; aborting setup.")
        }
        const characterChoice = await gameChoice.select(gameChoice.pick(game)).catch(captureError)
        if (!characterChoice) {
            const message = error ? error.message : "Game select failed?"
            gameChoice.cancel()
            return void window.showErrorMessage(message)
        }

        /* pick a character */
        const characterPickOptions = {
            ignoreFocusOut: true, placeholder: "Select a character ..."
        }
        const character = await window.showQuickPick(
            characterChoice.toNameList(), characterPickOptions
        )
        if (!character) {
            characterChoice.cancel()
            return void window.showErrorMessage("No character selected; aborting setup.")
        }
        const result = await characterChoice.select(characterChoice.pick(character)).catch(captureError)
        if (!result) {
            const message = error ? error.message : "Character select failed?"
            return void window.showErrorMessage(message)
        }

        /* we now have the info we need to log into the same and save the details */
        const { sal, loginDetails } = result

        /* store all the details for automated login */
        this.context.globalState.update(GSLX_DEV_ACCOUNT, loginDetails.account)
        this.context.globalState.update(GSLX_DEV_INSTANCE, loginDetails.game)
        this.context.globalState.update(GSLX_DEV_CHARACTER, loginDetails.character)
        await this.context.secrets.store(GSLX_DEV_PASSWORD, password)
        window.showInformationMessage('Credentials stored for login')
    }

    private async commandOpenConnection () {
        const msg = window.setStatusBarMessage("Connecting to game...")
        try {
            await this.withEditorClient(() => {
                window.setStatusBarMessage("Connected to game successfully", 5000)
            })
        } catch (e) {
            console.error(e)
            const error = "Failed to connect to game"
            window.setStatusBarMessage(error, 5000)
            window.showErrorMessage((e instanceof Error) ? `${error} (${e.message})` : error)
        }
        finally {
            msg.dispose()
        }
    }

    private async commandOpenTerminal () {
        if (this.gameTerminal) {
            this.gameTerminal.show(true)
            return
        }
        try {
            const localGameTerminal
                = this.gameTerminal
                = new GameTerminal (() => this.gameTerminal = undefined)
            this.gameTerminal.show(true)
            await this.withEditorClient((client) => {
                if (localGameTerminal !== this.gameTerminal) return // stale
                this.gameTerminal.bindClient(client)
            })
        }
        catch (e) {
            console.error(e)
            window.setStatusBarMessage("Failed to bind terminal to game client", 5000)
        }
    }

    private registerCommands () {
        let subscription: Disposable
        subscription = commands.registerCommand('gsl.downloadScript', this.commandDownloadScript, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.uploadScript', this.commandUploadScript, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.showCommands', this.commandShowCommands, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.checkDate', this.commandCheckDate, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.listTokens', this.commandListTokens, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.toggleLogging', this.commandToggleLogging, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.showChannel', this.showGameChannel, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.userSetup', this.commandUserSetup, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.openConnection', this.commandOpenConnection, this)
        this.context.subscriptions.push(subscription)
        subscription = commands.registerCommand('gsl.openTerminal', this.commandOpenTerminal, this)
        this.context.subscriptions.push(subscription)
    }

    /* public api */

    appendLineToGameChannel (text: string) {
        this.outputChannel.appendLine(text)
    }

    showGameChannel () {
        this.outputChannel.show(true)
    }

    outputGameChannel (text: string) {
        this.outputChannel.appendLine(text)
    }

    async promptUserSetup () {
        const message = "To start using the GSL Editor, you must run the User Setup process to store your Play.net account credentials."
        const option = 'Start User Setup'
        const choice = await window.showInformationMessage(message, option)
        if (choice === option) {
            this.commandUserSetup()
        }
    }

    async checkForNewInstall () {
        let flag = this.context.globalState.get(GSLX_NEW_INSTALL_FLAG)
        if (flag !== true) {
            const message = "For the best experience, the GSL Vibrant theme is recommended for the GSL Editor."
            const option = 'Apply Theme'
            const choice = await window.showInformationMessage(message, option)
            if (choice === option) {
                await workspace.getConfiguration().update('workbench.colorTheme', 'GSL Vibrant', true)
            }
            this.context.globalState.update(GSLX_NEW_INSTALL_FLAG, true)
        }
    }

    async checkForUpdatedVersion () {
        let extension = extensions.getExtension('patricktrant.gsl')
        if (extension) {
            let { packageJSON: { version } } = extension
            let savedVersion = this.context.globalState.get(GSLX_SAVED_VERSION)
            if (savedVersion && (savedVersion !== version)) {
                const message = `The GSL Editor extension has been updated to version ${version}!`
                const option = 'Show Release Notes'
                const choice = await window.showInformationMessage(message, option)
                if (choice === option) {
                    const changelogPath = path.resolve(__dirname, './CHANGELOG.md')
                    commands.executeCommand('markdown.showPreview', Uri.file(changelogPath))
                }
                this.copySpellCheckFiles()
                this.context.globalState.update(GSLX_SAVED_VERSION, version)
            }
        }
    }

    async copySpellCheckFiles () {
        let copyFile = false
        let sourceFile = path.resolve(__dirname, './spellcheck/cspell.json')
        let destinationFile = path.join(GSLExtension.getDownloadLocation(), 'cspell.json')
        if (!fs.existsSync(destinationFile)) {
            copyFile = true
        } else if (fs.statSync(sourceFile).mtime > fs.statSync(destinationFile).mtime) {
            copyFile = true
        }
        if (copyFile) {
            fs.copyFile(sourceFile, destinationFile, () => {})
        }
        copyFile = false
        sourceFile = path.resolve(__dirname, './spellcheck/GemStoneDictionary.txt')
        destinationFile = path.join(GSLExtension.getDownloadLocation(), 'GemStoneDictionary.txt')
        if (!fs.existsSync(destinationFile)) {
            copyFile = true
        } else if (fs.statSync(sourceFile).mtime > fs.statSync(destinationFile).mtime) {
            copyFile = true
        }
        if (copyFile) {
            fs.copyFile(sourceFile, destinationFile, () => {})
        }
    }

    /**
    * Provides an `EditorClient` object that is guaranteed to be exclusively owned
    * by the caller, so long as all other callers are using this function. This
    * prevents callers from sending conflicting commands to the game. If the user
    * hasn't provided their login information yet this will skip execution of `task`
    * and instead prompt the user to provide that login info. This wraps another
    * function of the same name for convienence of ensuring preconditions and
    * passing common parameters.
    */
    async withEditorClient <T>(
        task: (client: EditorClientInterface) => T
    ): Promise<T | undefined> {
        if (workspace.getConfiguration(GSL_LANGUAGE_ID).get(GSLX_DISABLE_LOGIN)) {
            return void window.showErrorMessage("Game login is disabled")
        }
        const account = this.context.globalState.get<string>(GSLX_DEV_ACCOUNT)
        const instance = this.context.globalState.get<string>(GSLX_DEV_INSTANCE)
        const character = this.context.globalState.get<string>(GSLX_DEV_CHARACTER)
        const password = await this.context.secrets.get(GSLX_DEV_PASSWORD)
        if (!account || !instance || !character || !password) {
            this.promptUserSetup()
            return
        }
        /** Redirect console to output channel */
        const consoleAdapter: { log: (...args: any) => void } = {
            log: (...args: any) => {
                this.outputChannel.append(`[console(log): ${args.join(' ')}]\r\n`)
            }
        }
        return withEditorClient({
            login: {
                account,
                instance,
                character,
                password,
            },
            console: consoleAdapter,
            downloadLocation: GSLExtension.getDownloadLocation(),
            loggingEnabled: this.loggingEnabled,
            onCreate: (client) => {
                this.gameTerminal?.bindClient(client)
            },
        }, task)
    }
}

class ExtensionLanguageServer {
    private context: ExtensionContext
    private lspClient: LanguageClient

    constructor (context: ExtensionContext) {
        this.context = context
        this.lspClient = this.startLanguageServer()
    }

    private startLanguageServer () {
        const relativePath = path.join('gsl-language-server', 'out', 'server.js')
        const module = this.context.asAbsolutePath(relativePath)
        const options = { execArgv: [ '--nolazy', '--inspect=6009' ] }
        const transport = TransportKind.ipc

        const serverOptions: ServerOptions = {
                run: { module, transport },
                debug: { module, transport, options }
        }

        const clientOptions: LanguageClientOptions = {
                documentSelector: [{ scheme: 'file', language: GSL_LANGUAGE_ID }],
                synchronize: {
                        fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
                }
        }

        const lspClient = new LanguageClient (
                'gslLanguageServer',
                'GSL Language Server',
                serverOptions,
                clientOptions
        )

        lspClient.start()

        return lspClient
    }
}

export let vsc: VSCodeIntegration | undefined = undefined

export function activate (context: ExtensionContext) {
    vsc = new VSCodeIntegration (context)
    // const els = new ExtensionLanguageServer (context)

    EAccessClient.console = {
        log: (...args: any) => { vsc!.outputGameChannel(args.join(' ')) }
    }

    EAccessClient.debug = false

    GSLExtension.init(context)

    const selector: DocumentSelector = { scheme: '*', language: GSL_LANGUAGE_ID }

    let subscription: Disposable

    subscription = languages.registerDocumentSymbolProvider(
        selector, new GSLDocumentSymbolProvider()
    )
    context.subscriptions.push(subscription)

    subscription = languages.registerHoverProvider(
        selector,
        new GSLHoverProvider(async (script: number) => {
            const config = workspace.getConfiguration(GSL_LANGUAGE_ID)
            if (!config.get(GSLX_AUTOMATIC_DOWNLOADS)) return
            return vsc?.withEditorClient(client => client.modifyScript(script))
        })
    )
    context.subscriptions.push(subscription)

    subscription = languages.registerDefinitionProvider(
        selector,
        new GSLDefinitionProvider(
            !!workspace.getConfiguration(GSL_LANGUAGE_ID).get(GSLX_AUTOMATIC_DOWNLOADS)
        )
    )
    context.subscriptions.push(subscription)

    subscription = languages.registerDocumentHighlightProvider(
        selector, new GSLDocumentHighlightProvider()
    )
    context.subscriptions.push(subscription)

    subscription = languages.registerDocumentFormattingEditProvider(
        selector, new GSLDocumentFormattingEditProvider()
    )
    context.subscriptions.push(subscription)

    vsc.checkForNewInstall()
    vsc.checkForUpdatedVersion()
}

export function deactivate () {
}
