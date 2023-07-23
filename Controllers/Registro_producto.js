const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-name]").value;
    const precio = document.querySelector("[data-price]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(img,categoria,nombre,precio,descripcion);
});