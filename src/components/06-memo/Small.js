import React from 'react'

export const Small = React.memo(({ cantidad }) => {

    console.log('Renderizado');
    return (
        <small>{cantidad}</small>
    )
})
