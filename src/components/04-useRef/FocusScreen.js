import React, { useRef } from 'react'
import './focus.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    const handlerOnClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                className="form-control"
                placeholder="Escribe tu nombre"
                ref={inputRef}
            />
            <button className="btn btn-primary mt-5" onClick={handlerOnClick}>Activar focus</button>
        </>
    )
}
