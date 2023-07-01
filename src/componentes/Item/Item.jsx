import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'


const Item = ({id,nombre,precio,img}) => {
return (
    <div className='card'>
        <img src={img} alt="" className='img'/>
        <h1 className='nombre'>Nombre: {nombre}</h1>
        <h2 className='precio'>Precio: {precio}</h2>
        <Link to={`/item/${id}`}>Ver detalles</Link>
    </div>
)
}

export default Item