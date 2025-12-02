const form = document.querySelector("form");
const nombreInput = document.querySelector("[name='nombre']");
const edadInput = document.querySelector("[name='edad']");
const  mensaje = document.querySelector("#mensaje");

function validarFormulario(event) {
    event.preventDefault(); 

    const nombre = nombreInput.value;
    const edad = Number(edadInput.value);

    if (edad >= 18) {
        mensaje.textContent = `Bienvenido ${nombre}, tienes acceso al evento.`;
        mensaje.classList.add("exito");
    } 
    else {
        mensaje.textContent = `Lo sentimos ${nombre}, debes ser mayor de edad.`;
        mensaje.classList.add("error");
    }
}

form.addEventListener("submit", validarFormulario);
