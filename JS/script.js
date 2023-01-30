let bebida;
let cantidad;

const fernet = 800
const gin = 750
const ron = 800
const vermu = 645 


function edad (){
    let años = prompt('Ingrese su edad:')
    if (años>17) {
        alert('Bienvenido a ')
    } else {
    alert ('Acceso no permitido.')
}} 

function menu () {
    bebida = parseFloat(prompt('Hacé tu pedido: \n 1: Fernet Branca con Coca-Cola \n 2: Gin Bombay con Agua Tónica Sweeps \n 3: Ron Bacardi con Coca-Cola y Limón \n 4: Vermouth Artesanal con Soda'))
    switch (bebida) {
        case 1:
            cantidad = parseFloat(prompt('Seleccionaste Fernet Branca con Coca-Cola.\n Ingresá la cantidad'))
            break
        case 2:
            cantidad = parseFloat(prompt('Seleccionaste Gin Bombay con Agua Tónica Sweeps.\n Ingresá la cantidad'))
            break
        case 3:
            cantidad = parseFloat(prompt('Seleccionaste Ron Bacardi con Coca-Cola y Limón.\n Ingresá la cantidad'))
            break
        case 4:
            cantidad = parseFloat(prompt('Seleccionaste Vermouth Artesanal con Soda.\n Ingresá la cantidad'))
            break
        default:
            alert('Ingrese una opción válida.') 
    }

    return {
        bebidaElegida: bebida,
        cantidadElegida: cantidad
    }
        
    // pregunta = prompt('¿Desea seguir comprando? (Si/No)')
    // if (pregunta == 'si') {
    //     menu()
    // } else if (pregunta == 'no') {
    //     carrito()
    // } else {
    //     alert('Ingrese una opción válida.')
    //     let pregunta = prompt('¿Desea seguir comprando? (Si/No)')
    // }
}

function carrito () {
    if (bebida === 1) {
        alert('Se realizará la compra por $' + fernet * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else if (bebida === 2) {
        alert('Se realizará la compra por $' + gin * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else if (bebida === 3) {
        alert('Se realizará la compra por $' + ron * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else if (bebida === 4) {
        alert('Se realizará la compra por $' + vermu * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else {
        menu()
    }
}

function envio () {
    prompt('Ingrese una dirección para realizar el envío (ejemplo: Calle Falsa 123)')
    alert('Gracias por su compra!')
}


//          PROGRAMA
edad()
let ciclo = true

while (ciclo) {
    const {bebidaElegida, cantidadElegida} = menu()
    let pregunta = prompt('¿Desea seguir comprando? (Si/No)')
    if (pregunta = 'si') {
        const {bebidaElegida, cantidadElegida} = menu()
        let pregunta = prompt('¿Desea seguir comprando? (Si/No)')
    } else if (pregunta = 'no') {
        carrito()
    } else {
        alert('Ingrese una opción válida.')
    }  
}
carrito() 
envio()