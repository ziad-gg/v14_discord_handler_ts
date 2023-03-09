import { SlashCommandBuilder, CommandInteraction, Collection, PermissionResolvable, Message } from "discord.js"
import mongoose from "mongoose"

export module "discord.js" {
    export interface Client {
        foo: number
        slashCommands: Collection<string, SlashCommand>,
        commands: Collection<string, Command>,
        cooldowns: Collection<string, number>
    }
}

declare global {
    interface String {
        toUserId: (id: (String | Number)) => String
    }
}

export interface SlashCommand {
    command: SlashCommandBuilder | any,
    execute: (interaction: CommandInteraction, ...args: any[]) => void,
    cooldown?: number // in seconds
}

export interface Command {
    name: string,
    execute: (message: Message, args: Array<string>) => void,
    permissions: Array<PermissionResolvable>,
    aliases: Array<string>,
    cooldown?: number,
}

interface GuildOptions {
    prefix: string,
}

export interface IGuild extends mongoose.Document {
    guildId: string,
    options: GuildOptions
    joinedAt: Date
}

export interface IUser extends mongoose.Document {
    userId: string,
    guildId: string,
    coins: number,
    booster: boolean,
}


export type GuildOption = keyof GuildOptions

export interface BotEvent {
    name: string,
    once?: boolean | false,
    execute: (...args: any[]) => void
}
