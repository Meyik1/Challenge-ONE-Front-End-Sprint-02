import { clientServices } from "../Service/Productos.js";

const crearProducto = (imagenUrl,categoria,name,price,descripcion,id) => {
    const producto = document.createElement("div");
    const contenido = `
        <div class="Productos__categoria">
            <div class="imagen__padre">
                <img src="${imagenUrl}" class="Img__producto" alt="Imagen de producto"/>
                    <div class="imagen__hijo">
                        <a id= "${id}"><img src="../Assets/Img/basura.svg" alt="Icono de basura" class="icono_edit"></a>
                        <a href ="Editar_producto.html?id=${id}"><img src="../Assets/Img/lapiz.svg" alt="Icono de lapiz" class="icono_edit"></a>
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
    const btn = producto.querySelector("a");
    btn.addEventListener("click", ()=> {
        const id = btn.id
        clientServices.eliminarproducto(id).then( respuesta =>{

        }).catch((err) => alert("Ocurrió un error"));
    });
    return producto;
};

const productonuevo = document.querySelector("[data-productonuevo]");

clientServices.listaProductos().then((data) =>{
    data.forEach(({imagenUrl,categoria,name,price,descripcion,id}) => {
        const nuevoProducto = crearProducto(imagenUrl,categoria,name,price,descripcion,id);  
        productonuevo.appendChild(nuevoProducto);    
    });
}).catch((error) => alert("Ocurrió un error"));
