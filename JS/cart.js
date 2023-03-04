// Array de script.js
var myCart = JSON.parse(localStorage.getItem('myCart'))
console.log(myCart)

// Carrito
const cartList = document.querySelector('#cart-list')
myCart.forEach((item) => {
    
    let cartListItems = document.createElement("li")
    cartListItems.classList.add("cart-display", "d-flex", "justify","row");
    cartListItems.innerHTML= `
    <div class="col-md-1">
        <img src="${item.img}" class="img-fluid rounded-start" alt=${item.nombre}>
      </div>
    <h4 class="cart-display_number col-2 ">ID N° ${item.id}</h4>
    <h4 class="cart-display_name col-3">${item.nombre}</h4>
    <h4 class="cart-display_q col-3">Cantidad: ${item.q}</h4>
    <h4 class="cart-display_subtotal col-3">Subtotal: $${item.precio * item.q}</h4>
    <button type="button col" id="btn-delete" class="btn btn-secondary" onClick="deleteItem(${item.index})">Elminar Producto</button>
    `
    cartList.append(cartListItems)
});

// Funcion: calcular el total
const totalFunc = myCart.reduce((acc, cart) =>{
    return acc + cart.precio * cart.q
},0)
console.log(totalFunc)


// Precio final + Botón pagar
const totalPrice = document.querySelector('#total-price')
let total = document.createElement("li")
total.classList.add("totals");
total.innerHTML = `
<h3>Total a Pagar: $${totalFunc}</h3>
<button type="button" id="btn-fin" class="btn btn-success boton-finalizar">Finalizar Compra</button>
`
totalPrice.append(total)

const btnFin = document.querySelector('#btn-fin')
btnFin.addEventListener('click', () => {
    Swal.fire({
        title: 'Medios de Pago',
        text: 'Elija su medio de pago:',
        buttons: ["Efectivo", "Débito/Crédito"],
        position: 'center',
    })
})




// Borrar item
// const deleteItem = (index) => {
//     const deleteProd = myCart.findIndex((e) =>{
//         return e === myCart[index].${id}
//     })
//     console.log(deleteProd)
//     // Toastify({
    //     text: "Producto Eliminado",
    //     duration: 3000,
    //     style: {
    //       backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    //     },
    //     }).showToast();
//     // localStorage.removeItem(deleteProd) 
// }

// const btnDelete = document.querySelector('#btn-delete')

// btnDelete.addEventListener('click', () => {
//    localStorage.removeItem('usuario') 
//     usuario = ''
//      titleUsuario.innerText = `Bienvenido ${usuario}`
// })