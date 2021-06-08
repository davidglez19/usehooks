const inicialTodos = [{
    id: '1',
    title: 'Salir a camninar',
    done: false
}]

export const todosReducer = (state = inicialTodos, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}
let todos = todosReducer();

const newTodo = {
    id: '2',
    title: 'Comparar una papitas',
    done: false
}

const actionReducer = {
    type: 'agregar',
    payload: newTodo
}

todos = todosReducer(todos, actionReducer);

console.log(todos);




