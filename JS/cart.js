// Array de script.js
let myCart = JSON.parse(localStorage.getItem('myCart')) || [];
console.log(myCart)

// Carrito
const cartList = document.querySelector('#cart-list')
function showCart(){
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
        <button type="button" id="${item.id}" class="btn btn-secondary btn-delete">Elminar Producto</button>
        `
        cartList.append(cartListItems)
    });
    const buttons = document.querySelectorAll('.btn-delete')
    buttons.forEach (btn => btn.addEventListener('click', deleteItem))
}



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
        })}})
    localStorage.clear()
    console.clear()
})



// Borrar item

const deleteItem = (e) => {
    const id = e.target.id;
    const parsedId = parseInt(id)
    const index = myCart.findIndex (p => e.id === parsedId)
    myCart.splice(index, 1)
    localStorage.setItem("myCart", myCart) 
    showCart()
}

showCart()