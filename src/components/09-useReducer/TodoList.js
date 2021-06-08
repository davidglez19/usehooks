import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelteTodo, handleCompleted }) => {
    return (
        <>
            <ul className="list-group-items list-group-flush">
                {
                    todos.map((todo, i) => (
                        <TodoListItem
                            key={todo.id}
                            handleDelteTodo={handleDelteTodo}
                            handleCompleted={handleCompleted}
                            todo={todo} i={i} />
                    )
                    )
                }
            </ul>
        </>
    )
}
