import mongoose, { connection } from 'mongoose'
import Application from "koa";
import models from "./models";
/**
 * @shell mongod --config /usr/local/etc/mongod.conf
 *         mongo
 */

const mountDB = async(app: Application) => {
    const connection = await mongoose.connect(
        'mongodb://localhost:27017/test'
    )
    app.context.connection = connection
    app.context.models = models
}

export default mountDB
