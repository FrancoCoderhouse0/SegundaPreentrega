const misProductos = [
    { id: "1", nombre: "Nike React Tiempo Legend 9 Pro TF", precio: 69.999, img: "../img/botines1.webp", idCat: "1",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/546660-1200-1200?v=638162237668230000&width=1200&height=1200&aspect=true", 
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/535516-1200-1200?v=638161447272170000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/540604-1200-1200?v=638162131306200000&width=1200&height=1200&aspect=true",
    descripcion:"Zapatillas para hombre"},
    { id: "2", nombre: "Nike Zoom Mercurial Superfly 9 Academy IC", precio: 42.399, img: "../img/botiens2.webp", idCat: "1" },
    { id: "3", nombre: "Nike Tiempo Legend 9 Academy TF", precio: 42.999, img: "../img/botines3.webp", idCat: "1" },
    { id: "4", nombre: "Nike Phantom GX Academy TF", precio: 49.999, img: "../img/botines4.webp", idCat: "1" },
    { id: "5", nombre: "Nike Wildhorse 8", precio: 72.999, img: "../img/running1.webp", idCat: "2" },
    { id: "6", nombre: "Nike React Pegasus Trail 4", precio: 72.999, img: "../img/running2.webp", idCat: "2" },
    { id: "7", nombre: "Nike React Pegasus Trail 4", precio: 72.000, img: "../img/running3.webp", idCat: "2" },
    { id: "8", nombre: "Nike ZoomX Zegama", precio: 89.999, img: "../img/running4.webp", idCat: "2" },
    { id: "9", nombre: "Nike Air Force 1 '07 LX", precio: 68.999, img: "../img/zapatillamoda1.webp", idCat: "3" },
    { id: "10", nombre: "Nike Air Force 1 '07 LV8", precio: 37.699, img: "../img/zapatillamoda2.webp", idCat: "3" },
    { id: "11", nombre: "Nike Air Force 1 Mid '07 LV8", precio: 74.999, img: "../img/zapatillamoda3.webp", idCat: "3" },
    { id: "12", nombre: "Nike Air Max TW", precio: 91.999, img: "../img/zapatillamoda4.jpg", idCat: "3" },
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}