import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
const [contador, setContador] = useState(inicial);

const incrementar = () => {
    if (contador < stock) {
    setContador(contador + 1);
    }
};

const decrementar = () => {
    if (contador > inicial) {
    setContador(contador - 1);
    }
};
return (
    <>
    <div className="btn">
        <button className="sub-btn" onClick={decrementar}>
        {" "}
        -{" "}
        </button>
        <p className="contador"> {contador} </p>
        <button className="sub-btn" onClick={incrementar}>
        {" "}
        +{" "}
        </button>
    </div>
    <button className="btn-2" onClick={() => funcionAgregar(contador)}>
        {" "}
        Agregar al Carrito{" "}
    </button>
    </>
);
};

export default ItemCount