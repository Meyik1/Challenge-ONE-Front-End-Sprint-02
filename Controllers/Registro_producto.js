import { clientServices } from "../Service/Productos.js";
const formulario = document.querySelector("[data-form]")


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagenUrl = document.querySelector("[data-imagenUrl]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    clientServices.crearproductosadmin(imagenUrl,categoria,name,price,descripcion).then( () => {
        window.location.href ="Todos_productos.html";
    }).catch((err) => console.log(err));
});