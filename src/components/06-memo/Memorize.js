import React, { useState } from 'react'
import { Small } from './Small';
import { useCounter } from '../../hooks/useCounter';

export const Memorize = () => {
    const { counter, increment } = useCounter()

    const [mostrar, setMostrar] = useState(false)

    return (
        <div>
            <p>Counter : <Small cantidad={counter} /></p>
            <button className="btn btn-outline-primary" onClick={increment}>+1</button><br />
            <button
                className="btn btn-outline-success"
                onClick={() => setMostrar(!mostrar)}>
                Mostrar/ocular - {JSON.stringify(mostrar)}
            </button>
        </div>

    )
}

