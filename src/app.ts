import Koa, { ParameterizedContext } from 'koa'
// import router from './router'
import logger from 'koa-logger'
import dotenv from 'dotenv'

dotenv.config()

const app = new Koa()

app.use(logger())

app.use(async (ctx, next) => {
    const start = (new Date()).getDate()
    let timer: number

    try {
        await next()
        timer=(new Date()).getDate()
        const ms = timer - start
        console.log(`method: ${ctx.method}, url: ${ctx.url} - ${ms}ms`)
    } catch (e) {
        timer = (new Date()).getDate()
        const ms = timer - start
        console.log(`method: ${ctx.method}, url: ${ctx.url} - ${ms}ms`)
    }
})

app.listen(process.env.PORT, ()=> {
    console.log(`Server running on http://localhost:${process.env.PORT || 3000}`)
})

app.on('error', (error: Error, ctx: ParameterizedContext) => {
    ctx.body = error
})

export default app