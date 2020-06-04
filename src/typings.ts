import { Connection, Model } from "mongoose";
import { ParameterizedContext } from "koa";
import { User } from "./models/typings";

export interface CustomContext extends ParameterizedContext {
    db?: Connection
    models? : {
        User: Model<User>
    }
}