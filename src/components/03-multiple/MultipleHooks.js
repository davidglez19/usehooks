import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

import './multiple.css'

export const MultipleHooks = () => {

    const { counter , increment } = useCounter(1);
     
     const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    
     const { quote, author } = !!data && data[0];
    
    // console.log(data);

    return (
        <>
         <h1>Multiple Hooks</h1>   
         <hr />

         {
             loading 
             ?
                (
                    <div className="alert alert-info text-center">
                        loading
                    </div>
                )
            :
                (
                    <>

                    <blockquote className="blockquote text-end">
                        <p className="mb-3">{ quote }</p>
                        <footer className=" blockquote-footer">{ author }</footer>
                    </blockquote>
                    <button 
                        className="btn btn-primary"
                        onClick= { increment }
                    >Siguiente Frase</button>
                    </>
                    
                )
         }
        </>
    )
}
