import React from 'react'
import "./Error.css"
import { Link } from 'react-router-dom'

const Error = () => {
return (
    <div>
<h1>Pgina no encontrada</h1>
<section class="error-container">
<span class="four"><span class="screen-reader-text">4</span></span>
<span class="zero"><span class="screen-reader-text">0</span></span>
<span class="four"><span class="screen-reader-text">4</span></span>
</section>
<div class="link-container">
<Link to="/" class="more-link">Regresar a la pagina principal</Link>
</div>
    </div>
)
}

export default Error