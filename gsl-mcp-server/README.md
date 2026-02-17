# GSL MCP Server

A minimal [Model Context Protocol](https://modelcontextprotocol.io/) server that provides access to the GSL Editor's game terminal.

## Architecture

```
┌─────────────────┐     HTTP      ┌──────────────────┐     stdio     ┌─────────────┐
│   VS Code +     │◄────────────►│  Terminal Bridge  │◄─────────────►│  MCP Client │
│  GSL Extension  │  localhost    │  (port 19532)    │               │  (Claude)   │
└─────────────────┘               └──────────────────┘               └─────────────┘
```

The GSL extension runs a small HTTP server on `localhost:19532` that exposes the game terminal output. This MCP server connects to that bridge and provides tools for MCP clients.

## Tools

### `read_terminal`
Read recent output from the game terminal.

**Parameters:**
- `lines` (optional, number): Number of lines to read (default: 100, max: 1000)

**Returns:**
- `connected`: Whether the terminal is connected to the game
- `lineCount`: Number of lines returned
- `output`: The terminal output as a string

## Setup

### 1. Build the MCP server
```bash
cd gsl-mcp-server
npm install
npm run build
```

### 2. Configure your MCP client

Add to your Claude Desktop config (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "gsl-terminal": {
      "command": "node",
      "args": ["C:/path/to/GSL-Editor/gsl-mcp-server/dist/index.js"]
    }
  }
}
```

### 3. Use the terminal

1. Open VS Code with the GSL extension
2. Run "GSL: Open Game Terminal" command
3. Connect to the game
4. Use the `read_terminal` tool from your MCP client

## Environment Variables

- `GSL_BRIDGE_PORT`: Override the default bridge port (default: 19532)

## Future Tools (Planned)

- `write_terminal`: Send commands to the game terminal
