import { describe, it, expect } from "vitest";
import { extractExistenceIds } from "../src/screamerParser";

describe("extractExistenceIds", () => {
    it("extracts IDs from NO-style variable lines", () => {
        const lines = ["NO1=a dagger(676483) NO2=a rapier(676723)"];
        expect(extractExistenceIds(lines)).toEqual([676483, 676723]);
    });

    it("extracts IDs from NE-style variable lines", () => {
        const lines = ["NE0=a kobold(812345) NE1=a troll(812500)"];
        expect(extractExistenceIds(lines)).toEqual([812345, 812500]);
    });

    it("extracts IDs from NC-style variable lines", () => {
        const lines = ["NC0=a kobold(812345) NC1=a troll(812500)"];
        expect(extractExistenceIds(lines)).toEqual([812345, 812500]);
    });

    it("deduplicates IDs across lines", () => {
        const lines = ["NO1=a dagger(676483) NO2=a dagger(676483)", "NE0=a kobold(676483)"];
        expect(extractExistenceIds(lines)).toEqual([676483]);
    });

    it("deduplicates IDs within a single line", () => {
        const lines = ["NO1=a dagger(676483) NO2=a dagger(676483) NO3=a rapier(676723)"];
        expect(extractExistenceIds(lines)).toEqual([676483, 676723]);
    });

    it("returns empty array for empty input", () => {
        expect(extractExistenceIds([])).toEqual([]);
    });

    it("ignores lines without NO/NE/NC prefix", () => {
        const lines = [
            "You see a dagger(676483).",
            "ROOMDESC=A dark cave with a troll(812500)",
            "Some random text with numbers(999)",
        ];
        expect(extractExistenceIds(lines)).toEqual([]);
    });

    it("ignores lines with similar but non-matching patterns", () => {
        const lines = [
            "NOTICE=something(123)", // NOT NO/NE/NC followed by digit
            "NODE=something(456)", // NO prefix but wrong pattern (NO must be followed by digit then =)
        ];
        expect(extractExistenceIds(lines)).toEqual([]);
    });

    it("handles large IDs", () => {
        const lines = ["NO1=a relic(99999999)"];
        expect(extractExistenceIds(lines)).toEqual([99999999]);
    });

    it("handles mixed variable types on one line", () => {
        const lines = ["NO1=a dagger(100) NE0=a kobold(200) NC0=a spider(300)"];
        // Only one pattern needs to match per line — once the line passes
        // the varLinePattern test, all (digits) in parens are extracted
        expect(extractExistenceIds(lines).sort()).toEqual([100, 200, 300]);
    });

    it("ignores non-numeric content in parentheses", () => {
        const lines = ["NO1=a dagger(abc) NO2=a rapier(676723)"];
        expect(extractExistenceIds(lines)).toEqual([676723]);
    });

    it("ignores empty parentheses", () => {
        const lines = ["NO1=a dagger() NO2=a rapier(676723)"];
        expect(extractExistenceIds(lines)).toEqual([676723]);
    });

    it("handles IDs with leading zeros", () => {
        const lines = ["NO1=a thing(00123)"];
        expect(extractExistenceIds(lines)).toEqual([123]);
    });

    it("handles NO variable with no value after equals", () => {
        const lines = ["NO1= NO2=a dagger(555)"];
        expect(extractExistenceIds(lines)).toEqual([555]);
    });
});
