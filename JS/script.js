let bebida;
let cantidad;

const fernet = 800
const gin = 750
const ron = 800
const vermu = 645 


function edad (){
    let años = prompt('Ingrese su edad:')
    if (años>17) {
        alert('Bienvenido a Drunk Sloth')
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

function carrito (bebida, cantidadElegida) {
    if (bebida === 1) {
        alert('Se realizará la compra de Fernet Branca con Coca-Cola por $' + fernet * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else if (bebida === 2) {
        alert('Se realizará la compra de Gin Bombay con Agua Tónica Sweeps por $' + gin * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else if (bebida === 3) {
        alert('Se realizará la compra de Ron Bacardi con Coca-Cola y Limón por $' + ron * 1.12 *  cantidadElegida  + '\n (Precio final.)')
    } else if (bebida === 4) {
        alert('Se realizará la compra de Vermouth Artesanal con Soda por $' + vermu * 1.12 *  cantidadElegida  + '\n (Precio final.)')
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

let proceso;
do {
    const {bebidaElegida, cantidadElegida} = menu()
    let pregunta = prompt('¿Desea seguir comprando? (Si/No)')
        if (pregunta === 'si') {
            //Cómo puedo almacenar datos? 
            //const {bebidaElegida, cantidadElegida} = menu()
            //let pregunta = prompt('¿Desea seguir comprando? (Si/No)')   
        } else {
            carrito(bebidaElegida, cantidadElegida);
            envio();
            proceso = 'fin'
    }
} while (proceso != 'fin')
