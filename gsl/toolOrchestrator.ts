import {
    ClientTask,
    EditorClientInterface,
    InitOptions,
    ScriptCompileResults,
    ScriptCompileStatus,
    withClientForInstance,
} from "./editorClient";
import { throwOnControlCharacters } from "./strings";

// ---------------------------------------------------------------------------
// Dependencies
// ---------------------------------------------------------------------------

export type GameInstance = "dev" | "prime" | "shattered" | "platinum" | "test";

export interface LoginCredentials {
    account: string;
    instance: string;
    character: string;
    password: string;
}

export interface ToolOrchestratorDeps {
    getCredentials(
        instance: GameInstance,
    ): Promise<LoginCredentials | undefined>;
    getCurrentAuthor(): string | undefined;
    getDownloadLocation(): string;
    console: { log: (...args: any[]) => void };
}

// ---------------------------------------------------------------------------
// ToolOrchestrator
// ---------------------------------------------------------------------------

export class ToolOrchestrator {
    constructor(private deps: ToolOrchestratorDeps) {}

    // -- credential helpers ------------------------------------------------

    private async initOptionsFor(instance: GameInstance): Promise<InitOptions> {
        const creds = await this.deps.getCredentials(instance);
        if (!creds) {
            throw new Error(`${instance} server not configured.`);
        }
        return {
            login: creds,
            console: this.deps.console,
            downloadLocation: this.deps.getDownloadLocation(),
            loggingEnabled: false,
            onCreate: () => {},
        };
    }

    private async withClient<T>(
        instance: GameInstance,
        task: ClientTask<T>,
    ): Promise<T> {
        return withClientForInstance(
            instance,
            await this.initOptionsFor(instance),
            task,
        );
    }

    // -- executeShowCommand ------------------------------------------------

    private async executeShowCommand(
        client: EditorClientInterface,
        command: string,
        captureStart: RegExp,
        captureEnd: RegExp,
        abortPattern: RegExp,
        includeStartLine: boolean,
        includeEndLine: boolean,
    ): Promise<string> {
        const TIMEOUT_MS = 15000;
        const lines = await client.executeCommand(command, {
            captureStart,
            captureEnd,
            abortPattern,
            timeoutMillis: TIMEOUT_MS,
            includeStartLine,
            includeEndLine,
        });
        return lines.join("\n");
    }

    private async executeShowCommandOnInstance(
        instance: GameInstance,
        command: string,
        captureStart: RegExp,
        captureEnd: RegExp,
        abortPattern: RegExp,
        { includeStartLine = true, includeEndLine = true } = {},
    ): Promise<string> {
        const task = (client: EditorClientInterface) =>
            this.executeShowCommand(
                client,
                command,
                captureStart,
                captureEnd,
                abortPattern,
                includeStartLine,
                includeEndLine,
            );

        return this.withClient(instance, task);
    }

    // -- tool methods ------------------------------------------------------

    getCurrentAuthor(): string | undefined {
        return this.deps.getCurrentAuthor();
    }

    async getRoomData(roomId: number, instance: GameInstance): Promise<string> {
        return this.executeShowCommandOnInstance(
            instance,
            `/sr ${roomId}`,
            /^Showing room #\d+/,
            /^Flags:/,
            /does not exist or could not be loaded for some reason/,
        );
    }

    async getExistenceData(
        existenceId: number,
        instance: GameInstance,
    ): Promise<string> {
        return this.executeShowCommandOnInstance(
            instance,
            `/se ${existenceId}`,
            /^Showing /,
            /^Flags:/,
            /^Existence ".*?" not found\./,
        );
    }

    async getPlayerVarfields(
        playerName: string,
        verbosity: "Full" | "NoTables" | "SkipDefaults",
        instance: GameInstance,
    ): Promise<string> {
        throwOnControlCharacters(playerName);
        return this.executeShowCommandOnInstance(
            instance,
            `/svf ${playerName} ${verbosity}`,
            /^Variable Fields Attached to player /,
            /^Flags:/,
            /^Player .+ not found$/,
        );
    }

    async executeAgentCommand(
        command: string,
        instance: GameInstance,
    ): Promise<string> {
        throwOnControlCharacters(command);
        const fullCommand = command ? `/agent ${command}` : `/agent`;
        return this.executeShowCommandOnInstance(
            instance,
            fullCommand,
            /^<<<beginning of output>>>/,
            /^<<<end of output>>>/,
            /(?!)/,
            { includeStartLine: false, includeEndLine: false },
        );
    }

