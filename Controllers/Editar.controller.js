import { clientServices } from "../Service/Productos.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagenUrl = document.querySelector("[data-imagenUrl]");
    const categoria = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");
    const descripcion = document.querySelector("[data-descripcion]");

    clientServices.detalleProducto(id).then((producto) => {
        imagenUrl.value = producto.imagenUrl;
        categoria.value = producto.categoria;
        name.value = producto.name;
        price.value = producto.price;
        descripcion.value = producto.descripcion;
    });
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = new URL(window.location);
    const id = url.searchParams.get("id"); 

    const imagenUrl = document.querySelector("[data-imagenUrl]").value
    const categoria = document.querySelector("[data-categoria]").value
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    clientServices.editarProducto(imagenUrl,categoria,name,price,descripcion,id).then(() => {
        swal({
            title: "Información Actualizada",
            text: " ",
            icon: "success",
            button: false,
            timer: 2000            
        }).then(() => {
        window.location.href = "Todos_productos.html";
    })
    });
});