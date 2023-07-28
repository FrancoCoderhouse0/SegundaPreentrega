import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

return (
    <div className="card">
        <h4  className='nombre'> {item.nombre} </h4>
        <p className="cantidad"> Cantidad: {cantidad} </p>
        <p className='precio'> Precio: {item.precio} </p>
        <img className='img' src={item.img} alt={item.nombre}/>
        <button className="miBtn" onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
)
}

export default CartItem