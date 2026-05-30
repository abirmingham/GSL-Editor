import { describe, it, expect } from "vitest";
import {
    parseScreamerInfo,
    buildDiscordMessages,
    parseBugInfo,
    buildBugDiscordMessages,
} from "../src/investigationPool";

describe("parseScreamerInfo", () => {
    it("extracts script number, player, and error from standard screamer lines", () => {
        const lines = [
            "GM-[SCR*ERR](Current Script: 19000) (Flags: 0x400000) (RM#: 5012) (NPC#: 0) (OBJ#: 0)",
            ".",
            "OVERFLOWED token stack near line 482",
            "NP0=Thandril NP1=a rusty sword",
        ];
        const info = parseScreamerInfo(lines);
        expect(info.scriptNum).toBe("19000");
        expect(info.playerName).toBe("Thandril");
        expect(info.errorMessage).toBe("OVERFLOWED token stack near line 482");
    });

    it("extracts script number without error when no dot-separator line", () => {
        const lines = [
            "GM-[SCR*ERR](Current Script: 22100) (Flags: 0x0) (RM#: 3001) (NPC#: 0) (OBJ#: 0)",
            "NP0=Korvain",
        ];
        const info = parseScreamerInfo(lines);
        expect(info.scriptNum).toBe("22100");
        expect(info.playerName).toBe("Korvain");
        expect(info.errorMessage).toBe("");
    });

    it("skips error if candidate is another GM-[SCR*ERR] line", () => {
        const lines = [
            "GM-[SCR*ERR](Current Script: 15500) (Flags: 0x0) (RM#: 100) (NPC#: 0) (OBJ#: 0)",
            ".",
            "GM-[SCR*ERR](Current Script: 15501) (Flags: 0x0) (RM#: 100) (NPC#: 0) (OBJ#: 0)",
            "NP0=Zareth",
        ];
        const info = parseScreamerInfo(lines);
        expect(info.scriptNum).toBe("15500");
        expect(info.playerName).toBe("Zareth");
        expect(info.errorMessage).toBe("");
    });

    it("returns empty fields when no relevant lines exist", () => {
        const lines = ["Some unrelated log line", "Another line with nothing useful"];
        const info = parseScreamerInfo(lines);
        expect(info.scriptNum).toBe("");
        expect(info.playerName).toBe("");
        expect(info.errorMessage).toBe("");
    });
});

describe("buildDiscordMessages (screamer)", () => {
    it("builds full detail with script, error, and player", () => {
        const result = buildDiscordMessages(
            {
                scriptNum: "19000",
                playerName: "Thandril",
                errorMessage: "stack overflow at line 42",
            },
            "GS4 Prime",
        );
        expect(result.announcement).toBe(
            "😱 **GS4 Prime** Screamer\n\ns19000 — `stack overflow at line 42`; `NP0=Thandril`\n",
        );
        expect(result.threadName).toBe("😱﹕s19000 — stack overflow at line 42; NP0=Thandril");
    });

    it("builds detail with script only when no error or player", () => {
        const result = buildDiscordMessages(
            { scriptNum: "12345", playerName: "", errorMessage: "" },
            "GS4 Dev",
        );
        expect(result.announcement).toBe("😱 **GS4 Dev** Screamer\n\ns12345\n");
        expect(result.threadName).toBe("😱﹕s12345");
    });

    it("falls back to Investigation when all fields empty", () => {
        const result = buildDiscordMessages(
            { scriptNum: "", playerName: "", errorMessage: "" },
            "GS4 Prime",
        );
        expect(result.announcement).toBe("😱 **GS4 Prime** Screamer\n\nInvestigation\n");
        expect(result.threadName).toBe("😱﹕Investigation");
    });
});

describe("parseBugInfo", () => {
    it("parses GM titled format with {monitor}", () => {
        const lines = [
            'GM[BUG] Zephyra (5551234) submitted a bug report titled "Potion of speed broken" with the details:  Drank potion but got no speed buff {monitor}',
        ];
        const info = parseBugInfo(lines);
        expect(info.playerName).toBe("Zephyra");
        expect(info.title).toBe("Potion of speed broken");
        expect(info.details).toBe("Drank potion but got no speed buff");
    });

    it("parses GM titled format without {monitor} (truncated)", () => {
        const lines = [
            'GM[BUG] Korvan (8887654) submitted a bug report titled "Delayed spell cast" with the details:  Cast a bolt spell and nothing happened for 30 seconds then it hit twice',
        ];
        const info = parseBugInfo(lines);
        expect(info.playerName).toBe("Korvan");
        expect(info.title).toBe("Delayed spell cast");
        expect(info.details).toBe(
            "Cast a bolt spell and nothing happened for 30 seconds then it hit twice",
        );
    });

    it("parses item format with script and {monitor}", () => {
        const lines = [
            "[BUG] Thandril submitted a bug report for a gleaming silver amulet (#999888, s20100, ss0) with the details:  Amulet shows wrong description when worn {monitor}",
        ];
        const info = parseBugInfo(lines);
        expect(info.playerName).toBe("Thandril");
        expect(info.title).toBe("s20100 - a gleaming silver amulet");
        expect(info.details).toBe("Amulet shows wrong description when worn");
    });

    it("parses item format without {monitor} (truncated)", () => {
        const lines = [
            "[BUG] Maeris submitted a bug report for an ornate wooden chest (#1234567, s18200, ss24000) with the details:  Chest cannot be opened after lockpick succeeds",
        ];
        const info = parseBugInfo(lines);
        expect(info.playerName).toBe("Maeris");
        expect(info.title).toBe("s18200 - an ornate wooden chest");
        expect(info.details).toBe("Chest cannot be opened after lockpick succeeds");
    });

    it("returns empty fields when no bug line matches", () => {
        const lines = ["Some random log output", "No bug report here"];
        const info = parseBugInfo(lines);
        expect(info.playerName).toBe("");
        expect(info.title).toBe("");
        expect(info.details).toBe("");
    });

    it("matches first bug line when multiple are present", () => {
        const lines = [
            'GM[BUG] Zareth (1112233) submitted a bug report titled "NPC stuck in wall" with the details:  Goblin spawned inside a wall {monitor}',
            "[BUG] Korvain submitted a bug report for a bent copper ring (#5555, s10000, ss0) with the details:  Ring vanished from inventory {monitor}",
        ];
        const info = parseBugInfo(lines);
        expect(info.playerName).toBe("Zareth");
        expect(info.title).toBe("NPC stuck in wall");
    });
});

describe("buildBugDiscordMessages", () => {
    it("builds announcement and thread name with title and player", () => {
        const result = buildBugDiscordMessages(
            { playerName: "Zephyra", title: "Potion of speed broken", details: "..." },
            "GS4 Prime",
        );
        expect(result.announcement).toBe(
            "🪲 **GS4 Prime** Bug Report\n\n**Potion of speed broken** (Zephyra)\n",
        );
        expect(result.threadName).toBe("🪲﹕Zephyra — Potion of speed broken");
    });

    it("falls back to generic Bug Report when no info parsed", () => {
        const result = buildBugDiscordMessages(
            { playerName: "", title: "", details: "" },
            "GS4 Dev",
        );
        expect(result.announcement).toBe("🪲 **GS4 Dev** Bug Report\n\nBug Report\n");
        expect(result.threadName).toBe("🪲﹕Bug Report");
    });
});
