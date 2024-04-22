import * as fs from 'fs'
import * as path from 'path'
import { parse } from 'yaml'
import { window, workspace } from 'vscode'
import { EditorClientInterface } from './editorClient'

const CLIENT_COMMANDS_FILE = 'gsl_client_commands.yaml'
const PAUSE = '<pause>'

/** Defined as a list of objects in order to support ordering */
const BLANK_YAML = `
- Party:
  - jump
  - dance
  - jump
- Party in a restrained fashion:
  - jump
  - dance
  - ${PAUSE}
  - jump
`.trimStart()

export const editClientCommands = async (
    downloadFolder: string
): Promise<void> => {
    await window.showTextDocument(
        await workspace.openTextDocument(
            ensureCommandsFile(downloadFolder)
        ),
        { preview: false }
    )
}

const ensureCommandsFile = (downloadFolder: string): string => {
    const commandsFile = path.join(
        downloadFolder,
        CLIENT_COMMANDS_FILE
    )
    if (!fs.existsSync(commandsFile)) {
        fs.writeFileSync(commandsFile, BLANK_YAML)
    }
    return commandsFile
}

export const runClientCommands = async (
    downloadFolder: string,
    client: EditorClientInterface
): Promise<void> => {
    // Read config file
    const operations: Record<string, string[]> = (
        parse(
            fs.readFileSync(ensureCommandsFile(downloadFolder)).toString()
        ) as Record<string, string[]>[]
    ).reduce((memo, operationObj) => {
        // Normalize from "ordered map" to object
        const keys = Object.keys(operationObj)
        if (keys.length !== 1) throw new Error("Invalid command config")
        memo[keys[0]] = operationObj[keys[0]]
        return memo
    }, {})

    // Identify operation to run
    const operation = await window.showQuickPick(
        Object.keys(operations),
        { title: "Choose an Operation" }
    )
    if (!operation) return

    // Execute commands as according to the user's wish
    const cmds = operations[operation]
    const labeledCmds = cmds.map((cmd, i) => `[${i}] ${cmd}`)
    let i = 0
    while (i < cmds.length) {
        const cmd = await window.showQuickPick(
            [...labeledCmds.slice(i), 'Cancel'],
            { title: "Choose Where to Start", ignoreFocusOut: true }
        )
        if (!cmd || cmd === 'Cancel') return
        i = Number(cmd.slice(1, cmd.indexOf(']')))
        while (i < cmds.length && cmds[i] !== PAUSE) {
            client.send(cmds[i], true)
            i += 1
        }
        if (cmds[i] === PAUSE) i += 1
    }
}