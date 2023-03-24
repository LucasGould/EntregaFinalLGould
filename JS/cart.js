// Array de script.js
let myCart = JSON.parse(sessionStorage.getItem('myCart')) || [];
console.log(myCart)

// Carrito
let cartList = document.querySelector('#cart-list')
function showCart(){
    cartList.innerHTML = ''
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
function finalPrice () {
    let totalFunc = myCart.reduce((acc, cart) =>{
        return acc + cart.precio * cart.q
    },0)
    console.log(totalFunc)
    return totalFunc
}

// Borrar item
let deleteItem = (e) => {
    const id = e.target.id;
    const parsedId = parseInt(id)
    const index = myCart.findIndex (e => e.id === parsedId)
    myCart.splice(index, 1)
    sessionStorage.setItem("myCart", JSON.stringify(myCart)) 
    
    showCart()
    
    // Recalcular precio
    finalPrice()

}

// Precio final
const totalPrice = document.querySelector('#total-price')
let total = document.createElement("li")
total.classList.add("totals");
total.innerHTML = `
<h3>Total a Pagar: $${parseFloat(finalPrice())}</h3>
<button type="button" id="btn-fin"" class="btn btn-success btn-fin" onClick= "pay()">Finalizar Compra</button>
`
totalPrice.append(total)

// Botón para pagar// 
const pay = () => {
    document.querySelector('.modal').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

// Cleave para modal
new Cleave('.cel',{
    prefix: '+54',
    delimiter: ' ',
    blocks: [3,2,4,4]
});
new Cleave('.creditcard',{
    creditCard: true,
    delimiter: '-',
    onCreditCardTypeChanged: function (type) {
        if (type === 'visa') {
            document.querySelector('.fa-cc-visa').classList.add('active');
        } else if (type === 'mastercard'){
            document.querySelector('.fa-cc-mastercard').classList.add('active');
        } else if (type === 'amex'){
            document.querySelector('.fa-cc-amex').classList.add('active');
        } else {
            document.querySelector('.fa-cc-visa').classList.remove('active');
            document.querySelector('.fa-cc-mastercard').classList.remove('active');
            document.querySelector('.fa-cc-amex').classList.remove('active')
        }
    }
});

showCart()