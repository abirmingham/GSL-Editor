# AGENTS.md

## Project: GSL Investigator

### After Making Changes

1. **Format code**: Run `npm run format` to apply Prettier formatting.
2. **Lint code**: Run `npm run lint:fix` to auto-fix ESLint issues.
3. **Check for remaining lint warnings**: Run `npm run lint` and address any errors (warnings for `no-explicit-any` and `no-unused-vars` are acceptable if justified).
4. **Type-check**: Run `npx tsc --noEmit` to verify TypeScript compilation passes.
5. **Run tests**: Run `npx vitest run` to ensure all tests pass.

### Code Style

- TypeScript source lives in `src/` and `main.ts`. Tests live in `tests/`.
- Compiled `.js` and `.js.map` files in the root and `src/` are build artifacts — do not edit them directly.
- Use `const` over `let` wherever possible.
- Prefix intentionally unused variables with `_` (e.g., `_unused`).

### Architecture Notes

- `main.ts` is the entry point; it wires together the Discord listener, investigation pool, and game task systems.
- `src/investigationPool.ts` manages concurrent investigations with rate limiting.
- `src/codexClient.ts` interfaces with the LLM/Codex API.
- `src/splitContent.ts` handles splitting long messages for Discord (2000-char limit). It must preserve code fence integrity across chunks.
- `src/gsl/` contains game-specific protocol clients (EAccess auth, SAL parsing, server connections).
- `src/discordListener.ts` handles Discord events and routes them to investigations.
- `src/gitWorktree.ts` manages git worktrees for parallel investigations.
- `src/mcpClient.ts` manages the MCP (Model Context Protocol) tool server connection.
- `sandbox/` contains test data and git worktree working directories — do not commit changes there.
- `tmp/` contains runtime artifacts (logs, investigations) — ephemeral, not committed.

### Testing

- Tests use Vitest. Add tests in `tests/` with the `.test.ts` suffix.
- Focus tests on functions with non-trivial logic that could break silently (parsers, splitters, rate limiters, protocol handlers).
- Do not mock external systems unnecessarily; test the outermost pure-logic boundary.
