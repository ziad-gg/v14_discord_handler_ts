import type { Command } from "../types";
import { EmbedBuilder } from "discord.js";

export default <Command> {
 name: "ping",
 aliases: [],
 cooldown: 3,
 permissions: ["SendMessages", "ViewChannel"],
 async execute (message, args) {

    let now_time = Date.now();
    let msg = await message.reply({ content: "pong!" });
    let embed = new EmbedBuilder()
    .setColor("Blue")
    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL() })
    .setDescription(`**📊 Time Taken: ${Date.now() - now_time} ms\n🌐 Web Socket: ${message.client.ws.ping} ms**`);
    
    await msg.edit({ content: "", embeds: [embed] });
 }
} 