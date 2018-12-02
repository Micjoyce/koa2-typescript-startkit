import * as Koa from 'koa'
import Router from 'koa-router'
import authorize from '../../middlewares/authorize'
import users from './users'

const api = new Router({
  prefix: '/v1'
})

api
  // .use(authorize())
  .use('/users', users.routes(), users.allowedMethods())

export default api
