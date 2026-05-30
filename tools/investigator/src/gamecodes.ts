/** Human-readable names for each game instance. */
export const GAMECODE_NAMES: Record<string, string> = {
    GS4: "GS4 Prime",
    GS4D: "GS4 Development",
    GST: "GS4 Test",
    GSF: "GS4 Shattered",
    GS4X: "GS4 Platinum",
};

/** Maps GAMECODE values to MCP instance parameter values. */
export const GAMECODE_TO_MCP: Record<string, string> = {
    GS4: "prime",
    GS4D: "dev",
    GST: "test",
    GSF: "shattered",
    GS4X: "platinum",
};

/** Maps GAMECODE values to EACCESS login protocol codes. */
export const GAMECODE_TO_EACCESS: Record<string, string> = {
    GS4: "GS3", // Prime uses legacy EACCESS code
    GS4D: "GS4D",
    GST: "GST",
    GSF: "GSF",
    GS4X: "GSX", // Platinum: runtime is GS4X, EACCESS is GSX
};

export function gamecodeToMcp(gamecode: string): string {
    return GAMECODE_TO_MCP[gamecode] ?? "dev";
}

export function gamecodeToEaccess(gamecode: string): string {
    return GAMECODE_TO_EACCESS[gamecode] ?? gamecode;
}

export function gamecodeName(gamecode: string): string {
    return GAMECODE_NAMES[gamecode] ?? gamecode;
}
