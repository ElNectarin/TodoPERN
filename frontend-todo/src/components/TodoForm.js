import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'

function TodoForm(props) {
  const [task, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async e => {
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
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Обнови задачу'
            value={task}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Обновить
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Напиши задачу'
            value={task}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Добавить
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
