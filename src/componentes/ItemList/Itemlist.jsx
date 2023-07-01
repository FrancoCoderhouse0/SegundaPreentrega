import React from 'react'
import Item from '../Item/Item'
import "./Itemlist.css"

const Itemlist = ({productos}) => {
return (
    <div className='contenedor'>{
            productos.map(producto =>(<Item key={producto.id} {...producto}></Item>))
        }
    </div>
)
}

export default Itemlist