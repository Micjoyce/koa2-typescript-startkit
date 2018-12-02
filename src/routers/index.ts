import Router from 'koa-router'
import api from './api'
import version from './version'

const router = new Router()

router
  .use('/api', api.routes(), api.allowedMethods())
  .use('/version', version.routes(), version.allowedMethods())

export default router