    async getVerbData(
        verb: string,
        instance: GameInstance = "dev",
    ): Promise<string> {
        throwOnControlCharacters(verb);
        return this.withClient(instance, (client) =>
            this.executeShowCommand(
                client,
                `/sv ${verb}`,
                /^Information about the verb /,
                /^On /,
                /does not exist\.$/,
                true,
                true,
            ),
        );
    }

    async getScriptData(scriptId: number, gameCode: string): Promise<string> {
        return this.withClient("dev", (client) =>
            this.executeShowCommand(
                client,
                `/ss ${scriptId} ${gameCode} raw`,
                /^Game: /,
                /^On |^Unspecified Date/,
                /^Invalid script/,
                true,
                true,
            ),
        );
    }

    async getGlobalTableData(
        tableId: number,
        instance: GameInstance = "dev",
    ): Promise<string> {
        return this.withClient(instance, (client) =>
            this.executeShowCommand(
                client,
                `/sl ${tableId}`,
                /^Table \[\d+\] Header Information/,
                /^\s+Table Type:/,
                /^ERROR:.*Trouble loading table/,
                true,
                true,
            ),
        );
    }

    // -- prime service operations ------------------------------------------

    async fetchPrimeScript(
        script: number,
    ): Promise<{ content: string; isNew: boolean }> {
        const raw = await this.withClient("prime", async (client) => {
            const props = await client.modifyScript(script, true);
            if (props.new) {
                await client.exitModifyScript();
                return { content: "", isNew: true };
            }
            try {
                const content = await client.captureScript();
                return { content, isNew: false };
            } catch (e) {
                await client.exitModifyScript();
                throw e;
            }
        });

        if (raw.isNew) {
            return { content: "", isNew: true };
        }
        return { content: normalizeText(raw.content), isNew: false };
    }

    async fetchDevScript(
        script: number,
    ): Promise<{ content: string; isNew: boolean }> {
        const raw = await this.withClient("dev", async (client) => {
            const props = await client.modifyScript(script, true);
            if (props.new) {
                await client.exitModifyScript();
                return { content: "", isNew: true };
            }
            try {
                const content = await client.captureScript();
                return { content, isNew: false };
            } catch (e) {
                await client.exitModifyScript();
                throw e;
            }
        });

        if (raw.isNew) {
            return { content: "", isNew: true };
        }
        return { content: normalizeText(raw.content), isNew: false };
    }

    async fetchPrimeAndDevScriptDiff(script: number): Promise<{
        devContent: string;
        primeContent: string;
        isNewOnPrime: boolean;
        isNewOnDev: boolean;
    }> {
        const [prime, dev] = await Promise.all([
            this.fetchPrimeScript(script),
            this.fetchDevScript(script),
        ]);
        return {
            devContent: dev.content,
            primeContent: prime.content,
            isNewOnPrime: prime.isNew,
            isNewOnDev: dev.isNew,
        };
    }

    // -- compile check -----------------------------------------------------

    /**
     * Uploads script content to the safety script (S24661) on the dev server
     * for compilation, and returns the compile results.
     */
    async uploadAndCompileScript(
        content: string,
    ): Promise<ScriptCompileResults> {
        const SAFETY_SCRIPT = 24661;
        if (!content || content.match(/^\s*$/)) {
            throw new Error("Cannot upload an empty script file.");
        }
        return this.withClient("dev", async (client) => {
            const props = await client.modifyScript(SAFETY_SCRIPT, true);
            try {
                const lines = content.split(/\r?\n/);
                if (lines[lines.length - 1] !== "") {
                    lines.push("");
                }
                const results = await client.sendScript(lines, props.new);
                if (results.status === ScriptCompileStatus.Failed) {
                    return results;
                }
                // Close the modify session after successful compile
                await client.modifyScript(SAFETY_SCRIPT);
                return results;
            } catch (e) {
                try {
                    await client.exitModifyScript();
                } catch {
                    // best-effort cleanup
                }
                throw e;
            }
        });
    }
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function normalizeText(text: string): string {
    return text.replace(/\r\n/g, "\n").replace(/\s+$/, "") + "\n";
}
