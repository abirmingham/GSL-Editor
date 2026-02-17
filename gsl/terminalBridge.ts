/**
 * Terminal Bridge - HTTP server for MCP access to the Game Terminal
 * 
 * Provides a simple localhost HTTP API for reading/writing to the game terminal.
 * This allows external MCP servers to interact with the game.
 */

import * as http from 'http'
import { GameTerminal } from './gameTerminal'

const DEFAULT_PORT = 19532  // GSL in phone digits

export interface TerminalBridgeOptions {
    port?: number
}

export class TerminalBridge {
    private server: http.Server | null = null
    private gameTerminal: () => GameTerminal | undefined
    private port: number

    constructor(
        getGameTerminal: () => GameTerminal | undefined,
        options: TerminalBridgeOptions = {}
    ) {
        this.gameTerminal = getGameTerminal
        this.port = options.port ?? DEFAULT_PORT
    }

    start(): Promise<number> {
        return new Promise((resolve, reject) => {
            this.server = http.createServer((req, res) => {
                this.handleRequest(req, res)
            })

            this.server.on('error', (err: NodeJS.ErrnoException) => {
                if (err.code === 'EADDRINUSE') {
                    reject(new Error(`MCP bridge port ${this.port} is already in use. Another VS Code window may have the bridge running.`))
                } else {
                    reject(err)
                }
            })

            this.server.on('listening', () => {
                resolve(this.port)
            })

            this.server.listen(this.port, '127.0.0.1')
        })
    }

    stop(): Promise<void> {
        return new Promise((resolve) => {
            if (this.server) {
                this.server.close(() => resolve())
                this.server = null
            } else {
                resolve()
            }
        })
    }

    getPort(): number {
        return this.port
    }

    isRunning(): boolean {
        return this.server !== null
    }

    private handleRequest(req: http.IncomingMessage, res: http.ServerResponse) {
        // Set CORS headers for local development
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Content-Type', 'application/json')

        const url = new URL(req.url || '/', `http://localhost:${this.port}`)

        if (req.method === 'GET' && url.pathname === '/read') {
            this.handleRead(url, res)
        } else if (req.method === 'POST' && url.pathname === '/write') {
            this.handleWrite(req, res)
        } else if (req.method === 'GET' && url.pathname === '/status') {
            this.handleStatus(res)
        } else {
            res.statusCode = 404
            res.end(JSON.stringify({ error: 'Not found' }))
        }
    }

    private handleRead(url: URL, res: http.ServerResponse) {
        const terminal = this.gameTerminal()
        if (!terminal) {
            res.statusCode = 503
            res.end(JSON.stringify({ error: 'Terminal not available' }))
            return
        }

        const lines = parseInt(url.searchParams.get('lines') || '100', 10)
        const output = terminal.getRecentOutput(lines)

        res.statusCode = 200
        res.end(JSON.stringify({
            connected: terminal.isConnected(),
            lines: output
        }))
    }

    private handleWrite(req: http.IncomingMessage, res: http.ServerResponse) {
        const terminal = this.gameTerminal()
        if (!terminal) {
            res.statusCode = 503
            res.end(JSON.stringify({ error: 'Terminal not available' }))
            return
        }

        if (!terminal.isConnected()) {
            res.statusCode = 503
            res.end(JSON.stringify({ error: 'Terminal not connected to game' }))
            return
        }

        let body = ''
        req.on('data', chunk => { body += chunk })
        req.on('end', () => {
            try {
                const { command } = JSON.parse(body)
                if (typeof command !== 'string') {
                    res.statusCode = 400
                    res.end(JSON.stringify({ error: 'Missing command' }))
                    return
                }

                const success = terminal.sendCommand(command)
                res.statusCode = success ? 200 : 500
                res.end(JSON.stringify({ success }))
            } catch (e) {
                res.statusCode = 400
                res.end(JSON.stringify({ error: 'Invalid JSON' }))
            }
        })
    }

    private handleStatus(res: http.ServerResponse) {
        const terminal = this.gameTerminal()
        res.statusCode = 200
        res.end(JSON.stringify({
            available: Boolean(terminal),
            connected: terminal?.isConnected() ?? false
        }))
    }
}
