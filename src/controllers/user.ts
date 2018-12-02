import { Context, Middleware } from 'koa'
import * as userService from '../services/user'

export const getUsers: Middleware = async (ctx: Context) => {
  ctx.body = { success: true, message: 'success', result: [
    { name: 'michael' },
    { name: 'joyce' }
  ] }
}

export const createUser: Middleware = async (ctx: Context) => {
  const data = await userService.createUser()
  ctx.status = 200
  ctx.body = data
}
