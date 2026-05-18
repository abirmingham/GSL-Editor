import * as fs from "fs";
import * as path from "path";
import { createTwoFilesPatch, structuredPatch } from "diff";
import { ToolOrchestrator, GameInstance } from "../toolOrchestrator";

// ---------------------------------------------------------------------------
// Tool definitions — derived from package.json (single source of truth)
// ---------------------------------------------------------------------------

export interface McpToolDefinition {
    name: string;
    description: string;
    inputSchema: {
        type: "object";
        required?: string[];
        properties: Record<string, unknown>;
    };
}

function loadToolDefinitions(): McpToolDefinition[] {
    const pkgPath = path.resolve(__dirname, "../../package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    const tools: Array<{
        name: string;
        modelDescription?: string;
        inputSchema: McpToolDefinition["inputSchema"];
    }> = pkg.contributes?.languageModelTools ?? [];
    return tools.map((t) => ({
        name: t.name,
        description: t.modelDescription ?? "",
        inputSchema: t.inputSchema,
    }));
}

export const TOOL_DEFINITIONS: McpToolDefinition[] = loadToolDefinitions();

// ---------------------------------------------------------------------------
// Tool result type
// ---------------------------------------------------------------------------

export interface McpToolResult {
    content: Array<{ type: "text"; text: string }>;
    isError?: boolean;
}

// ---------------------------------------------------------------------------
// Validation helpers
// ---------------------------------------------------------------------------

function parseRequiredScriptNumber(value: unknown): number {
    if (
        value === undefined ||
        value === null ||
        typeof value !== "number" ||
        !Number.isInteger(value) ||
        value < 1 ||
        value > 999999
    ) {
        throw new Error(
            "Missing or invalid scriptNumber. Expected an integer between 1 and 999999.",
        );
    }
    return value;
}

function parseDiffContext(value: unknown): number {
    if (value === undefined || value === null) return 3;
    if (
        typeof value !== "number" ||
        !Number.isInteger(value) ||
        value < 0 ||
        value > 100
    ) {
        throw new Error(
            "Invalid context. Expected an integer between 0 and 100.",
        );
    }
    return value;
}

function parseRequiredRoomId(value: unknown): number {
    if (
        value === undefined ||
        value === null ||
        typeof value !== "number" ||
        !Number.isInteger(value) ||
        value < 1
    ) {
        throw new Error(
            "Missing or invalid roomId. Provide a positive integer.",
        );
    }
    return value;
}

function parseRequiredExistenceId(value: unknown): number {
    if (
        value === undefined ||
        value === null ||
        typeof value !== "number" ||
        !Number.isInteger(value) ||
        value === 0
    ) {
        throw new Error(
            "Missing or invalid existenceId. Provide a non-zero integer.",
        );
    }
    return value;
}

const VALID_SVF_VERBOSITIES = new Set(["Full", "NoTables", "SkipDefaults"]);

const VALID_INSTANCES = new Set<GameInstance>([
    "dev",
    "prime",
    "shattered",
    "platinum",
    "test",
]);

function parseInstance(
    value: unknown,
    defaultValue: GameInstance,
): GameInstance {
    if (value === undefined || value === null) return defaultValue;
    if (
        typeof value !== "string" ||
        !VALID_INSTANCES.has(value as GameInstance)
    ) {
        throw new Error(
            `Invalid instance '${value}'. Must be one of: ${[...VALID_INSTANCES].join(", ")}.`,
        );
    }
    return value as GameInstance;
}

const SCRIPT_DATA_GAME_CODES: Record<GameInstance, string> = {
    dev: "GS4D",
    shattered: "GSF",
    prime: "GS4",
    test: "GST",
    platinum: "GS4X",
};

// ---------------------------------------------------------------------------
// Tool handler factory
// ---------------------------------------------------------------------------

type ToolHandler = (args: Record<string, unknown>) => Promise<McpToolResult>;

function textResult(text: string): McpToolResult {
    return { content: [{ type: "text", text }] };
}

function errorResult(message: string): McpToolResult {
    return { content: [{ type: "text", text: message }], isError: true };
}

