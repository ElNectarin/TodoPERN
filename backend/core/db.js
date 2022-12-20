import pg from "pg"

const Pool = pg.Pool
const Client = pg.Client

export const pool = new Pool({
  user: 'postgres',
  password: '123456',
  host: 'localhost',
  port: 5432,
  database: 'todo'
})

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: '123456',
  port: 5432,
})
client.connect()
