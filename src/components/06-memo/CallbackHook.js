import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => { /// genera otro espacio en memoria por eso el memo se vuelve a disparar
    //     setCounter(c => c + 1)
    // }

    const increment = useCallback((num) => { /// verifica que la funcion esta en memoria y no le asigna nuevamente otro espcio
        setCounter(c => c + num) //llamarlo asi se elemina la dependica del couter
    }, [setCounter])


    return (
        <div>
            <h1>UseCallback: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </div>
    )
}
