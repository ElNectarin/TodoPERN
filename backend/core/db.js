import pg from "pg"

const Pool = pg.Pool
const Client = pg.Client

export const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'todo'
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: 'postgres',
  port: 5432,
})
client.connect()
