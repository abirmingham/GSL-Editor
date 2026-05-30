import { resolveTilde } from "./util";

export interface Config {
    botWorkingTmpDir: string;
    logDir: string;
    resultsDir: string;
    maxLogSizeBytes: number;
    dedupCooldownMs: number;
    maxConcurrentInvestigations: number;
    codexWorkdir: string;
    character: string;
    account: string;
    mcpServerPath: string;
    gslPassword: string;
    gslDownloadPath: string;
    gslMcpLoginConfigFile: string;
    instance: string;
    codexModel: string | undefined;
    codexReasoningEffort: string;
    maxInvestigationsPerHour: number;
    maxDiscordMessagesPerHour: number;
    worktreeBaseDir: string;
    agentHandlerRoleId: string | undefined;
}

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

function envInt(name: string): number {
    const raw = requireEnv(name);
    const parsed = parseInt(raw, 10);
    if (isNaN(parsed)) {
        throw new Error(`Environment variable ${name} must be an integer, got: "${raw}"`);
    }
    return parsed;
}

function envIntOptional(name: string, defaultValue: number): number {
    const raw = process.env[name];
    if (!raw) return defaultValue;
    const parsed = parseInt(raw, 10);
    if (isNaN(parsed)) {
        throw new Error(`Environment variable ${name} must be an integer, got: "${raw}"`);
    }
    return parsed;
}

export function loadConfig(): Config {
    const botWorkingTmpDir = resolveTilde(requireEnv("BOT_WORKING_TMP_DIRECTORY"));
    return {
        botWorkingTmpDir,
        logDir: `${botWorkingTmpDir}/game-logs`,
        resultsDir: `${botWorkingTmpDir}/investigations`,
        maxLogSizeBytes: envInt("INVESTIGATOR_MAX_LOG_SIZE_BYTES"),
        dedupCooldownMs: envInt("INVESTIGATOR_DEDUP_COOLDOWN_MS"),
        maxConcurrentInvestigations: envInt("INVESTIGATOR_MAX_CONCURRENT"),
        codexWorkdir: `${botWorkingTmpDir}/codex-workdir`,
        character: requireEnv("GS4_CHARACTER"),
        account: requireEnv("GS4_ACCOUNT"),
        mcpServerPath: requireEnv("GSL_MCP_SERVER_PATH"),
        gslPassword: requireEnv("GSL_PASSWORD"),
        gslDownloadPath: `${botWorkingTmpDir}/gsl-downloads`,
        gslMcpLoginConfigFile: requireEnv("GSL_MCP_LOGIN_CONFIG_FILE"),
        instance: requireEnv("GS4_GAMECODE"),
        codexModel: process.env.CODEX_DEFAULT_MODEL || undefined,
        codexReasoningEffort: process.env.CODEX_REASONING_EFFORT || "low",
        maxInvestigationsPerHour: envIntOptional("INVESTIGATOR_MAX_INVESTIGATIONS_PER_HOUR", 10),
        maxDiscordMessagesPerHour: envIntOptional(
            "INVESTIGATOR_MAX_DISCORD_MESSAGES_PER_HOUR",
            250,
        ),
        worktreeBaseDir: `${botWorkingTmpDir}/worktrees`,
        agentHandlerRoleId: process.env.DISCORD_AGENT_HANDLER_ROLE_ID || undefined,
    };
}
