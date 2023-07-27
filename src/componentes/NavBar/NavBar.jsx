
import "../../componentes/NavBar/estilos.css"
import logozapatillas from "../../assets/logo_zapatillas-removebg-preview.png"
import CartWidget from "../CartWidget/CartWidget"
import {Link,NavLink} from "react-router-dom"

const NavBar = () => {
    return (
        <nav className= "menu">
            <Link to="/"><img className="logo" src={logozapatillas} alt=""/></Link>
            <CartWidget/>
            <ul>
                <li><NavLink to="/categoria/1">Botines</NavLink></li>
                <li><NavLink to="/categoria/2">Running</NavLink></li>
                <li><NavLink to="/categoria/3">Trend</NavLink></li>
            </ul>
</nav>
    )
}

export default NavBar