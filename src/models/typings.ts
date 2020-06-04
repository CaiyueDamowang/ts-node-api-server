import { Document, Schema } from "mongoose";

export interface User extends Document {
    id: number
    nick_name: string
    gender: number
}
