import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

console.log(env.DATABASE_URL)

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
