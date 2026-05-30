/**
 * Extracts unique existence IDs from screamer context lines.
 *
 * Object references appear in variable lines such as:
 *   NO1=a dagger(676483) NO2=a dagger(676483) NO3=a rapier(676723)
 *   NE0=a kobold(812345) NE1=a troll(812500)
 *   NC0=a kobold(812345) NC1=a troll(812500)
 *
 * This extracts the numeric IDs in parentheses and deduplicates them.
 */
export function extractExistenceIds(contextLines: string[]): number[] {
    const ids = new Set<number>();

    // Match lines containing noun-object (NO), noun-event (NE), or noun-creature (NC) variables
    const varLinePattern = /\b(?:NO|NE|NC)\d+=/;

    for (const line of contextLines) {
        if (!varLinePattern.test(line)) continue;
        const matches = line.matchAll(/\((\d+)\)/g);
        for (const match of matches) {
            ids.add(parseInt(match[1], 10));
        }
    }

    return [...ids];
}

export interface ExistenceEntry {
    node: string;
    id: number;
}

/**
 * Like extractExistenceIds but also captures the first node variable name
 * (e.g. "NO1", "NE0") associated with each unique ID.
 */
export function extractExistenceEntries(contextLines: string[]): ExistenceEntry[] {
    const seen = new Map<number, string>();

    const varLinePattern = /\b(?:NO|NE|NC)\d+=/;
    const entryPattern = /\b((?:NO|NE|NC)\d+)=[^(]*\((\d+)\)/g;

    for (const line of contextLines) {
        if (!varLinePattern.test(line)) continue;
        for (const match of line.matchAll(entryPattern)) {
            const node = match[1];
            const id = parseInt(match[2], 10);
            if (!seen.has(id)) {
                seen.set(id, node);
            }
        }
    }

    return [...seen.entries()].map(([id, node]) => ({ node, id }));
}
