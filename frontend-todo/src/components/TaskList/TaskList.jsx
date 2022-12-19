import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function TaskList() {
    const [list, setList] = useState([])
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/todos/${id}`)
            setList(list.filter(task => task.id !== id))
        } catch (error) {
            console.log(error.message)
        }
    }
    const getList = async () => {
        try {
            await axios.get("http://localhost:3001/todos").then(res => setList(res.data))
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        getList()
    }, [])
    return (
        <div>
            <ul>
                {list.map(task => <li key={task.id}>{task.task}
                <button onClick={() => deleteTask(task.id)}>delete</button></li>)}
            </ul>
        </div>
    )
}

export default TaskList