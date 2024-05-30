import fastify from 'fastify'
import { knex } from './databse'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_master').where('type', 'table')
  return tables.map((table) => table.name)
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333')
  })
