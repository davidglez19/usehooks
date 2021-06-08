import React from 'react'

export const TodoListItem = ({ todo, i, handleCompleted, handleDelteTodo }) => {
    return (
        <>
            <li
                className="list-group-item bg-dark text-white"
            >
                <p
                    className={`${todo.done && 'realizado'}`}
                    onClick={() => handleCompleted(todo.id)}
                > {i + 1} {todo.desc} </p>
                <button
                    onClick={() => handleDelteTodo(todo.id)}
                    className="btn btn-danger">Borrar</button>
            </li>
        </>
    )
}
