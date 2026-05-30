import * as fs from "fs";
import * as path from "path";

export interface Logger {
    info(tag: string, message: string): void;
    warn(tag: string, message: string): void;
    error(tag: string, message: string, err?: unknown): void;
    close(): void;
}

export function createLogger(errorFilePath?: string): Logger {
    let errorStream: fs.WriteStream | undefined;
    if (errorFilePath) {
        fs.mkdirSync(path.dirname(errorFilePath), { recursive: true });
        errorStream = fs.createWriteStream(errorFilePath, { flags: "a" });
    }

    function formatError(err: unknown): string {
        if (err instanceof Error) {
            return err.stack ?? err.message;
        }
        return String(err);
    }

    return {
        info(tag, message) {
            const line = `[${tag}] ${message}`;
            console.log(line);
        },

        warn(tag, message) {
            const ts = new Date().toISOString();
            const line = `[${tag}] WARN: ${message}`;
            console.warn(line);
            errorStream?.write(`${ts} ${line}\n`);
        },

        error(tag, message, err?) {
            const ts = new Date().toISOString();
            const errDetail = err ? ` — ${formatError(err)}` : "";
            const line = `[${tag}] ERROR: ${message}${errDetail}`;
            console.error(line);
            errorStream?.write(`${ts} ${line}\n`);
        },

        close() {
            errorStream?.end();
        },
    };
}
