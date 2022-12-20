import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function TaskInput() {
    const [task, setTask] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const body = { task };
        if (body.task === '') {
        return
        } else {
        await axios.post("http://localhost:3001/todos", body, {
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        },
        }).finally(window.location.reload());
        }
        } catch (err) {
        console.error(err);
        }
        };
    return (
        <div>
            <h1>Список задач</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" maxLength={35} value={task} onChange={e => setTask(e.target.value)} />
                <button className="add">Добавить задачу</button>
            </form>
        </div >

    )
}

export default TaskInput