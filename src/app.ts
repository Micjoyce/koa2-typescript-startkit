import Koa from 'koa'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import routers from './routers'
import { connect as connectMongodb } from './mongodb'
import redisClient from './redisClient'
import errorHandle from './middlewares/errorHandle'

const app = new Koa()

// connect mongodb
app.context.mongodb = connectMongodb()
app.context.redisClient = redisClient

app.use(logger())
app.use(bodyParser())
app.use(errorHandle())
app.use(cors())
app.use(routers.routes())
app.use(routers.allowedMethods())

export default app
