
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearproductosadmin = (imagenUrl,categoria,name,price,descripcion,id) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify({imagenUrl,categoria,name,price,descripcion,id}),
    });
};

const eliminarproducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE"
    });
};

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json());
};

const editarProducto = (imagenUrl,categoria,name,price,descripcion,id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
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


