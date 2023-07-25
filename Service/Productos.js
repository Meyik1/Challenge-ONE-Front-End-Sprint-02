
const listaProductos = () => fetch("https://64bf57415ee688b6250d4a2d.mockapi.io/Producto/").then((respuesta) => respuesta.json());

const crearproductosadmin = (imagenUrl,categoria,name,price,descripcion,id) => {
    return fetch("https://64bf57415ee688b6250d4a2d.mockapi.io/Producto/", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({imagenUrl,categoria,name,price,descripcion,id}),
    });
};

const eliminarproducto = (id) => {
    return fetch(`https://64bf57415ee688b6250d4a2d.mockapi.io/Producto/${id}`, {
        method: "DELETE"
    });
};

const detalleProducto = (id) => {
    return fetch(`https://64bf57415ee688b6250d4a2d.mockapi.io/Producto/${id}`).then(respuesta => respuesta.json());
};

const editarProducto = (imagenUrl,categoria,name,price,descripcion,id) => {
    return fetch(`https://64bf57415ee688b6250d4a2d.mockapi.io/Producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imagenUrl,categoria,name,price,descripcion,id}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

export const clientServices = {
    listaProductos,
    crearproductosadmin,
    eliminarproducto,
    detalleProducto,
    editarProducto,
};


