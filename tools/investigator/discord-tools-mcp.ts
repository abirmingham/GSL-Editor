#!/usr/bin/env npx tsx
/**
 * Standalone MCP server that exposes Discord search/read tools to Codex.
 * Registered via: codex mcp add discord-tools node discord-tools-mcp.js
 *
 * Environment variables (set via --env on registration):
 *   DISCORD_BOT_TOKEN  - Bot token for REST API access
 *   DISCORD_SERVER_ID  - Guild ID to search within
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_SERVER_ID;

if (!BOT_TOKEN) {
    process.stderr.write("DISCORD_BOT_TOKEN not set\n");
    process.exit(1);
}
if (!GUILD_ID) {
    process.stderr.write("DISCORD_SERVER_ID not set\n");
    process.exit(1);
}

const BASE_URL = "https://discord.com/api/v10";

async function discordFetch(path: string): Promise<unknown> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { Authorization: `Bot ${BOT_TOKEN}` },
    });
    if (!res.ok) {
        const body = await res.text();
        throw new Error(`Discord API ${res.status}: ${body}`);
    }
    return res.json();
}

interface SearchMessage {
    id: string;
    content: string;
    author: { username: string; global_name?: string };
    timestamp: string;
    channel_id: string;
}

interface SearchResult {
    total_results: number;
    messages: SearchMessage[][];
}

interface Channel {
    id: string;
    name?: string;
    type: number;
}

// Channel name cache
const channelNameCache = new Map<string, string>();

function assertSnowflake(id: string, label: string): void {
    if (!/^\d+$/.test(id)) {
        throw new Error(`Invalid ${label}: must be a numeric snowflake`);
    }
}

async function getChannelName(channelId: string): Promise<string> {
    assertSnowflake(channelId, "channel_id");
    if (channelNameCache.has(channelId)) return channelNameCache.get(channelId)!;
    try {
        const ch = (await discordFetch(`/channels/${channelId}`)) as Channel;
        const name = ch.name || channelId;
        channelNameCache.set(channelId, name);
        return name;
    } catch {
        return channelId;
    }
}

function formatTimestamp(iso: string): string {
    const d = new Date(iso);
    return d
        .toISOString()
        .replace("T", " ")
        .replace(/\.\d+Z$/, " UTC");
}

// ─── MCP Server ──────────────────────────────────────────────────────────────

const server = new McpServer({
    name: "discord-tools",
    version: "1.0.0",
});

server.tool(
    "search_messages",
    "Search Discord messages in the guild by content, author, or channel. Returns matching messages with context. Use this to look up past conversations, recall what someone said, or find prior discussions about a topic.",
    {
        query: z.string().describe("Text to search for in message content"),
        channel_id: z.string().optional().describe("Limit search to a specific channel ID"),
        author_id: z
            .string()
            .optional()
            .describe("Limit search to messages from a specific user ID"),
        limit: z
            .number()
            .min(1)
            .max(25)
            .default(10)
            .describe("Max results to return (1-25, default 10)"),
    },
    async ({ query, channel_id, author_id, limit }) => {
        if (channel_id) assertSnowflake(channel_id, "channel_id");
        if (author_id) assertSnowflake(author_id, "author_id");
        const params = new URLSearchParams({ content: query });
        if (channel_id) params.set("channel_id", channel_id);
        if (author_id) params.set("author_id", author_id);
        if (limit) params.set("limit", String(limit));

        const data = (await discordFetch(
            `/guilds/${GUILD_ID}/messages/search?${params}`,
        )) as SearchResult;

        if (!data.messages || data.messages.length === 0) {
            return {
                content: [
                    {
                        type: "text" as const,
                        text: "No messages found. Note: Discord's search index has a delay — very recent messages (last few minutes) may not appear. Use read_channel_history to check recent messages in a specific channel.",
                    },
                ],
            };
        }

        const lines: string[] = [`Found ${data.total_results} result(s):\n`];

        for (const group of data.messages) {
            const msg = group[0]; // Primary hit
            if (!msg) continue;
            const channelName = await getChannelName(msg.channel_id);
            const author = msg.author.global_name || msg.author.username;
            const ts = formatTimestamp(msg.timestamp);
            const link = `https://discord.com/channels/${GUILD_ID}/${msg.channel_id}/${msg.id}`;
            lines.push(`[${ts}] @${author} in #${channelName} (${link}):`);
            lines.push(msg.content);
            lines.push("");
        }

        return { content: [{ type: "text" as const, text: lines.join("\n") }] };
    },
);

server.tool(
    "read_channel_history",
    "Read recent messages from a specific Discord channel or thread. Useful for catching up on recent conversation context.",
    {
        channel_id: z.string().describe("The channel or thread ID to read from"),
        limit: z
            .number()
            .min(1)
            .max(50)
            .default(20)
            .describe("Number of recent messages to fetch (1-50, default 20)"),
        before: z
            .string()
            .optional()
            .describe("Fetch messages before this message ID (for pagination)"),
    },
    async ({ channel_id, limit, before }) => {
        assertSnowflake(channel_id, "channel_id");
        if (before) assertSnowflake(before, "before");
        const params = new URLSearchParams({ limit: String(limit) });
        if (before) params.set("before", before);

        const messages = (await discordFetch(
            `/channels/${channel_id}/messages?${params}`,
        )) as SearchMessage[];

        if (!messages || messages.length === 0) {
            return { content: [{ type: "text" as const, text: "No messages found." }] };
        }

        // Messages come newest-first from API; reverse for chronological order
        const sorted = [...messages].reverse();
        const lines: string[] = [];

        for (const msg of sorted) {
            const author = msg.author.global_name || msg.author.username;
            const ts = formatTimestamp(msg.timestamp);
            const link = `https://discord.com/channels/${GUILD_ID}/${channel_id}/${msg.id}`;
            lines.push(`[${ts}] @${author} (${link}): ${msg.content}`);
        }

        return { content: [{ type: "text" as const, text: lines.join("\n") }] };
    },
);

// ─── Start ───────────────────────────────────────────────────────────────────

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    process.stderr.write("discord-tools MCP server running on stdio\n");
}

main().catch((err) => {
    process.stderr.write(`Fatal: ${err}\n`);
    process.exit(1);
});
