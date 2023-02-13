// function edad (){
//     let anios = prompt('Ingrese su edad:')
//     if (anios>17) {
//         alert('Bienvenido a Drunk Sloth')
//     } else {
//     alert ('Acceso no permitido.')
// }} 

class Bebidas {
    constructor(id, nombre, precio, descripcion, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio
    this.descripcion = descripcion
    this.cantidad = cantidad
}}

const lista = [
    {id: 1, nombre: "Fernet con Coca", precio: 900, descripcion: 'Fernet Branca con Coca-Cola'},
    {id: 2, nombre: "Gin-Tónic", precio: 850, descripcion: 'Gin Bombay con Agua Tónica Sweeps'},
    {id: 3, nombre: "Cuba Libre", precio: 950, descripcion: 'Ron Bacardi con Coca-Cola'},
    {id: 4, nombre: "Vermú Clásico", precio: 600, descripcion: 'Vermouth Artesanal con Soda'},
]

function opciones () {
    let id = parseFloat(prompt('Ingrese la bebida deseada: \n 1: Fernet Branca con Coca-Cola \n 2: Gin Bombay con Agua Tónica Sweeps \n 3: Ron Bacardi con Coca-Cola y Limón \n 4: Vermouth Artesanal con Soda'));
    let cantidad = parseFloat(prompt('Ingrese la cantidad deseada'));
    const pedido = new 'pedidoFinal' (id, nombre, precio, descripcion, cantidad);
    carrito.push('pedidoFinal');
    alert('Se añadió exitosamente')
}

function verCarrito () {
    carrito.forEach((producto) =>
    alert(`Se han seleccionado ${producto.cantidad} ${producto.nombre} por un precio de ${producto.precio * producto.cantidad}`))
}

let carrito = [];

function envio (){
    prompt('Ingrese una dirección para realizar el envío (ejemplo: Calle Falsa 123)')
    alert('Gracias por su compra!')
}

var menu = parseFloat(prompt('Ingrese la opción deseada:\n 1. Comprar bebidas. \n 2. Ver carrito \n 3. Finalizar compra \n 4. Salir '))



//          PROGRAMA
while (menu !== 4) {
    // edad()

    if (menu == 1){
        opciones(carrito);
    }
    if (menu == 2) {
        verCarrito();
    }
    if (menu == 3){
        finalizarCompra()
    }
    else {
        alert('Ingrese una opción válida.')
    }
    let menu2 = parseFloat(prompt('Vuelva a ingresar una opción:\n 1. Comprar bebidas. \n 2. Ver carrito \n 3. Finalizar compra \n 4. Salir '))
    }