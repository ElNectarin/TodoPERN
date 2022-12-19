import express from 'express'
import cors from 'cors'
import { pool } from './core/db.js'
import TaskController from './controllers/TaskController.js'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.post('/todos', TaskController.postTask)
app.get('/todos', TaskController.getAllTodos )
app.get('/todos/:id', TaskController.getTask )
app.delete('/todos/:id', TaskController.deleteTask )

app.listen(port, () => {
    console.log(`Listen serser on port ${port}`)
})