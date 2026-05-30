# Main Workflow

- Ensure .env is available / set (see dot_env_example)
- Ensure gsl-tools is available on codex cli (codex mcp list)
- Set up sandbox symlinks (requires GSL-Editor-Agents repo checked out as a sibling):
  ```
  ln -s ../../../../GSL-Editor-Agents/src/AGENTS.md sandbox/gsl-reference.md
  mkdir -p sandbox/.agents
  ln -s ../../../../../GSL-Editor-Agents/src/skills/ sandbox/.agents/skills
  ```
- Running the program: node main.js > main.out 2>&1
- Clearing all state: rm -rf tmp/*

# Subprocesses

In addition to main process, subprocesses will be spawned:
- Game runner
- MCP server (stdio MCP is a facade, a shared MCP stands behind that to synchronize character login pool)
