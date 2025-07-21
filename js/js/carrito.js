//Configuración firebase
const firebaseConfig = {
    apiKey: "AIzaSyBORUfPBSoX2fJWjOnr1ejwQJFw9BD4g9Y",
    authDomain: "enfoque-creativo-de102.firebaseapp.com",
    projectId: "enfoque-creativo-de102",
    storageBucket: "enfoque-creativo-de102.firebasestorage.app",
    messagingSenderId: "115099926176",
    appId: "1:115099926176:web:037c01750d90b02ffa13c5",
    measurementId: "G-BT2B6N36FN"
};
//Iniciar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

//Agregar producto
const agregarProducto = async (nombre, precio) => {
    try {
        await db.collection("carrito").add({ nombre, precio });
        await cargarCarrito();
    } catch (error) {
        console.error("No se puede agregar producto", error);
    }
}

//Cargar el carrito de productos
const cargarCarrito = async () => {
    const lista = document.getElementById("carrito");
    lista.innerHTML = "";
    let total = 0;

    const productos = await db.collection("carrito").get();
    productos.forEach(pro => {
        const elemento = pro.data();
        total += parseFloat(elemento.precio);

        const li = document.createElement("li");
        li.classList.add("item-carrito");

        // Nombre
        const spanNombre = document.createElement("span");
        spanNombre.textContent = elemento.nombre;
        spanNombre.classList.add("nombre");

        // Precio
        const spanPrecio = document.createElement("span");
        spanPrecio.textContent = `$${parseFloat(elemento.precio).toFixed(2)}`;
        spanPrecio.classList.add("precio");

        // Botón eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        //clic
        btnEliminar.addEventListener('click', async () => {
            try {
                await db.collection("carrito").doc(pro.id).delete();
                await cargarCarrito();
            } catch (error) {
                console.error("Error al eliminar el producto", error);
            }
        });
        // Contenedor botón para controlar ancho 
        const spanBoton = document.createElement("span");
        spanBoton.classList.add("contenedor-boton");
        spanBoton.appendChild(btnEliminar);

        // Agregar elementos al li
        li.appendChild(spanNombre);
        li.appendChild(spanPrecio);
        li.appendChild(btnEliminar);

        lista.appendChild(li);
    });

    // Mostrar total a pagar
    const totalCompra = document.getElementById("totalCompra");
    totalCompra.textContent = `Total: $${total.toFixed(2)}`;
};

// Botones productos
document.getElementById("botonJarro").addEventListener('click', () => {
    agregarProducto('Jarro personalizado', 5.00);
});

document.getElementById("botonSombrero").addEventListener('click', () => {
    agregarProducto('Sombrero Panamá hat con caja de madera', 35.00);
});

document.getElementById("botonRollup").addEventListener('click', () => {
    agregarProducto('Roll Up standar', 35.00);
});

document.getElementById("botonCargador").addEventListener('click', () => {
    agregarProducto('Cargador portátil waireles', 35.00);
});

document.getElementById("botonAgenda").addEventListener('click', () => {
    agregarProducto('Agenda personalizada 100 hojas', 15.00);
});

document.getElementById("botonAudifonos").addEventListener('click', () => {
    agregarProducto('Audífonos inalámbricos personalizados', 15.00);
});

// Cargar el carrito al iniciar la página
window.onload = () => cargarCarrito();