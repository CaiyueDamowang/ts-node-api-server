import Koa, { ParameterizedContext } from 'koa'
import router from './router/index'
import mountDB from "./models/montDB";
// import requestMiddelware from './middlware/request'
import logger from 'koa-logger'
import { responseTimer } from './middlware/responseTimer'
import dotenv from 'dotenv'
dotenv.config()

const app = new Koa()

mountDB(app).then(()=>{
    console.log('mongoDB has been connected')
}).catch(err => {
    console.log('connect err', err)
})

app
    .use(logger())
    .use(responseTimer())

    .use(router.routes())
    .use(router.allowedMethods())


app.listen(process.env.PORT, ()=> {
    console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
})

app.on('error', (error: Error, ctx: ParameterizedContext) => {
    ctx.body = error
})

export default app