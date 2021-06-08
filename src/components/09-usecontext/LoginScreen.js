import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext(UserContext)
    return (
        <>
            <h1>Login Screen</h1>
            <hr />
            <button
                onClick={() => setUser({ id: 123, name: 'Aline' })}
                className="btn btn-primary">Ingresar</button>
        </>
    )
}
