// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({
id,
stock,
nombre,
precio,
img,
descripcion,
img2,
img3,
img4,
talla,
}) => {
//2) Creamos una función manejadora de la cantidad:
const [agregarCantidad, setAgregarCantidad] = useState(0);
const { agregarProducto } = useContext(CarritoContext);

const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio, img };
    agregarProducto(item, cantidad);
}

return (
    <div className="contenedor">
    <div className="datos">
        <h2 className="nombre">{nombre} </h2>
        <h3>$ {precio} </h3>
        <p className="descripcion">{descripcion}</p>
        <p>tallas: {talla}</p>
        {agregarCantidad > 0 ? (
        <div className="compras">
            <Link className="miBtn" to="/cart">
            
            Terminar compra
            </Link>
            <Link className="miBtn" to="/">
            
            Seguir Comprando
            </Link>
        </div>
        ) : (
            <ItemCount
            inicial={1}
            stock={10}
            funcionAgregar={manejadorCantidad}
        />
        )}
    </div>
    <div className="foto">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
    </div>
    </div>
);
};

export default ItemDetail;


