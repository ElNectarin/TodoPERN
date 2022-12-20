import React, { useState } from 'react';
import { useEffect } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios'

function TodoList() {
  const [task, setInput] = useState([]);

  
  

  const addTodo = async () => {
    try {
      await axios.get("http://localhost:3001/todos").then(res => setInput(res.data))
  } catch (error) {
      console.log(error.message)
  } 
   
  };

  const removeTodo = async id => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`)
      setInput(task.filter(task => task.id !== id))
  } catch (error) {
      console.log(error.message)
  }
  };

  useEffect(() => {
      
    addTodo()
}, [])


  const updateTodo = async (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setInput(prev => prev.map(item => (item.id !== todoId ? newValue : item)));
  };

  

  const completeTodo = async(id) => {
    let updatedTodos = task.map(todo => {
      if (todo.id === id) {
        todo.iscomplete = !todo.iscomplete;
      }
      return todo;
    });
    setInput(updatedTodos);
    try {
      const body={task};
      await axios.put(`http://localhost:3001/todos/${id}`, {
        body: JSON.stringify(body),
      });
      
  } catch (error) {
      console.log(error.message)
  }
  
  };

  return (
    <>
      <h1>Какой план на сегодня?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={task}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
