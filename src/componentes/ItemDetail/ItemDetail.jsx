import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({
id,
nombre,
precio,
img,
descripcion,
img2,
img3,
img4,
}) => {
return (
    <div className="contenedor">
    <div className="foto">
        <img src={img} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
    </div>
    <div className="datos">
        <h2>{nombre} </h2>
        <h3>{precio} </h3>
        <h1>{descripcion}</h1>
    </div>
    </div>
);
};

export default ItemDetail;
