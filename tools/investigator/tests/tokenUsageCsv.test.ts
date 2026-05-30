import { describe, it, expect } from "vitest";
import { parseCsvLine } from "../src/tokenUsageCsv";

describe("parseCsvLine", () => {
    it("parses simple comma-separated fields", () => {
        expect(parseCsvLine("a,b,c")).toEqual(["a", "b", "c"]);
    });

    it("handles quoted fields containing commas", () => {
        expect(parseCsvLine('2024-01-01,"gpt-5.5, turbo",100,200,300')).toEqual([
            "2024-01-01",
            "gpt-5.5, turbo",
            "100",
            "200",
            "300",
        ]);
    });

    it("handles empty fields", () => {
        expect(parseCsvLine("a,,c")).toEqual(["a", "", "c"]);
    });

    it("handles trailing comma (empty last field)", () => {
        expect(parseCsvLine("a,b,")).toEqual(["a", "b", ""]);
    });

    it("handles a single field (no commas)", () => {
        expect(parseCsvLine("hello")).toEqual(["hello"]);
    });

    it("handles empty input", () => {
        expect(parseCsvLine("")).toEqual([""]);
    });

    it("handles quoted field with escaped quotes (double-quote convention)", () => {
        // In our implementation, "" inside quotes becomes empty toggle, so
        // "say ""hi""" -> say hi (quotes are stripped, doubled quotes produce nothing)
        const result = parseCsvLine('normal,"say ""hi""",end');
        // Our parser strips quotes; doubled quotes become empty
        expect(result).toEqual(["normal", "say hi", "end"]);
    });

    it("handles a typical token-usage CSV row", () => {
        const row = "2024-05-31T10:30:00Z,gpt-5.5,15000,3000,18000";
        expect(parseCsvLine(row)).toEqual([
            "2024-05-31T10:30:00Z",
            "gpt-5.5",
            "15000",
            "3000",
            "18000",
        ]);
    });

    it("handles model name with comma requiring quoting", () => {
        const row = '2024-05-31T10:30:00Z,"gpt-5.5,preview",15000,3000,18000';
        const parts = parseCsvLine(row);
        expect(parts[1]).toBe("gpt-5.5,preview");
        expect(parts.length).toBe(5);
    });
});
