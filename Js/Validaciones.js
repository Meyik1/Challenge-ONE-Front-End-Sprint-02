const correocorrecto = document.getElementById("correo");
const passcorrecto = document.getElementById("pass");
const enviarBtn = document.getElementById("enviar");
const form = document.getElementById("form");

form.addEventListener("submit", e=>{
    e.preventDefault()
    if(correocorrecto.value == "meeyik.22@gmail.com" && passcorrecto.value == "alura123"){
        console.log(correocorrecto);
        enviarBtn.enable = true;
        window.location.href = "/Pantallas/Modo_administrador.html";
    }else{
        enviarBtn.disable = false;
        alert("El correo o la contraseña ingresada es incorrecto")
    }
});