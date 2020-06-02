import { readdirSync } from 'fs'
import { resolve } from 'path'
import { ParameterizedContext } from 'koa'
import Router from 'koa-router'

const router: Router = new Router()

const routeFileNames: Array<string> = readdirSync(__dirname)
    .filter(r => r != 'index.ts' );

routeFileNames.forEach( async routefile => {
    const route: Router = (await import( resolve(__dirname, routefile) )).default
    router
        .use(route.routes())
        .use(route.allowedMethods())
})


export default router

