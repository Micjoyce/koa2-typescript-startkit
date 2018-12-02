import Redis from 'ioredis'
import config from './config'

const redis = new Redis({
  host: config.redis.host,
  port: Number(config.redis.port)
})

redis
  .on('ready', () => {
    console.log(
      `redis connected on ${config.redis.host}:${config.redis.port}`
    )
  })
  .on('error', (error: Error) => {
    console.log(error.message)
  })

export default redis
