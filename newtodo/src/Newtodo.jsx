import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const toggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h2 className='text-center my-5 text-primary'>Todo List</h2>
            <div className='text-center'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='py-2'
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Add new todo"
                    />
                    <button className="m-2 py-1 btn btn-primary" type="submit">Add Todo</button>
                </form>
            </div>
            <ul>
                {todos.map(todo => (
                    // <li key={todo.id}>
                    <div className='text-center' key={todo.id}>

                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button className="btn btn-primary m-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                    // </li >
                ))
                }
            </ul >
        </div >
    );
}

export default TodoList;
