import { clientServices } from "../Service/Productos.js";

const crearProducto = (imagenUrl,name,price,id) => {
    const producto = document.createElement("div");
    const contenido = `
        <div class="Productos__categoria">
            <div class="imagen__padre">
                <img src="${imagenUrl}" class="Img__producto" alt="Imagen de producto"/>
                    <div class="imagen__hijo">
                        <img src="/Assets/Img/basura.svg" alt="Icono de basura" class="icono_edit">
                        <img src="/Assets/Img/lapiz.svg" alt="Icono de lapiz" class="icono_edit">
                    </div>  
            </div>
            <ul class="Productos__categoria">
                <li class="Nombre__producto">${name}</li>
                <li class="Precio__producto">${price}</li>
                </li>
            </ul>
            <p class="Identificador">#${id}</p>
        </div>
    `;
    producto.innerHTML = contenido;
    return producto;
};

const productonuevo = document.querySelector("[data-productonuevo]");

clientServices.listaProductos().then((data) =>{
    data.forEach(producto => {
        const nuevoProducto = crearProducto(producto.imagenUrl,producto.name,producto.price,producto.id);  
        productonuevo.appendChild(nuevoProducto);    
    });
}).catch((error) => alert("Ocurrió un error"));
