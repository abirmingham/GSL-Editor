import {
    AttachmentBuilder,
    Client,
    GatewayIntentBits,
    TextChannel,
    ThreadChannel,
    Message,
} from "discord.js";

import { formatForDiscord } from "./formatForDiscord";
import { Logger } from "./logger";
import { RateLimiter } from "./rateLimiter";
import { splitContent } from "./splitContent";

const TAG = "DiscordApi";

export class RateLimitError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "RateLimitError";
    }
}

export interface DiscordConfig {
    botToken: string;
    channelId: string;
    guildId: string;
}

export function loadDiscordConfig(): DiscordConfig {
    const botToken = process.env.DISCORD_BOT_TOKEN;
    const channelId = process.env.DISCORD_GENERAL_CHAT_CHANNEL_ID;
    const guildId = process.env.DISCORD_SERVER_ID;

    if (!botToken) throw new Error("DISCORD_BOT_TOKEN not set in environment");
    if (!channelId) throw new Error("DISCORD_GENERAL_CHAT_CHANNEL_ID not set in environment");
    if (!guildId) throw new Error("DISCORD_SERVER_ID not set in environment");

    return { botToken, channelId, guildId };
}

export class DiscordApi {
    private readonly client: Client;
    private readonly logger: Logger;
    private readonly config: DiscordConfig;
    private ready = false;
    private messageLimiter: RateLimiter | null = null;

