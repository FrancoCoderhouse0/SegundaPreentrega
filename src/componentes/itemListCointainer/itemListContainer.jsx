import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Itemlist from '../ItemList/Itemlist';
/*import { getProductos, getProductosPorCategoria } from '../../asyncmock';*/
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from '../../Firebase/config';


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const { idCategoria } = useParams();
    useEffect( ()=>{
        const misProductos = idCategoria ? query (collection(db, "inventario"),where("idCat", "==", idCategoria)): collection(db, "invenatrio");
        
        getDocs(misProductos)
            .then(res =>{
                const nuevosProductos = res.docs.map( doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error))
    }, [idCategoria])
    /* useEffect(()=>{
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;
        funcion(idCategoria)
            .then(res => setProductos(res))
    },[idCategoria])*/
    return (
        <div>
            <h1>{props.greeting}</h1>
            <Itemlist productos={productos}/>
        </div>
    )
}

export default ItemListContainer
