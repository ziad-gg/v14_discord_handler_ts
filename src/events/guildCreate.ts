import { Guild, Events } from "discord.js";
import GuildModel from "../schemas/Guild";
import { BotEvent } from "../types";

const event: BotEvent = {
    name: Events.GuildCreate,
    execute: (guild : Guild) => {
        let newGuild = new GuildModel({
            guildID: guild.id,
            options: {},
            joinedAt: Date.now()
        })
        newGuild.save()
    }
}

export default event;