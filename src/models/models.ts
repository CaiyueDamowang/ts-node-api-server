import { Schema, model, Model } from "mongoose";
import { User } from "./typings";

const UserSchema = new Schema({
    id: { type: Number, required: true },
    nick: { type: String, required: true }
})

const User: Model<User> = model<User>('User', UserSchema)

export default {
    User
}