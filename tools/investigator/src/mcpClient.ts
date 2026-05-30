import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

import { Logger } from "./logger";
import { resolveTilde } from "./util";

const TAG = "McpClient";

/** Build a filtered environment for the MCP subprocess (only necessary variables). */
function buildMcpEnv(config: McpClientConfig): Record<string, string> {
    const allowPrefixes = [
        "PATH",
        "HOME",
        "USER",
        "LANG",
        "LC_",
        "TERM",
        "SHELL",
        "TMPDIR",
        "XDG_",
        "NODE_",
    ];
    const env: Record<string, string> = {};
    for (const [key, value] of Object.entries(process.env)) {
        if (value === undefined) continue;
        if (allowPrefixes.some((p) => key.startsWith(p))) {
            env[key] = value;
        }
    }
    env.GSL_PASSWORD = config.gslPassword;
    env.GSL_DOWNLOAD_PATH = resolveTilde(config.gslDownloadPath);
    env.GSL_LOGIN_CONFIG_FILE = resolveTilde(config.gslMcpLoginConfigFile);
    return env;
}

export interface McpClientConfig {
    mcpServerPath: string;
    gslPassword: string;
    gslDownloadPath: string;
    gslMcpLoginConfigFile: string;
}

let client: Client | null = null;
let transport: StdioClientTransport | null = null;
let lastConfig: McpClientConfig | null = null;
let lastLogger: Logger | null = null;

export async function connectMcp(config: McpClientConfig, logger: Logger): Promise<void> {
    if (client) {
        logger.info(TAG, "Already connected.");
        return;
    }

    lastConfig = config;
    lastLogger = logger;

    logger.info(TAG, `Connecting to MCP server at: ${config.mcpServerPath}`);

    const resolvedPath = resolveTilde(config.mcpServerPath);

    transport = new StdioClientTransport({
        command: "node",
        args: [resolvedPath],
        env: buildMcpEnv(config),
        stderr: "pipe",
    });

    client = new Client({
        name: "gs4-investigator",
        version: "1.0.0",
    });

    await client.connect(transport);
    logger.info(TAG, "Connected to MCP server.");
}

export async function disconnectMcp(logger: Logger): Promise<void> {
    if (transport) {
        await transport.close();
        transport = null;
        client = null;
        logger.info(TAG, "Disconnected from MCP server.");
    }
}

export async function callTool(
    toolName: string,
    args: Record<string, unknown>,
    logger: Logger,
): Promise<string> {
    if (!client) {
        // Attempt automatic reconnection if we have a prior config
        if (lastConfig && lastLogger) {
            logger.warn(TAG, "MCP client not connected — attempting reconnection...");
            try {
                await connectMcp(lastConfig, lastLogger);
            } catch (e: unknown) {
                logger.error(TAG, "MCP reconnection failed", e);
                throw new Error("MCP client not connected and reconnection failed");
            }
        } else {
            throw new Error("MCP client not connected");
        }
    }

    logger.info(TAG, `Calling tool: ${toolName} with args: ${JSON.stringify(args)}`);

    try {
        const result = await client!.callTool({ name: toolName, arguments: args });

        const textContent = (result.content as Array<{ type: string; text?: string }>)
            .filter((c) => c.type === "text")
            .map((c) => c.text ?? "")
            .join("\n");

        return textContent;
    } catch (e: unknown) {
        // If the call fails due to a transport error, try reconnecting once
        if (lastConfig && lastLogger) {
            logger.warn(TAG, `Tool call failed, attempting reconnection: ${e}`);
            client = null;
            transport = null;
            try {
                await connectMcp(lastConfig, lastLogger);
                const result = await client!.callTool({ name: toolName, arguments: args });
                const textContent = (result.content as Array<{ type: string; text?: string }>)
                    .filter((c) => c.type === "text")
                    .map((c) => c.text ?? "")
                    .join("\n");
                return textContent;
            } catch (retryErr: unknown) {
                logger.error(TAG, "Retry after reconnection also failed", retryErr);
                throw retryErr;
            }
        }
        throw e;
    }
}

export async function getExistenceData(
    existenceId: number,
    instance: string,
    logger: Logger,
): Promise<string> {
    return callTool("gsl_get_existence_data", { existenceId, instance }, logger);
}
