import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coors, setCoors] = useState({ x: 0, y: 0});

    const { x , y } = coors;

    useEffect(() => {

        const mouseMove = ({ x , y}) => {

            const coors = {x, y}
            setCoors(coors);
            // console.log(':D');

        }

        window.addEventListener('mousemove', mouseMove)



        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <>
         <h1>Activdo el mensaje</h1>
         <p>Coordenadas</p>
         <p>x: { x }, y: { y }</p>
        </>
    )
}
