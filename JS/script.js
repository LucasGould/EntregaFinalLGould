function edad (){
    let años = prompt('Ingrese su edad:')
    if (años>17) {
        alert('Bienvenido a ')
    } else {
    alert ('Acceso no permitido.')
}} 

function menu () {
    let bebida = parseFloat(prompt('Hacé tu pedido: \n 1: Fernet Branca con Coca-Cola \n 2: Gin Bombay con Agua Tónica Sweeps \n 3: Ron Bacardi con Coca-Cola y Limón \n 4: Vermouth Artesanal con Soda'))
    switch (bebida) {
        case 1:
            let cantidad1 = parseFloat(prompt('Seleccionaste Fernet Branca con Coca-Cola.\n Ingresá la cantidad'))
            break
        case 2:
            let cantidad2 = parseFloat(prompt('Seleccionaste Gin Bombay con Agua Tónica Sweeps.\n Ingresá la cantidad'))
            break
        case 3:
            let cantidad3 = parseFloat(prompt('Seleccionaste Ron Bacardi con Coca-Cola y Limón.\n Ingresá la cantidad'))
            break
        case 3:
            let cantidad4 = parseFloat(prompt('Seleccionaste Vermouth Artesanal con Soda.\n Ingresá la cantidad'))
            break
        default:
            alert('Ingrese una opción válida.')
    
        let cantidad = cantidad1 + cantidad2 + cantidad3 + cantidad4    
    }

    // let pregunta = prompt('¿Desea seguir comprando? (Si/No)')
    // if (pregunta === 'si') {
    //     menu()
    // } else if (pregunta === 'no') {
    //     carrito()
    // } else {
    //     alert('Ingrese una opción válida.')
    //     let pregunta = prompt('¿Desea seguir comprando? (Si/No)')
    // }
}

function carrito () {
    if (bebida === 1) {
        alert('Se realizará la compra por' + fernet * 1.12 * cantidad1  + '\n (Precio final.)')
    } else if (bebida === 2) {
        alert('Se realizará la compra por' + gin * 1.12 * cantidad2  + '\n (Precio final.)')
    } else if (bebida === 3) {
        alert('Se realizará la compra por' + ron * 1.12 * cantidad3  + '\n (Precio final.)')
    } else if (bebida === 4) {
        alert('Se realizará la compra por' + vermu * 1.12 * cantidad4  + '\n (Precio final.)')
    } else {
        menu()
    }
}

const fernet = 800
const gin = 750
const ron = 800
const vermu = 645 


//          PROGRAMA
edad()
menu()
carrito()