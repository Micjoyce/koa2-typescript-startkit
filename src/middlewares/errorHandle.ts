import Boom from 'boom'
import { Middleware, Context } from 'koa'

export default (): Middleware => async (ctx: Context, next) => {
  try {
    await next()
  } catch (error) {
    if (Boom.isBoom(error)) {
      ctx.status = error.output.statusCode
      ctx.body = error.output
    } else {
      ctx.status = error.status || 400
      ctx.body = { ...error, status: ctx.status }
    }
  }
}
