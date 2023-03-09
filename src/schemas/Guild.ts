import { Schema, model } from "mongoose";
import { IGuild } from "../types";

const GuildSchema = new Schema<IGuild>({
    guildId: {required: true, type: String},
    options: {
        prefix: {type: String, default: "!"}
    }
})

const GuildModel = model("guild", GuildSchema)

export default GuildModel