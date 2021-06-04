import React, { useReducer, useState } from 'react'
import './formulario.css'

export const FormularioReact = () => {
    const formReducer = (state, event) => {
        if(event.reset){
            return {
                manzanas: '',
                counter: 0,
                name: '',
                'terminos': false
            }
        }

        return {
            ...state,
            [event.name] : event.value
        }
    }
    const [submiting, setSubmiting] = useState(false);

    const [formData, setFormData] = useReducer(formReducer, {
        counter : 50
    });

    const handlerSubmit = event  => {


        event.preventDefault();
        setSubmiting(true);

        setTimeout( () => {
            setSubmiting(false);
            setFormData({
                reset: true
            })
        },3000)
    }
    const handlerChange = (event) => {
        const isCheckbox = event.target.type === 'checkbox';

        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value
        })
        console.log(formData);
    }
    return (
        <div className="wraper"> 
         <h1>Manejo de formularios</h1>   
         { submiting && <div>
             <ul>
                 {Object.entries(formData).map(([name, value]) => (
                     <li key = {name}><strong>{ name }: </strong>{ value.toString()}  </li>
                 ))}
             </ul>
         </div> }
         <form onSubmit = { handlerSubmit }>
             <fieldset disabled = { submiting }>
                 <label>
                     <p>Name</p>
                     <input 
                        type="text"
                        name = "name"
                        value = {formData.name || '' }
                        onChange = { handlerChange }
                      />

                 </label>
             </fieldset>
             <fieldset disabled = { submiting}>
                 <label>
                     <p>Manzanas</p>
                    <select name="manzanas" onChange={ handlerChange } value = {formData.manzanas || '' }>
                        <option value="">Seleccionar una de la siguiente opciones</option>
                        <option value="fuji">Fuji</option>
                        <option value="jonathan">Jonathan</option>
                        <option value="honey-crisp">Honey Crisp</option>
                    </select>
                 </label>
                 <label>
                     <p>Counter</p>
                     <input type="number" name="counter" step="1" value={ formData.counter || '' } onChange = {handlerChange  }  />
                 </label>
                 
                 <label>
                     <p>Aceptar condiciones</p>
                     <input type="checkbox" 
                            name="terminos" 
                            onChange ={ handlerChange } value={formData['terminos'] || false }
                            disabled= {formData.manzanas !== 'fuji' }
                             />
                 </label>
             </fieldset>
             <button type="submit" disabled = { submiting}>Enviar</button>
         </form>

        </div>
    )
}
