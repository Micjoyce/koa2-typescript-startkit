import Router from 'koa-router'
const version = new Router()

import { getVersion } from '../controllers/version'

version.get('/', getVersion)

export default version
