import Router from 'koa-router'
import { createUser, getUsers } from '../../controllers/user'

const userRouter = new Router()

userRouter
  .get('/', getUsers)
  .post('/', createUser)

export default userRouter
