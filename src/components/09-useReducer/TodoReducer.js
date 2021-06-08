import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducerApp } from './todos'
import './todos.css'

const init = () => { return JSON.parse(localStorage.getItem('todos')) || []; }

export const TodoReducer = () => {
    const [todos, dispatch] = useReducer(todoReducerApp, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelteTodo = (todoId) => {
        const actionTodoDelete = {
            type: 'delete',
            payload: todoId
        }
        dispatch(actionTodoDelete);
    }

    const handleCompleted = (todoId) => {
        dispatch({
            type: 'completed',
            payload: todoId
        })
    }

    const handleAdd = (newTodo) => {
        dispatch(newTodo);
    }
    // console.log(todos);

    return (
        <div>
            <h1>Todos <small>({todos.length})</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}
                        handleDelteTodo={handleDelteTodo}
                        handleCompleted={handleCompleted}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAdd={handleAdd} />
                </div>

            </div>
        </div>
    )
}
