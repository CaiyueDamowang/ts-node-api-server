export const  responseTimer = () => {
    return async (ctx: any, next: any) => {
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
    }
}