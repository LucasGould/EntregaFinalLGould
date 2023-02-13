
class Bebidas {
    constructor(id, nombre, precio, descripcion, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio
    this.descripcion = descripcion
}}

const lista = [
    {id: 1, nombre: "Fernet con Coca", precio: 900, descripcion: 'Fernet Branca con Coca-Cola'},
    {id: 2, nombre: "Gin-Tónic", precio: 850, descripcion: 'Gin Bombay con Agua Tónica Sweeps'},
    {id: 3, nombre: "Cuba Libre", precio: 950, descripcion: 'Ron Bacardi con Coca-Cola'},
    {id: 4, nombre: "Vermú Clásico", precio: 600, descripcion: 'Vermouth Artesanal con Soda'},
]

function opciones () {
    var idIngresado = parseFloat(prompt('Ingrese la bebida deseada: \n 1: Fernet Branca con Coca-Cola \n 2: Gin Bombay con Agua Tónica Sweeps \n 3: Ron Bacardi con Coca-Cola y Limón \n 4: Vermouth Artesanal con Soda'));
    const productoEncontrado = lista.find(producto => producto.id === idIngresado);
    console.log(productoEncontrado);
    carrito.push(productoEncontrado);
}

let carrito = [];

function verCarrito () {
    carrito.forEach((producto) =>
    alert(`Se ha seleccionado ${producto.nombre} por un precio de $${producto.precio}`))
}

function finalizarCompra () {
    const precioTotal = carrito.reduce((acc,trago) => acc + trago.precio, 0 );
    alert(`El total a pagar es de $${precioTotal}`)
    prompt('Ingrese una dirección para realizar el envío (ejemplo: Calle Falsa 123)')
}

let menu = parseFloat(prompt('Ingrese la opción deseada:\n 1. Comprar bebidas. \n 2. Ver carrito \n 3. Finalizar compra \n 4. Salir '))



//          PROGRAMA

while (menu !== 4) {
    if (menu === 1){
        opciones();
    }
    if (menu === 2) {
        verCarrito();
    }
    if (menu === 3){
        finalizarCompra()
    }

    menu = parseFloat(prompt('Vuelva a ingresar una opción:\n 1. Comprar bebidas. \n 2. Ver carrito \n 3. Finalizar compra \n 4. Salir '))
}
alert('Gracias por su compra!')

