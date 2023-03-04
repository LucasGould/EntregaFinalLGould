
// Listado de productos
const list = [
    {id: 1, nombre: "Fernet con Coca", precio: 900, descripcion: 'Fernet Branca con Coca-Cola', img:'./resources/fernet.jpg'},
    {id: 2, nombre: "Gin-Tónic", precio: 850, descripcion: 'Gin Bombay con Agua Tónica Sweeps', img:'./resources/gin-tonic.jpg'},
    {id: 3, nombre: "Cuba Libre", precio: 950, descripcion: 'Ron Bacardi con Coca-Cola', img:'./resources/cuba-libre.jpg'},
    {id: 4, nombre: "Vermú Clásico", precio: 600, descripcion: 'Vermouth Artesanal con Soda', img:'./resources/vermu-soda.jpg'},
]

// Array para carrito
let cart = [];

// Display de la lista de proctos
const cards = document.getElementById("menu")
list.forEach((list, index) => {
    let cardOfCards = document.createElement("div");
    // cardOfCards.classList.add("col-sm-12", "col-lg-6", "container", "table"),
    cardOfCards.innerHTML=
    `<div class="card mb-2 col-md-6" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${list.img}" class="img-fluid rounded-start" alt=${list.nombre}>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${list.nombre}</h5>
          <p class="card-text">${list.descripcion}</p>
          <p class="card-text">$${list.precio}</p>
          <a href="#" class="btn btn-primary" id= "btn-add" onClick= "addToCart(${index})">Añadir al carrito</a>
        </div>
      </div>
    </div>
  </div>`
  cards.append(cardOfCards)
})

// Función para agregar productos al array de carrito + Toastify
const addToCart = (index) => {
    const selectedProd = cart.findIndex((e) =>{
        return e.id === list[index].id
    })
    if (selectedProd === -1){
        const addedProd = list[index];
        addedProd.q = 1
        cart.push(addedProd)
        sendToLS()
    } else {
        cart[selectedProd].q += 1;
        sendToLS()
    }
    console.log(cart)
    
    Toastify({
      text: "Añadido al Carrito",
      duration: 3000,
      style: {
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      }).showToast();
}

// Enviar carrito a LS
const sendToLS = () => {
    const cartJSON = JSON.stringify(cart)
    localStorage.setItem("myCart", cartJSON)
}