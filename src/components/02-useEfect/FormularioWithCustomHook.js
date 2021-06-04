import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './styleForm.css';


const FormulariosWithCustomHook = () => {

    const [state, handlerOnChange] = useForm({
        name: '',
        email: '',
        password: ''
    })


    const { name, email , password } = state;

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    }

    useEffect( () => {
        console.log('email cambio')
    }, [email])

   

    return (
        <form onSubmit = { handlerSubmit }>
         <h1>FormulariosWithCustomHook</h1>   
         <hr />
         <div className="form-grup">
            <input 
                type= "text"
                autoComplete = "off"
                className= "form-control"
                name="name"
                placeholder= 'Escribe tu nombre'
                value = { name }
                onChange = { handlerOnChange }
            />
            <input 
                type= "email"
                autoComplete = "off"
                className= "form-control"
                name="email"
                placeholder= 'test@test.com'
                value = { email }
                onChange = { handlerOnChange }
            />
            <input 
                type= "password"
                className= "form-control"
                name="password"
                placeholder= '********'
                value = { password }
                onChange = { handlerOnChange }
            />
         </div>
        
        <button className="btn btn-primary" type="submit">Guardar</button>


        </form>
    )
}

export default FormulariosWithCustomHook
