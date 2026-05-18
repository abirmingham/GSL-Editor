import * as assert from "assert";
import { TOOL_DEFINITIONS, createMcpToolHandler } from "../../gsl/mcp/mcpTools";
import {
    ToolOrchestrator,
    ToolOrchestratorDeps,
    LoginCredentials,
    GameInstance,
} from "../../gsl/toolOrchestrator";

// ---------------------------------------------------------------------------
// Mock helpers
// ---------------------------------------------------------------------------

const DEV_CREDS: LoginCredentials = {
    account: "test",
    instance: "GS4D",
    character: "TestChar",
    password: "testpass",
};

const PRIME_CREDS: LoginCredentials = {
    account: "test",
    instance: "GS3",
    character: "TestChar",
    password: "testpass",
};

const ALL_CREDS: Record<string, LoginCredentials> = {
    dev: DEV_CREDS,
    prime: PRIME_CREDS,
};

function makeDeps(
    overrides: Partial<ToolOrchestratorDeps> = {},
): ToolOrchestratorDeps {
    return {
        getCredentials: async (instance: GameInstance) =>
            ALL_CREDS[instance] as LoginCredentials | undefined,
        getCurrentAuthor: () => "AlexB/Nyxus",
        getDownloadLocation: () => "/tmp/gsl",
        console: { log: () => {} },
        ...overrides,
    };
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

suite("MCP Tool Definitions", () => {
    test("all expected tools are defined", () => {
        const names = TOOL_DEFINITIONS.map((t) => t.name);
        assert.ok(names.includes("gsl_get_room_data"));
        assert.ok(names.includes("gsl_get_existence_data"));
        assert.ok(names.includes("gsl_get_player_varfields"));
        assert.ok(names.includes("gsl_get_script_data"));
        assert.ok(names.includes("gsl_get_verb_data"));
        assert.ok(names.includes("gsl_get_table_metadata"));
        assert.ok(names.includes("gsl_slash_agent_command"));
        assert.ok(names.includes("gsl_diff_with_prime"));
        assert.ok(names.includes("gsl_fetch_prime_script"));
        assert.ok(names.includes("gsl_compile_check"));
        assert.ok(names.includes("gsl_get_current_author"));
    });

    test("tool count is 11", () => {
        assert.strictEqual(TOOL_DEFINITIONS.length, 11);
    });

    test("every tool has a name, description, and inputSchema", () => {
        for (const tool of TOOL_DEFINITIONS) {
            assert.ok(tool.name, `Tool missing name`);
            assert.ok(tool.description, `${tool.name} missing description`);
            assert.ok(tool.inputSchema, `${tool.name} missing inputSchema`);
        }
    });
});

suite("MCP Tool Handlers", () => {
    test("gsl_get_current_author returns author string", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_current_author", orch);
        const result = await handler({});
        assert.ok(!result.isError);
        assert.ok(
            result.content.some(
                (c: any) => c.type === "text" && c.text.includes("AlexB/Nyxus"),
            ),
        );
    });

    test("gsl_get_current_author returns error when not configured", async () => {
        const orch = new ToolOrchestrator(
            makeDeps({ getCurrentAuthor: () => undefined }),
        );
        const handler = createMcpToolHandler("gsl_get_current_author", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("handler for unknown tool throws", () => {
        const orch = new ToolOrchestrator(makeDeps());
        assert.throws(() => createMcpToolHandler("nonexistent_tool", orch));
    });

    test("gsl_get_room_data handler validates missing roomId", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_room_data", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_get_existence_data handler validates missing existenceId", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_existence_data", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_get_player_varfields handler validates missing playerName", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_player_varfields", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_get_verb_data handler validates missing verb", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_verb_data", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_get_script_data handler validates missing scriptId", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_script_data", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_get_table_metadata handler validates missing tableId", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_get_table_metadata", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_diff_with_prime handler validates missing scriptNumber", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_diff_with_prime", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });

    test("gsl_compile_check handler validates missing filename", async () => {
        const orch = new ToolOrchestrator(makeDeps());
        const handler = createMcpToolHandler("gsl_compile_check", orch);
        const result = await handler({});
        assert.ok(result.isError);
    });
});
