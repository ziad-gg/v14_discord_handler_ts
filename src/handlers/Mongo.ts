import mongoose from "mongoose";
import { color } from "../functions";

module.exports = () => {
    const MONGO_URI = "mongodb+srv://ZIAD:ZIATH@cluster0.qizpg.mongodb.net/giveaways"
    if (!MONGO_URI) return console.log(color("text",`🍃 Mongo URI not found, ${color("error", "skipping.")}`))
    mongoose.set('strictQuery', false)
    mongoose.connect(`${MONGO_URI}`)
    .then(() => console.log(color("text",`🍃 MongoDB connection has been ${color("variable", "established.")}`)))
    .catch(() => console.log(color("text",`🍃 MongoDB connection has been ${color("error", "failed.")}`)))
}