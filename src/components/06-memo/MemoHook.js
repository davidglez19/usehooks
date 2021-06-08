import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000)
    const [mostrar, setMostrar] = useState(false)


    const procesoPesado = (valorInicial) => {
        for (let index = 0; index < valorInicial; index++) {
            console.log('ahi vamos!!');

        }

        return `Valor del contador ${counter}`
    }

    const procesoUseMemoPesado = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h2>Memo Hook</h2>
            <p>Counter : <small>{procesoUseMemoPesado}</small></p>
            <button
                className="btn btn-outline-primary"
                onClick={() => {
                    increment();

                }}
            >+1
            </button><br />
            <button
                className="btn btn-outline-success"
                onClick={() => setMostrar(!mostrar)}>
                Mostrar/ocular - {JSON.stringify(mostrar)}
            </button>
        </div>

    )
}


