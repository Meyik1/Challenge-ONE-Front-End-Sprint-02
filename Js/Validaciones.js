const correocorrecto = document.getElementById("correo");
const passcorrecto = document.getElementById("pass");
const enviarBtn = document.getElementById("enviar");
const form = document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(correocorrecto.value == "meeyik.22@gmail.com" && passcorrecto.value == "alura123"){
        console.log(correocorrecto);
        enviarBtn.enable = true;
        swal({
            title: "Logueo Correcto",
            text: " ",
            icon: "success",
            button: false,
            timer: 2000            
        }).then(() => {
        window.location.href = "Todos_productos.html";
    });
    }else{
        enviarBtn.disable = false;
        swal({
            title: "El correo o la contraseña ingresada es incorrecto",
            text: " ",
            icon: "error",
            button: false,
            timer: 2000
        });
    }
});

