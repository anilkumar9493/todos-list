import React, { useEffect } from "react";
import { sortTodos } from "../utils";
var crypto = require("crypto");

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {


    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        setTodos(newTodo);
        setEditTodo('');
    }

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput('');
        }
    }, [setInput, editTodo])

    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            let tempTodos = [...todos, { id: crypto.randomBytes(4).toString("hex"), title: input, completed: false, created_at: Date() }]
            setTodos(sortTodos(tempTodos));
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                placeholder='Enter a Todo...'
                className='input-field'
                value={input} required
                onChange={onInputChange}
            />
            &nbsp;&nbsp;
            <button className='add-button' type='submit'>
                {editTodo ? 'OK' : 'Add'}
            </button>
        </form>
    )
}

export default Form;