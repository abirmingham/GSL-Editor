#!/usr/bin/env node

/**
 * GSL MCP Server
 *
 * Exposes GSL Editor tooling over the Model Context Protocol (MCP) so that
 * non-VS-Code agent harnesses (Claude Code, Codex CLI, etc.) can query
 * the game server.
 *
 * Configuration is via environment variables:
 *   GSL_DEV_ACCOUNT     – Play.net account name
 *   GSL_DEV_PASSWORD     – Play.net password
 *   GSL_DEV_INSTANCE     – Dev game code  (e.g. GS4D)
 *   GSL_DEV_CHARACTER    – Dev character name
 *   GSL_PRIME_INSTANCE   – Prime game code (e.g. GS3)
 *   GSL_PRIME_CHARACTER  – Prime character name
 *   GSL_AUTHOR           – Changelog author (e.g. AlexB/Nyxus)
 *   GSL_DOWNLOAD_PATH    – Path for temporary script files (defaults to OS tmpdir)
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
} from "../toolOrchestrator.js";
import { TOOL_DEFINITIONS, createMcpToolHandler } from "./mcpTools.js";

// ---------------------------------------------------------------------------
// Credential loading
// ---------------------------------------------------------------------------

interface CredentialsFile {
    devAccount?: string;
    devPassword?: string;
    devInstance?: string;
    devCharacter?: string;
    primeInstance?: string;
    primeCharacter?: string;
    author?: string;
    downloadPath?: string;
}

function loadCredentials(): {
    dev: LoginCredentials | undefined;
    prime: LoginCredentials | undefined;
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

    const devAccount = process.env.GSL_DEV_ACCOUNT ?? file.devAccount;
    const devPassword = process.env.GSL_DEV_PASSWORD ?? file.devPassword;
    const devInstance = process.env.GSL_DEV_INSTANCE ?? file.devInstance;
    const devCharacter = process.env.GSL_DEV_CHARACTER ?? file.devCharacter;

    const primeInstance = process.env.GSL_PRIME_INSTANCE ?? file.primeInstance;
    const primeCharacter =
        process.env.GSL_PRIME_CHARACTER ?? file.primeCharacter;

    const author = process.env.GSL_AUTHOR ?? file.author;
    const downloadPath =
        process.env.GSL_DOWNLOAD_PATH ?? file.downloadPath ?? os.tmpdir();

    const dev =
        devAccount && devPassword && devInstance && devCharacter
            ? {
                  account: devAccount,
                  password: devPassword,
                  instance: devInstance,
                  character: devCharacter,
              }
            : undefined;

    const prime =
        devAccount && devPassword && primeInstance && primeCharacter
            ? {
                  account: devAccount,
                  password: devPassword,
                  instance: primeInstance,
                  character: primeCharacter,
              }
            : undefined;

    return { dev, prime, author, downloadPath };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
    const { dev, prime, author, downloadPath } = loadCredentials();

    const deps: ToolOrchestratorDeps = {
        getDevCredentials: async () => dev,
        getPrimeCredentials: async () => prime,
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
