import { env } from './env'
import { app } from './app'

app
  .listen({
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on http://localhost:${env.PORT}`)
  })