function formatCompileResults(
    filename: string,
    compileResults: {
        status: number;
        script: number;
        path: string;
        bytes: number;
        maxBytes: number;
        errors: number;
        warnings: number;
        errorList: Array<{ line: number; message: string }>;
    },
): string {
    // ScriptCompileStatus.Failed === 5
    if (compileResults.status === 5) {
        const messages = compileResults.errorList.length
            ? compileResults.errorList
                  .map((error) => `line ${error.line}: ${error.message}`)
                  .join("\n")
            : "(No line-level compiler errors were captured.)";
        return [
            `Compile failed for ${filename} (uploaded as script ${compileResults.script || 24661}).`,
            `Errors: ${compileResults.errors}, warnings: ${compileResults.warnings}.`,
            "",
            messages,
        ].join("\n");
    }

    // ScriptCompileStatus.Compiled === 4
    if (compileResults.status === 4) {
        const bytesRemaining = compileResults.maxBytes - compileResults.bytes;
        return [
            `Compile OK for ${filename} (uploaded as script ${compileResults.script || 24661}).`,
            `Warnings: ${compileResults.warnings}.`,
            `Size: ${compileResults.bytes.toLocaleString()} bytes (${bytesRemaining.toLocaleString()} bytes remaining).`,
            compileResults.path ? `Server path: ${compileResults.path}` : "",
        ]
            .filter(Boolean)
            .join("\n");
    }

    return `Upload finished for ${filename}, but compiler status was inconclusive.`;
}

/**
 * Creates an MCP tool handler function for the given tool name.
 * The handler takes validated arguments and returns an MCP-compatible result.
 */
