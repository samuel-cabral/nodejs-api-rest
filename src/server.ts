import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './databse'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('amount', 500)
    .first()
    .select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333')
  })
