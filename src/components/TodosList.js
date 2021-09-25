import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const TodosList = ({ todos, setTodos, setEditTodo }) => {


    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const deleteConfirmation = ({ id }) => {
        confirmAlert({
            title: "Delete ToDo",
            message: "Are you sure you want to delete this todo?",
            buttons: [
                {
                    label: "No",
                    onClick: () => true,
                },
                {
                    label: "Yes",
                    onClick: () => handleDelete(id),
                },
            ],
        });
    }


    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id} >
                    <input
                        type='text'
                        value={todo.title}
                        className={`list ${todo.completed ? 'complete' : ''}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button
                            className='button-complete task-button'
                            onClick={() => handleComplete(todo)}
                        >
                            <i className='fa fa-check-circle'></i>
                        </button>
                        <button
                            className='button-edit task-button'
                            onClick={() => handleEdit(todo)}
                        >
                            <i className='fa fa-edit'></i>
                        </button>
                        <button
                            className='button-delete task-button'
                            onClick={() => deleteConfirmation(todo)}
                        >
                            <i className='fa fa-trash'></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodosList;