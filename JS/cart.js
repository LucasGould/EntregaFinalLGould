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
    <button type="button" id="btn-delete" class="btn btn-secondary btn-delete" onClick="deleteItem(${item.index})">Elminar Producto</button>
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
<button type="button" id="btn-fin" class="btn btn-success btn-fin">Finalizar Compra</button>
`
totalPrice.append(total)

const btnFin = document.querySelector('#btn-fin')
btnFin.addEventListener('click', () => {
    Swal.fire({
        title: 'Elija su medio de pago:',
        showCancelButton: true,
        confirmButtonText: 'Efectivo'
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:'Indique la dirección de envío',
            input: 'text',
          }).then(response => {
            if (response === true) {
            return response        
          }})
        }
        const delivery = response       //Variable para enviar
        localStorage.setItem("delivery", delivery)      // carga de variable al LS
        storage.clear(myCart)     
    })
})



// Borrar item
const btnDelete = document.querySelector('#btn-delete')

const deleteItem = (index) => {
    const deleteProd = myCart.findIndex((e) =>{
        return e.id === cartList[index].id
    })
    console.log(deleteProd)
    localStorage.removeItem(deleteProd) 
}



// btnDelete.addEventListener('click', () => {
//    localStorage.removeItem('usuario') 
//     usuario = ''
//      titleUsuario.innerText = `Bienvenido ${usuario}`
// })