export function createMcpToolHandler(
    name: string,
    orchestrator: ToolOrchestrator,
): ToolHandler {
    switch (name) {
        case "gsl_get_current_author":
            return async () => {
                const author = orchestrator.getCurrentAuthor()?.trim();
                if (!author) {
                    return errorResult(
                        "Author is not configured. Run 'GSL: User Setup'.",
                    );
                }
                return textResult(author);
            };

        case "gsl_get_room_data":
            return async (args) => {
                try {
                    const roomId = parseRequiredRoomId(args.roomId);
                    const instance = parseInstance(args.instance, "dev");
                    const output = await orchestrator.getRoomData(
                        roomId,
                        instance,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `Room ${roomId}: No data returned from ${instance} server. The room may not exist.`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_get_existence_data":
            return async (args) => {
                try {
                    const existenceId = parseRequiredExistenceId(
                        args.existenceId,
                    );
                    const instance = parseInstance(args.instance, "dev");
                    const output = await orchestrator.getExistenceData(
                        existenceId,
                        instance,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `Existence ${existenceId}: No data returned from ${instance} server. The existence may not exist.`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_get_player_varfields":
            return async (args) => {
                try {
                    const playerName = args.playerName as string | undefined;
                    if (!playerName?.trim()) {
                        throw new Error(
                            "Missing playerName. Provide the player name to look up.",
                        );
                    }
                    const verbosity =
                        (args.verbosity as
                            | "Full"
                            | "NoTables"
                            | "SkipDefaults") ?? "NoTables";
                    if (!VALID_SVF_VERBOSITIES.has(verbosity)) {
                        throw new Error(
                            `Invalid verbosity '${verbosity}'. Must be Full, NoTables, or SkipDefaults.`,
                        );
                    }
                    const instance = parseInstance(args.instance, "dev");
                    const output = await orchestrator.getPlayerVarfields(
                        playerName.trim(),
                        verbosity,
                        instance,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `Player ${playerName.trim()}: No data returned from ${instance} server. The player may not exist or may not be logged in.`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_slash_agent_command":
            return async (args) => {
                try {
                    const command = (args.command as string)?.trim() ?? "";
                    const instance = parseInstance(args.instance, "dev");
                    const output = await orchestrator.executeAgentCommand(
                        command,
                        instance,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `No output returned from /agent ${command} on ${instance} server.`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_get_script_data":
            return async (args) => {
                try {
                    const scriptId = parseRequiredScriptNumber(args.scriptId);
                    const instance = parseInstance(args.instance, "dev");
                    const gameCode = SCRIPT_DATA_GAME_CODES[instance];
                    if (!gameCode) {
                        throw new Error(
                            `Invalid instance '${instance}'. Must be one of: ${Object.keys(SCRIPT_DATA_GAME_CODES).join(", ")}.`,
                        );
                    }
                    const output = await orchestrator.getScriptData(
                        scriptId,
                        gameCode,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `Script ${scriptId}: No data returned for ${instance} (${gameCode}).`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_get_verb_data":
            return async (args) => {
                try {
                    const verb = (args.verb as string)?.trim();
                    if (!verb) {
                        throw new Error(
                            "Missing verb. Provide the verb name to look up.",
                        );
                    }
                    const instance = parseInstance(args.instance, "dev");
                    const output = await orchestrator.getVerbData(
                        verb,
                        instance,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `Verb '${verb}': No data returned. The verb may not exist.`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_get_table_metadata":
            return async (args) => {
                try {
                    const tableId = parseRequiredScriptNumber(args.tableId);
                    const instance = parseInstance(args.instance, "dev");
                    const output = await orchestrator.getGlobalTableData(
                        tableId,
                        instance,
                    );
                    if (!output || output.trim().length === 0) {
                        return textResult(
                            `Table ${tableId}: No data returned. The table may not exist.`,
                        );
                    }
                    return textResult(output);
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        case "gsl_diff_with_prime":
            return async (args) => {
                try {
                    const scriptNumber = parseRequiredScriptNumber(
                        args.scriptNumber,
                    );
                    const diffContext = parseDiffContext(args.context);
                    const ignoreWhitespace =
                        (args.ignoreWhitespace as boolean) ?? false;

                    const {
                        devContent,
                        primeContent,
                        isNewOnPrime,
                        isNewOnDev,
                    } =
                        await orchestrator.fetchPrimeAndDevScriptDiff(
                            scriptNumber,
                        );

                    if (isNewOnPrime && isNewOnDev) {
                        return textResult(
                            `Script ${scriptNumber}: Not found on either Prime or Dev server.`,
                        );
                    }
                    if (isNewOnPrime) {
                        return textResult(
                            `Script ${scriptNumber}: Not found on Prime server (appears to be new in Dev).`,
                        );
                    }
                    if (isNewOnDev) {
                        return textResult(
                            `Script ${scriptNumber}: Not found on Dev server.`,
                        );
                    }

                    const patch = structuredPatch(
                        `s${scriptNumber} (Prime)`,
                        `s${scriptNumber} (Dev)`,
                        primeContent,
                        devContent,
                        undefined,
                        undefined,
                        { context: diffContext, ignoreWhitespace },
                    );

                    if (patch.hunks.length === 0) {
                        const noDiffMessage = ignoreWhitespace
                            ? `Script ${scriptNumber}: No differences between Prime and Dev (ignoring whitespace).`
                            : `Script ${scriptNumber}: No differences between Prime and Dev.`;
                        return textResult(noDiffMessage);
                    }

                    const diffText = createTwoFilesPatch(
                        `s${scriptNumber} (Prime)`,
                        `s${scriptNumber} (Dev)`,
                        primeContent,
                        devContent,
                        undefined,
                        undefined,
                        { context: diffContext, ignoreWhitespace },
                    );

                    return textResult(
                        `Script ${scriptNumber}: Differences found between Prime and Dev.\n\n` +
                            "```diff\n" +
                            diffText +
                            "\n```",
                    );
                } catch (e) {
                    return errorResult(
                        `Failed to diff script: ${e instanceof Error ? e.message : String(e)}`,
                    );
                }
            };

        case "gsl_fetch_prime_script":
            return async (args) => {
                try {
                    const scriptNumber = args.scriptNumber as
                        | number
                        | undefined;
                    if (scriptNumber !== undefined) {
                        parseRequiredScriptNumber(scriptNumber);
                    }
                    if (scriptNumber === undefined) {
                        return errorResult(
                            "scriptNumber is required when running outside VS Code.",
                        );
                    }
                    const { content, isNew } =
                        await orchestrator.fetchPrimeScript(scriptNumber);
                    if (isNew) {
                        return textResult(
                            `Script ${scriptNumber}: Not found on Prime server (new script).`,
                        );
                    }
                    return textResult(
                        `Script ${scriptNumber} from Prime server:\n\n` +
                            "```gsl\n" +
                            content +
                            "\n```",
                    );
                } catch (e) {
                    return errorResult(
                        `Failed to fetch script from prime: ${e instanceof Error ? e.message : String(e)}`,
                    );
                }
            };

        case "gsl_compile_check":
            return async (args) => {
                try {
                    const filename = args.filename as string | undefined;
                    if (!filename?.trim()) {
                        throw new Error(
                            "Missing filename. Provide a .gsl file path.",
                        );
                    }
                    const resolvedPath = path.resolve(filename.trim());
                    if (!resolvedPath.endsWith(".gsl")) {
                        throw new Error("File must have a .gsl extension.");
                    }
                    const content = fs.readFileSync(resolvedPath, "utf8");
                    const compileResults =
                        await orchestrator.uploadAndCompileScript(content);
                    return textResult(
                        formatCompileResults(filename.trim(), compileResults),
                    );
                } catch (e) {
                    return errorResult(
                        e instanceof Error ? e.message : String(e),
                    );
                }
            };

        default:
            throw new Error(`Unknown tool: ${name}`);
    }
}
