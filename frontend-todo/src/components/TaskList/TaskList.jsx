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
        <div className="todo-row">
            
            {list.map(task => 
            <div className="li" key={task.id}>
               
           
               <input className='task' type="text" value={task.task} readOnly={true}/>
                
                <div className="icon">
                
                <button onClick={() => deleteTask(task.id)}>Изменить</button>
                <button onClick={() => deleteTask(task.id)}>Удалить</button>
                </div>
                </div>)}
            
        </div>
    )
}

export default TaskList