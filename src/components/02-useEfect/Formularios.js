import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './styleForm.css';


const Formularios = () => {

    const [state, setState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = state;

    useEffect( ()=> {
        // console.log('hey');
    }, [])

    useEffect( ()=> {
        // console.log('Formulario cambio');
    }, [state])


    useEffect( ()=> {
        // console.log('Email cambió');
    }, [email])

    const handlerChange = ({target}) => {
        setState({
            ...state,
            [target.name] : target.value
        })
    }

    return (
        <>
         <h1>Hook useEfect</h1>   
         <hr />
         <div className="form-grup">
            <input 
                type= "text"
                autoComplete = "off"
                className= "form-control"
                name="name"
                placeholder= 'Escribe tu nombre'
                value = { name }
                onChange = { handlerChange }
            />
            <input 
                type= "email"
                autoComplete = "off"
                className= "form-control"
                name="email"
                placeholder= 'test@test.com'
                value = { email }
                onChange = { handlerChange }
            />
         </div>

         { (name === '123') && <Message /> }
        </>
    )
}

export default Formularios
