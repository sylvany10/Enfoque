function manejarEnvio(evento) {
    evento.preventDefault();

    const formulario = document.getElementById('formulario');
    const contenedorDatos = document.getElementById('contenedorDatos');

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const profesion = document.getElementById('profesion').value.trim();

    if (!nombre || !apellido || !correo) {
        alert('Por favor completa los campos obligatorios.');
        return false; 
    }

    const tarjetaHTML = `
    <div class="card">
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Apellido:</strong> ${apellido}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Dirección:</strong> ${direccion}</p>
    <p><strong>Edad:</strong> ${edad}</p>
    <p><strong>Profesión:</strong> ${profesion}</p>
    </div>
`;

    contenedorDatos.insertAdjacentHTML('beforeend', tarjetaHTML);


    return false; // Para evitar el envío irreal del formulario
}