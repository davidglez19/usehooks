import React, { useState } from 'react'
import { MultipleHooks } from '../03-multiple/MultipleHooks'

import './focus.css'

export const RealExampleRef = () => {

    const [show, setShow] = useState(false)


    return (
        <div>
            <h1>Ejemplo real useRef</h1>
            <hr />
            {
                (show)
                && <MultipleHooks />
            }

            <br />
            <button
                className="btn btn-outline-primary mt-3"
                onClick={() => { setShow(!show) }}

            >Mostrar/ocultar
            </button>
        </div>
    )
}
