import { Schema, model } from "mongoose";
import { IUser } from "../types";

const UserSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  coins: { type: Number, default: 0 },
  booster: { type: Boolean, default: false }
})

const UserModel = model("User", UserSchema);

export default UserModel