import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

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
const [agregarCantidad, setAgregarCantidad] = useState(0);
//2) Creamos una función manejadora de la cantidad:

const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
};
return (
    <div className="contenedor">
    <div className="datos">
        <h2 className="nombre">{nombre} </h2>
        <h3>$ {precio} </h3>
        <p className="descripcion">{descripcion}</p>
        <p>tallas: {talla}</p>
        {agregarCantidad > 0 ? (
        <Link to="/"> Terminar compra </Link>
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
