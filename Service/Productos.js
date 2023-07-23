
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());

const crearproductosadmin = (img,categoria,name,price,descripcion) => {
    fetch("http://localhost:3000/producto", {
        method: "POST",
        Headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify{img,categoria,name,price,descripcion}
    })
}

export const clientServices = {
    listaProductos
}