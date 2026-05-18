#!/usr/bin/env node

/**
 * GSL MCP Server
 *
 * Exposes GSL Editor tooling over the Model Context Protocol (MCP) so that
 * non-VS-Code agent harnesses (Claude Code, Codex CLI, etc.) can query
 * the game server.
 *
 * Configuration is via environment variables:
 *   GSL_ACCOUNT            – Play.net account name
 *   GSL_PASSWORD           – Play.net password
 *   GSL_DEV_INSTANCE       – Dev game code  (e.g. GS4D)
 *   GSL_DEV_CHARACTER      – Dev character name
 *   GSL_PRIME_INSTANCE     – Prime game code (e.g. GS3)
 *   GSL_PRIME_CHARACTER    – Prime character name
 *   GSL_SHATTERED_INSTANCE – Shattered game code (e.g. GSF)
 *   GSL_SHATTERED_CHARACTER– Shattered character name
 *   GSL_PLATINUM_INSTANCE  – Platinum game code (e.g. GS4X)
 *   GSL_PLATINUM_CHARACTER – Platinum character name
 *   GSL_TEST_INSTANCE      – Test game code (e.g. GST)
 *   GSL_TEST_CHARACTER     – Test character name
 *   GSL_AUTHOR             – Changelog author (e.g. AlexB/Nyxus)
 *   GSL_DOWNLOAD_PATH      – Path for temporary script files (defaults to OS tmpdir)
 *
 * Alternatively, supply GSL_CREDENTIALS_FILE pointing at a JSON file with
 * the same keys (camelCase).
 */

import * as fs from "fs";
import * as os from "os";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import {
    ToolOrchestrator,
    ToolOrchestratorDeps,
    LoginCredentials,
    GameInstance,
} from "../toolOrchestrator.js";
import { TOOL_DEFINITIONS, createMcpToolHandler } from "./mcpTools.js";

// ---------------------------------------------------------------------------
// Credential loading
// ---------------------------------------------------------------------------

interface CredentialsFile {
    account?: string;
    password?: string;
    devInstance?: string;
    devCharacter?: string;
    primeInstance?: string;
    primeCharacter?: string;
    shatteredInstance?: string;
    shatteredCharacter?: string;
    platinumInstance?: string;
    platinumCharacter?: string;
    testInstance?: string;
    testCharacter?: string;
    author?: string;
    downloadPath?: string;
}

interface InstanceConfig {
    envInstance: string;
    envCharacter: string;
    fileInstance: keyof CredentialsFile;
    fileCharacter: keyof CredentialsFile;
}

const INSTANCE_CONFIGS: Record<GameInstance, InstanceConfig> = {
    dev: {
        envInstance: "GSL_DEV_INSTANCE",
        envCharacter: "GSL_DEV_CHARACTER",
        fileInstance: "devInstance",
        fileCharacter: "devCharacter",
    },
    prime: {
        envInstance: "GSL_PRIME_INSTANCE",
        envCharacter: "GSL_PRIME_CHARACTER",
        fileInstance: "primeInstance",
        fileCharacter: "primeCharacter",
    },
    shattered: {
        envInstance: "GSL_SHATTERED_INSTANCE",
        envCharacter: "GSL_SHATTERED_CHARACTER",
        fileInstance: "shatteredInstance",
        fileCharacter: "shatteredCharacter",
    },
    platinum: {
        envInstance: "GSL_PLATINUM_INSTANCE",
        envCharacter: "GSL_PLATINUM_CHARACTER",
        fileInstance: "platinumInstance",
        fileCharacter: "platinumCharacter",
    },
    test: {
        envInstance: "GSL_TEST_INSTANCE",
        envCharacter: "GSL_TEST_CHARACTER",
        fileInstance: "testInstance",
        fileCharacter: "testCharacter",
    },
};

function loadCredentials(): {
    credentials: Map<GameInstance, LoginCredentials>;
    author: string | undefined;
    downloadPath: string;
} {
    let file: CredentialsFile = {};
    const credFilePath = process.env.GSL_CREDENTIALS_FILE;
    if (credFilePath && fs.existsSync(credFilePath)) {
        try {
            file = JSON.parse(fs.readFileSync(credFilePath, "utf8"));
        } catch (e) {
            console.error(
                `[gsl-mcp] Failed to parse credentials file: ${e instanceof Error ? e.message : e}`,
            );
        }
    }

    const account = process.env.GSL_ACCOUNT ?? file.account;
    const password = process.env.GSL_PASSWORD ?? file.password;

    const author = process.env.GSL_AUTHOR ?? file.author;
    const downloadPath =
        process.env.GSL_DOWNLOAD_PATH ?? file.downloadPath ?? os.tmpdir();

    const credentials = new Map<GameInstance, LoginCredentials>();

    if (account && password) {
        for (const [key, cfg] of Object.entries(INSTANCE_CONFIGS)) {
            const instance =
                process.env[cfg.envInstance] ??
                (file[cfg.fileInstance] as string | undefined);
            const character =
                process.env[cfg.envCharacter] ??
                (file[cfg.fileCharacter] as string | undefined);
            if (instance && character) {
                credentials.set(key as GameInstance, {
                    account,
                    password,
                    instance,
                    character,
                });
            }
        }
    }

    return { credentials, author, downloadPath };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
    const { credentials, author, downloadPath } = loadCredentials();

    const deps: ToolOrchestratorDeps = {
        getCredentials: async (instance) => credentials.get(instance),
        getCurrentAuthor: () => author,
        getDownloadLocation: () => downloadPath,
        console: {
            log: (...args: any[]) => console.error("[gsl-mcp]", ...args),
        },
    };

    const orchestrator = new ToolOrchestrator(deps);

    // Build handler lookup
    const handlers = new Map<
        string,
        (args: Record<string, unknown>) => Promise<{
            content: Array<{ type: "text"; text: string }>;
            isError?: boolean;
        }>
    >();
    for (const def of TOOL_DEFINITIONS) {
        handlers.set(def.name, createMcpToolHandler(def.name, orchestrator));
    }

    const server = new Server(
        { name: "gsl-tools", version: "1.0.0" },
        { capabilities: { tools: {} } },
    );

    // tools/list
    server.setRequestHandler(ListToolsRequestSchema, async () => ({
        tools: TOOL_DEFINITIONS.map((def) => ({
            name: def.name,
            description: def.description,
            inputSchema: def.inputSchema,
        })),
    }));

    // tools/call
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
        const { name, arguments: args } = request.params;
        const handler = handlers.get(name);
        if (!handler) {
            return {
                content: [
                    { type: "text" as const, text: `Unknown tool: ${name}` },
                ],
                isError: true,
            };
        }
        return handler(args ?? {});
    });

    // Start stdio transport
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("[gsl-mcp] Server started on stdio");
}

main().catch((err) => {
    console.error("[gsl-mcp] Fatal error:", err);
    process.exit(1);
});
