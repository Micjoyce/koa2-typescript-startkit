import { Context, Middleware } from 'koa'

export const getVersion: Middleware = async (ctx: Context) => {
  ctx.body = {
    version: '1.0.0',
    name: 'koa_test'
  }
}
