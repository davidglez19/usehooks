import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState)

    const handlerOnChange = (e) => {
        setFormState ({
            ...formState,
            [e.target.name] : e.target.value
        })

    }

    return [formState, handlerOnChange ];


}
