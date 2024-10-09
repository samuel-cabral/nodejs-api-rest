import { env } from 'process'
import { app } from './app'

app
  .listen({
    host: 'RENDER' in process.env ? '0.0.0.0' : 'localhost',
  })
  .then(() => {
    console.log(`Server is running on http://localhost:${env.PORT}`)
  })
