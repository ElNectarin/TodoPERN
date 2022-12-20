import { pool } from '../core/db.js'

class TaskController {
    async postTask(req, res) {
        try {
            const { task } = req.body;
            const newTask = await pool.query(
                "INSERT INTO todos (task) VALUES($1) RETURNING *",
                [task]
            )
            res.json(newTask.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
    async getAllTodos(req, res) {
        try {
            const allTasks = await pool.query("SELECT * FROM todos")
            res.json(allTasks.rows)
        } catch (error) {
            console.log(error.message)
        }
    }
    async getTask(req, res) {
        try {
            const { id } = req.params;
            const oneTask = await pool.query(
                "SELECT * FROM todos WHERE id = $1",
                [id]
            )
            res.json(oneTask.rows[0])
        } catch (error) {
            console.log(error.message)
        }
    }
    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            await pool.query(
                "DELETE FROM todos WHERE id = $1",
                [id]
            )
            res.json("Delete successful")
        } catch (error) {
            console.log(error.message)
        }
    }

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { iscompleted } = req.body;
          console.log(id)
            const updateTask = await pool.query(
                "UPDATE todos SET iscomplete=$2 WHERE id = $1 RETURNING * ",
                [id,iscompleted]
            )
            
            res.json("update")
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default new TaskController()