import 'dotenv/config'
import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

console.log(env.DATABASE_URL)

let databaseConnection: Knex.Config['connection'] = {}

if (env.DATABASE_CLIENT === 'sqlite') {
  databaseConnection = {
    filename: env.DATABASE_URL,
  }
} else if (env.DATABASE_CLIENT === 'pg') {
  databaseConnection = {
    connectionString: env.DATABASE_URL,
  }
}

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection: databaseConnection,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
