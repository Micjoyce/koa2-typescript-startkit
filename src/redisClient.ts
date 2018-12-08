import Redis from 'ioredis'
import config from './config'

const redis = new Redis({
  host: config.redis.host,
  port: Number(config.redis.port),
})

redis
  .on('ready', () => {
    console.info(
      `redis connected on ${config.redis.host}:${config.redis.port}`,
    )
  })
  .on('error', (error: Error) => {
    console.info(error.message)
  })

export default redis
