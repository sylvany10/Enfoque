const validarFormulario = () => {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmar-password').value;
    let errores = [];

    if (nombre === "") {
        errores.push("Ingrese nombre");
    }
    if (apellido === "") {
        errores.push("Ingrese apellido");
    }
    if (telefono === "") {
        errores.push("Ingrese teléfono");
    }
    if (direccion === "") {
        errores.push("Ingrese dirección");
    }
    if (!validarEmail(email)) {
        errores.push("El email no es válido");
    }

    if (password.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres");
    } else if (!validarPassword(password)) {
        errores.push("La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un número");
    }

    if (password !== confirmPassword) {
        errores.push("Las contraseñas no coinciden");
    }

    if (errores.length > 0) {
        mostrarErrores(errores);
        return false; // Importante para detener el envío del formulario
    }

    return true;
};

const validarEmail = (email) => {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};

const validarPassword = (password) => {
    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regexPassword.test(password);
};

const mostrarErrores = (errores) => {
    let mensaje = errores.map(error => `* ${error}`).join("\n");
    alert(mensaje);
};
