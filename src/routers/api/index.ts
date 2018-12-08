import Router from 'koa-router'
import users from './users'

const api = new Router({
  prefix: '/v1',
})

api
  // .use(authorize())
  .use('/users', users.routes(), users.allowedMethods())

export default api
