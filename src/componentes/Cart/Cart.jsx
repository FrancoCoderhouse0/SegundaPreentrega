import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 className="miBtn"> No hay productos en el carrito.</h2>
                <Link className="miBtn" to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div className="cart">
    <div className="producto">
        {carrito.map((producto, index) => (
        <CartItem key={index} {...producto} />
        ))}
    </div>

    <div className="total-productos">
        <h3>Total: $ {total} </h3>
        <h3>Cantidad total: {cantidadTotal} </h3>
        <button className="miBtn" onClick={() => vaciarCarrito()}>
    {" "}
        Vaciar Carrito{" "}
        </button>
        <Link className="miBtn" to="/checkout">
        {" "}
        Finalizar Compra{" "}
        </Link>
    </div>
    </div>
    )
}

export default Cart