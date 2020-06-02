import { ParameterizedContext } from 'koa'
import Router from 'koa-router'
const router = new Router()

router.get('/connect', async(ctx: ParameterizedContext, next)=> {
    ctx.body = 'testconnected'
    await next()
})

export default router