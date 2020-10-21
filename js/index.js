// Declaración de Eventos
document.querySelector("button").addEventListener("click", handleClickButtonEvent);

//Manejador de eventos del Boton
function handleClickButtonEvent() {
    var entradaEmail = document.querySelector("#correoUsuario");
    var longitudEmail = entradaEmail.value.length;
    // verifica si el campo de entrada está vacío
    if ((entradaEmail.value !== "")&&(entradaEmail.validity.typeMismatch === false)&&(entradaEmail.value[longitudEmail - 4] === ".")) {
        //Muestra el mensaje de error
        eliminaMensaje();
        //coloca el borde del campo en rojo
        entradaEmail.classList.remove("invalid");
    } else {
       //Elimina el mensaje de error
       muestraMensaje();
       //coloca el borde del campo en azul
       entradaEmail.classList.add("invalid");
    }
}

//Muestra el mensaje de error
function muestraMensaje() {
    //verifica si el mensaje ya se esta mostrando
    if (document.querySelector(".mensajeError") === null) {
        // Crea elemento con su contenido
        var elemento = document.createElement("p");
        var contenido = document.createTextNode("Provide a valid email address.");
        elemento.appendChild(contenido);
        elemento.classList.add("mensajeError");
        // Se añade a la pagina
        document.querySelector(".inputEmail").appendChild(elemento);
    }    
}

//Oculta el mensaje de error
function eliminaMensaje() {
    //ubica el elemento a eliminar
    var eliminado = document.querySelector(".mensajeError");
    //Elimina el mensaje
    if (eliminado !== null) {
        eliminado.parentNode.removeChild(eliminado);   
    }
}
