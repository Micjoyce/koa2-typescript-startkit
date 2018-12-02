import Boom from 'boom'
import { Middleware } from 'koa'

export default (): Middleware => async (ctx, next) => {
  const token = ctx.cookies.get('uid')
  if (!token) {
    throw Boom.unauthorized('Unauthorized')
  } else {
    console.info('authorized')
    await next()
  }
}
