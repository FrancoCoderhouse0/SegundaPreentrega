const misProductos = [
    { id: "1", nombre: "Nike React Tiempo Legend 9 Pro TF", precio: 69.999, img: "../img/botines1.webp", idCat: "1",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/546660-1200-1200?v=638162237668230000&width=1200&height=1200&aspect=true", 
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/535516-1200-1200?v=638161447272170000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/540604-1200-1200?v=638162131306200000&width=1200&height=1200&aspect=true",
    descripcion:"Producto Limitado",
    talla: "[32, 34, 36]"},
    { id: "2", nombre: "Nike Zoom Mercurial Superfly 9 Academy IC", precio: 42.399, img: "../img/botiens2.webp", idCat: "1",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/525207-1200-1200?v=638158681451500000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/523566-1200-1200?v=638158648814770000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/524391-1200-1200?v=638158663844330000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "3", nombre: "Nike Tiempo Legend 9 Academy TF", precio: 42.999, img: "../img/botines3.webp", idCat: "1",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/652402-1200-1200?v=638213107197430000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/649349-1200-1200?v=638213051020470000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/650877-1200-1200?v=638213079007570000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "4", nombre: "Nike Phantom GX Academy TF", precio: 49.999, img: "../img/botines4.webp", idCat: "1", 
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/547037-1200-1200?v=638162243353730000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/535893-1200-1200?v=638161453925800000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/540949-1200-1200?v=638162136214130000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "5", nombre: "Nike Wildhorse 8", precio: 72.999, img: "../img/running1.webp", idCat: "2",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/634711-1200-1200?v=638210694965900000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/630347-1200-1200?v=638210616983870000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/632527-1200-1200?v=638210658854800000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "6", nombre: "Nike React Pegasus Trail 4", precio: 72.999, img: "../img/running2.webp", idCat: "2", 
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/610891-1200-1200?v=638199594763400000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/458369-1200-1200?v=638149387533870000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/606155-1200-1200?v=638199523672300000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "7", nombre: "Nike React Pegasus Trail 4", precio: 72.456, img: "../img/running3.webp", idCat: "2", 
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/699190-1200-1200?v=638229614948000000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/698618-1200-1200?v=638229593376400000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/699189-1200-1200?v=638229614895870000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "8", nombre: "Nike ZoomX Zegama", precio: 89.999, img: "../img/running4.webp", idCat: "2",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/705477-1200-1200?v=638233982031770000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/703018-1200-1200?v=638233939644300000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/705476-1200-1200?v=638233981990930000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},  
    { id: "9", nombre: "Nike Air Force 1 '07 LX", precio: 68.999, img: "../img/zapatillamoda1.webp", idCat: "3", 
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/548847-1200-1200?v=638162271692530000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/537739-1200-1200?v=638161491823030000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/542780-1200-1200?v=638162165202500000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "10", nombre: "Nike Air Force 1 High", precio: 74.999, img: "../img/zapatillamoda2.webp", idCat: "3", 
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/170072-1200-1200?v=638088899531170000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/162199-1200-1200?v=638086378821300000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/166166-1200-1200?v=638088735883170000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "11", nombre: "Nike Air Force 1 Mid '07 LV8", precio: 74.999, img: "../img/zapatillamoda3.webp", idCat: "3",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/612996-1200-1200?v=638200091848430000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/461657-1200-1200?v=638149433896470000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/608260-1200-1200?v=638199555206570000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
    { id: "12", nombre: "Nike Air Max TW", precio: 91.999, img: "../img/zapatillamoda4.jpg", idCat: "3",
    img2: "https://nikearprod.vtexassets.com/arquivos/ids/635050-1200-1200?v=638210701845800000&width=1200&height=1200&aspect=true",
    img3: "https://nikearprod.vtexassets.com/arquivos/ids/630690-1200-1200?v=638210621824500000&width=1200&height=1200&aspect=true",
    img4: "https://nikearprod.vtexassets.com/arquivos/ids/632870-1200-1200?v=638210664256830000&width=1200&height=1200&aspect=true",
    descripcion: "Producto Limitado",
    talla: "[32, 34, 36]"
},
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