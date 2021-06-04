import React from 'react'
import useCounter from '../../hooks/useCounter';
import './style.css';
const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(20);


    return (
        <div>
            <h2>Counter  {state}</h2>
            <button onClick={ ()=> increment(2) } className="btn btn-primary">+1</button>
            <button onClick={  reset } className="btn btn-danger">Reset</button>
            <button onClick={ ()=> decrement(2) } className="btn btn-primary">-1</button>

        </div>
    )
}

export default CounterWithCustomHook
