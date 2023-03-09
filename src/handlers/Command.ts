import { Client } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { Command } from "../types";

module.exports = (client : Client) => {
    const commands : Command[] = []
    let commandsDir = join(__dirname,"../commands")

    readdirSync(commandsDir).forEach(file => {
        let command : Command = require(`${commandsDir}/${file}`).default
        commands.push(command)
        client.commands.set(command.name, command)
    })

}