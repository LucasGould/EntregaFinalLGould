// Verificación de edad
const { value: number } = Swal.fire({
  imageUrl: 'resources/barney.png',
  imageHeight: 200,
  imageAlt: 'Custom image',
  title: 'Ingrese su edad.',
  text: 'Los productos listados en esta página son exclusivos de mayores de edad.',
  input: 'number',
  confirmButtonText: 'Validar',
  allowOutsideClick: false,
  allowEscapeKey: false,
  color: 'blueviolet',
  background: '#100f0f',
}).then((result) => {
  if (result.value >= 18) {
    Swal.fire({
      title: '¡Bienvenido/a!',
      })
  } else {
    Swal.fire({
      title: 'Acceso no permitido.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      })
  }
});


// Listado de productos
// const list = [
//     {id: 1, nombre: "Fernet con Coca", precio: 900, descripcion: 'Fernet Branca con Coca-Cola', img:'./resources/fernet.jpg'},
//     {id: 2, nombre: "Gin-Tónic", precio: 850, descripcion: 'Gin Bombay con Agua Tónica Sweeps', img:'./resources/gin-tonic.jpg'},
//     {id: 3, nombre: "Cuba Libre", precio: 950, descripcion: 'Ron Bacardi con Coca-Cola', img:'./resources/cuba-libre.jpg'},
//     {id: 4, nombre: "Vermú Clásico", precio: 600, descripcion: 'Vermouth Artesanal con Soda', img:'./resources/vermu-soda.jpg'},
// ]

// Array para carrito
let cart = JSON.parse(sessionStorage.getItem('myCart')) || [];

// Traer array de datos desde data.json
async function list() {
  const resp = await fetch('./JS/data.json')
  const data = await resp.json()
  console.log(data)
  const cards = document.getElementById("menu")
  data.forEach((product, index) => {
    let cardOfCards = document.createElement("div");
    cardOfCards.classList.add("card-group"),
    cardOfCards.innerHTML=`
    <div class="card mb-2 col-md-6 cardshape" style="max-width: 540px">
      <div class="row g-0">
        <div class="col-md-4 cardimage">
          <img src="${product.img}" class="img-fluid rounded-start" alt=${product.nombre}>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.descripcion}</p>
            <p class="card-text">$${product.precio}</p>
            <a class="btn btn-primary" id= "btn-add" onClick= "addToCart(${index})">Añadir al carrito</a>
          </div>
        </div>
      </div>
    </div>`
  cards.append(cardOfCards)
  })
}

list()


// Función para agregar productos al array Cart + Toastify
const addToCart = async (index) => {
  const resp = await fetch('./JS/data.json')
  const list = await resp.json()
  
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
        backgroundColor: "linear-gradient(to right, #e7aee3, #d68cd2",
      },
      }).showToast();
}

// Enviar carrito a LS
const sendToLS = () => {
    const cartJSON = JSON.stringify(cart)
    sessionStorage.setItem("myCart", cartJSON)
}