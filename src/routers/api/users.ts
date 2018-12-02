import Router from 'koa-router'
import { getUsers, createUser } from '../../controllers/user'

const userRouter = new Router()

userRouter
  .get('/', getUsers)
  .post('/', createUser)

export default userRouter
