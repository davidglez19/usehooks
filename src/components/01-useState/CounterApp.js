import React, { useState } from 'react';
import './style.css';

const CounterApp = () => {
    const [state, setState] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,
        counter4 : 40,
    });

    const { counter1, counter2 } = state;
    return (
        <div>
            <h2> Counter: { counter1 }</h2>
            <h2> Counter: { counter2 }</h2>
            <button 
                className="btn btn-primary"
                onClick= { ()=> {
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    })
                }}
                >+1</button>
            <hr />
        </div>
    )
}

export default CounterApp
