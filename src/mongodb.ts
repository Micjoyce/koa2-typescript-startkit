import mongoose from 'mongoose'

import config from './config'

export const connect = () => {
  const mongoUrl = config.mongoUrl
  mongoose.connect(mongoUrl, { useNewUrlParser: true })
  mongoose.connection.on('error', (error) => {
    console.log('connection error', error)
  })
  mongoose.connection.once('open', () => {
    console.log('connect success')
  })
  return mongoose
}
