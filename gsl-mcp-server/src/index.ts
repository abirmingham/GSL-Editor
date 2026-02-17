#!/usr/bin/env node
/**
 * GSL MCP Server
 * 
 * A minimal MCP server that provides access to the GSL Editor's game terminal.
 * Communicates with the VS Code extension via a localhost HTTP bridge.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const BRIDGE_PORT = parseInt(process.env.GSL_BRIDGE_PORT || "19532", 10);
const BRIDGE_URL = `http://127.0.0.1:${BRIDGE_PORT}`;

/**
 * Read recent output from the game terminal
 */
async function readTerminal(lines: number = 100): Promise<{ connected: boolean; lines: string[] }> {
  const response = await fetch(`${BRIDGE_URL}/read?lines=${lines}`);
  if (!response.ok) {
    const error = await response.json() as { error: string };
    throw new Error(error.error || `HTTP ${response.status}`);
  }
  return response.json() as Promise<{ connected: boolean; lines: string[] }>;
}

/**
 * Get terminal status
 */
async function getStatus(): Promise<{ available: boolean; connected: boolean }> {
  const response = await fetch(`${BRIDGE_URL}/status`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json() as Promise<{ available: boolean; connected: boolean }>;
}

// Create the MCP server
const server = new Server(
  {
    name: "gsl-terminal",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "read_terminal",
        description: "Read recent output from the GSL game terminal. Returns the last N lines of terminal output.",
        inputSchema: {
          type: "object" as const,
          properties: {
            lines: {
              type: "number",
              description: "Number of lines to read (default: 100, max: 1000)",
              default: 100,
            },
          },
          required: [],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "read_terminal") {
    try {
      const lines = Math.min(Math.max((args?.lines as number) || 100, 1), 1000);
      const result = await readTerminal(lines);
      
      return {
        content: [
          {
            type: "text" as const,
            text: JSON.stringify({
              connected: result.connected,
              lineCount: result.lines.length,
              output: result.lines.join("\n"),
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      // Check if terminal bridge is available
      try {
        const status = await getStatus();
        if (!status.available) {
          return {
            content: [
              {
                type: "text" as const,
                text: "Game terminal is not open. Use 'GSL: Open Game Terminal' command in VS Code first.",
              },
            ],
            isError: true,
          };
        }
      } catch {
        return {
          content: [
            {
              type: "text" as const,
              text: "Cannot connect to GSL Editor. Make sure VS Code with GSL extension is running.",
            },
          ],
          isError: true,
        };
      }

      return {
        content: [
          {
            type: "text" as const,
            text: `Error reading terminal: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }

  return {
    content: [
      {
        type: "text" as const,
        text: `Unknown tool: ${name}`,
      },
    ],
    isError: true,
  };
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("GSL MCP Server running on stdio");
}

main().catch(console.error);
