const validarFormulario = () => {
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('mensaje').value;
    let errores = [];

    if (nombre === "") {
        errores.push("Ingrese nombre y apellido");
    }
    if (!validarEmail(email)) {
        errores.push("El email no es válido");
    }
    if (telefono === "") {
        errores.push("Ingrese teléfono");
    }
    if (mensaje === "") {
        errores.push("Ingrese mensaje");
    }
    
    if (errores.length > 0) {
        mostrarErrores(errores);
        return false; 
    }
    return true;
};

const validarEmail = (email) => {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};

const mostrarErrores = (errores) => {
    let mensaje = errores.map(error => `* ${error}`).join("\n");
    alert(mensaje);
};
