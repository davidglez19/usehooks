import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [size, setSize] = useState({})
    useLayoutEffect(() => {

        setSize(pTag.current.getBoundingClientRect());


    }, [quote])

    return (
        <>
            <h1>use LayOutEffect</h1>
            <hr />

            {

                <>

                    <blockquote className="blockquote text-end">
                        <p ref={pTag} className="mb-3">{quote}</p>
                    </blockquote>
                    <pre>{JSON.stringify(size, null, 3)}</pre>
                    <button
                        className="btn btn-primary"
                        onClick={increment}
                    >Siguiente Frase</button>
                </>

            }
        </>
    )
}
