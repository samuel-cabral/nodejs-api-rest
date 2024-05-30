import fastify from 'fastify'
import { knex } from './databse'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_master').select('*')
  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333')
  })