    constructor(config: DiscordConfig, logger: Logger) {
        this.config = config;
        this.logger = logger;
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
            ],
        });
    }

    /** Set a rate limiter for outbound Discord messages. */
    setMessageRateLimiter(limiter: RateLimiter): void {
        this.messageLimiter = limiter;
    }

    /** Connect to the Discord gateway. Resolves once the client is ready. */
    async connect(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.client.once("clientReady", () => {
                this.ready = true;
                this.logger.info(TAG, `Logged in as ${this.client.user?.tag}`);
                resolve();
            });
            this.client.once("error", reject);
            this.client.login(this.config.botToken).catch(reject);
        });
    }

    /** Disconnect from the gateway. */
    async disconnect(): Promise<void> {
        this.client.destroy();
        this.ready = false;
        this.logger.info(TAG, "Disconnected.");
    }

    /** Get the underlying client for event handling (resume handler). */
    getClient(): Client {
        return this.client;
    }

    /** Send a message to the configured channel. Returns the message. */
    async sendMessage(content: string, channelId?: string): Promise<Message> {
        if (this.messageLimiter && !this.messageLimiter.canProceed()) {
            if (this.messageLimiter.shouldNotify()) {
                this.logger.warn(TAG, "Discord message rate limit reached for this hour.");
                const channel = channelId
                    ? await this.getTextChannelById(channelId)
                    : await this.getTextChannel();
                await channel.send(
                    "⚠️ **Rate limit reached:** Maximum Discord messages per hour hit. " +
                        "Suppressing further messages until the hour resets.",
                );
                this.messageLimiter.record();
            }
            this.logger.info(TAG, "Message suppressed — Discord message rate limit active.");
            throw new RateLimitError("Discord message rate limit reached");
        }
        if (this.messageLimiter) this.messageLimiter.record();
        const channel = channelId
            ? await this.getTextChannelById(channelId)
            : await this.getTextChannel();
        return channel.send(content);
    }

    /** Create a thread on an existing message. Returns the thread. */
    async createThreadOnMessage(message: Message, name: string): Promise<ThreadChannel> {
        return message.startThread({
            name: name.slice(0, 100),
            autoArchiveDuration: 1440,
        });
    }

    /**
     * Fetch recent messages from a thread, ordered oldest-first.
     * Skips messages from the bot itself and the pinned context message.
     * Returns up to `limit` messages (default 20).
     */
    async fetchThreadMessages(
        thread: ThreadChannel,
        afterMessageId?: string,
        limit = 20,
    ): Promise<{ id: string; author: string; content: string; timestamp: Date }[]> {
        const options: { limit: number; after?: string } = { limit };
        if (afterMessageId) {
            options.after = afterMessageId;
        }
        const messages = await thread.messages.fetch(options);
        const botId = this.client.user?.id;
        return [...messages.values()]
            .filter((m) => m.author.id !== botId)
            .reverse() // oldest first
            .map((m) => ({
                id: m.id,
                author: m.author.displayName || m.author.username,
                content: m.content,
                timestamp: m.createdAt,
            }));
    }

    /** Send a message in a thread, chunking if over 2000 chars. */
    async sendThreadMessage(thread: ThreadChannel, content: string): Promise<void> {
        if (this.messageLimiter && !this.messageLimiter.canProceed()) {
            if (this.messageLimiter.shouldNotify()) {
                this.logger.warn(TAG, "Discord message rate limit reached for this hour.");
                await thread.send(
                    "⚠️ **Rate limit reached:** Maximum Discord messages per hour hit. " +
                        "Suppressing further messages until the hour resets.",
                );
                this.messageLimiter.record();
            } else {
                this.logger.info(
                    TAG,
                    "Thread message suppressed — Discord message rate limit active.",
                );
            }
            throw new RateLimitError("Discord message rate limit reached");
        }
        const formatted = formatForDiscord(content);
        const chunks = splitContent(formatted, 2000);
        for (const chunk of chunks) {
            if (this.messageLimiter) this.messageLimiter.record();
            await thread.send(chunk);
        }
    }

    /** Upload a file to a thread. */
    async sendThreadFile(thread: ThreadChannel, filename: string, content: string): Promise<void> {
        if (this.messageLimiter && !this.messageLimiter.canProceed()) {
            if (this.messageLimiter.shouldNotify()) {
                this.logger.warn(TAG, "Discord message rate limit reached for this hour.");
                await thread.send(
                    "⚠️ **Rate limit reached:** Maximum Discord messages per hour hit. " +
                        "Suppressing further messages until the hour resets.",
                );
                this.messageLimiter.record();
            } else {
                this.logger.info(
                    TAG,
                    "Thread file suppressed — Discord message rate limit active.",
                );
            }
            throw new RateLimitError("Discord message rate limit reached");
        }
        if (this.messageLimiter) this.messageLimiter.record();
        const attachment = new AttachmentBuilder(Buffer.from(content, "utf-8"), {
            name: filename,
        });
        await thread.send({ files: [attachment] });
    }

    /** Send a message to an arbitrary text channel by ID. Returns the message. */
    async sendToChannel(channelId: string, content: string): Promise<void> {
        if (!this.ready) {
            throw new Error("Discord client not ready — call connect() first");
        }
        if (this.messageLimiter && !this.messageLimiter.canProceed()) {
            if (this.messageLimiter.shouldNotify()) {
                this.logger.warn(TAG, "Discord message rate limit reached for this hour.");
            }
            this.logger.info(TAG, "sendToChannel suppressed — Discord message rate limit active.");
            throw new RateLimitError("Discord message rate limit reached");
        }
        const channel = await this.client.channels.fetch(channelId);
        if (!channel || !(channel instanceof TextChannel)) {
            throw new Error(`Channel ${channelId} is not a text channel`);
        }
        const chunks = splitContent(content, 2000);
        for (const chunk of chunks) {
            if (this.messageLimiter) this.messageLimiter.record();
            await channel.send(chunk);
        }
    }

    private async getTextChannel(): Promise<TextChannel> {
        return this.getTextChannelById(this.config.channelId);
    }

    private async getTextChannelById(channelId: string): Promise<TextChannel> {
        if (!this.ready) {
            throw new Error("Discord client not ready — call connect() first");
        }
        const channel = await this.client.channels.fetch(channelId);
        if (!channel || !(channel instanceof TextChannel)) {
            throw new Error(`Channel ${channelId} is not a text channel`);
        }
        return channel;
    }
}
