import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [{ description }, handleOnChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };


        handleAdd({
            type: 'add',
            payload: newTodo
        });

        reset();
    }

    return (
        <>
            <h3>Agregar TODO</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Agregar nueva tarea"
                    autoComplete="off"
                    value={description}
                    onChange={handleOnChange}
                    className="form-control"
                />
                <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-2">Agregar</button>
                </div>
            </form>
        </>
    )
}
