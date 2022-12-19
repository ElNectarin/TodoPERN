import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function TaskInput() {
    const [task, setTask] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { task };
            await axios.post("http://localhost:3001/todos", body, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            });
            window.location = "/";
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>TaskInput</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                <button>Add Task</button>
            </form>
        </div >

    )
}

export default TaskInput