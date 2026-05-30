import * as fs from "fs";
import * as os from "os";
import * as path from "path";

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function resolveTilde(p: string): string {
    return p.startsWith("~") ? path.join(os.homedir(), p.slice(1)) : p;
}

/**
 * Load environment variables from a .env file relative to the given directory.
 * Does not overwrite already-set variables.
 */
export function loadEnvFile(dir: string): void {
    const envPath = path.join(dir, ".env");
    if (!fs.existsSync(envPath)) return;
    const lines = fs.readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx < 0) continue;
        const key = trimmed.slice(0, eqIdx);
        let value = trimmed.slice(eqIdx + 1);
        // Strip surrounding quotes
        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }
        if (!process.env[key]) {
            process.env[key] = value;
        }
    }
}
