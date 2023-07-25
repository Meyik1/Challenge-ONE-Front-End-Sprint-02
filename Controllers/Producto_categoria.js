import { clientServices } from "../Service/Productos.js";

const crearProducto = (imagenUrl, categoria, name,price) => {
    const producto = document.createElement("div");
    const contenido = `
        <div class="Productos__categoria">              
        <img src="${imagenUrl}" class="Img__producto" alt="Imagen de producto"/>
        <p class="Nombre__producto">${name}</p>
        <p class="Precio__producto">$${price}</p>
        <p class="Ver__producto">Ver producto</p>
        </div>
    `;
    producto.innerHTML = contenido;
    return producto;
};

clientServices.listaProductos().then((data) => {
    data.forEach(({ imagenUrl, categoria, name, price }) => {
        const nuevoProducto = crearProducto(imagenUrl, categoria, name, price);
        const categoriaDiv = document.querySelector(`[data-categoria${categoria}]`);
        if (categoriaDiv) {
            categoriaDiv.appendChild(nuevoProducto);
        } else {
            console.error(`Div de categoría '${categoria}' no encontrada.`);
        }
    });
}).catch((error) => alert("Ocurrió un error"));
