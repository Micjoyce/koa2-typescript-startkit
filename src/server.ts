import app from './app'
import config from './config'

const server = app.listen(config.port, () => {
  console.log(`listen at: http://localhost:${config.port}`)
})

export default server
