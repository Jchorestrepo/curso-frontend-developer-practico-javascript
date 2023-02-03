const menuDesktop = document.querySelector('.desktop-menu');
const navEmail = document.querySelector('.navbar-email');
/* Menu Hamburguesa mobile */
const menuhambur = document.querySelector('.menu');
const menumobile = document.querySelector('.mobile-menu');
/* Carrito */
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const carrito = document.querySelector('.product-detail');
/* Tienda */
const carContainer = document.querySelector('.cards-container');




function mostrarCarrito() {
    carrito.classList.toggle('inactive');
    menumobile.classList.add('inactive');
}

//Otra forma de hacer que aparezca y desaparezca el menu!
/* navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
}); */

navEmail.addEventListener('click', inactivarmenudesktop); //Menu Cuenta
menuhambur.addEventListener('click', mostrarmenu); //Menu Categorias
iconCarrito.addEventListener('click', mostrarCarrito) //Mostrar Carrito

function inactivarmenudesktop() {
    menuDesktop.classList.toggle('inactive');
    carrito.classList.add('inactive');
    menumobile.classList.toggle('inactive');
}

function mostrarmenu() {
    menumobile.classList.toggle('inactive');
    carrito.classList.add('inactive');
}

//Tienda

const productosArray = [];
productosArray.push(
    {
        nombre: "bicibleta",
        precio: 120,
        imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        nombre: "Patin",
        precio: 140,
        imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        nombre: "MonoPatin",
        precio: 340,
        imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }, {
    nombre: "Triciclo",
    precio: 540,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}, {
    nombre: "bicibleta",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},
    {
        nombre: "Patin",
        precio: 140,
        imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        nombre: "MonoPatin",
        precio: 340,
        imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    }, {
    nombre: "Triciclo",
    precio: 540,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});



function renderProducts(arr) {
    for (producto of arr) {
        const productCard = document.createElement('div');

        const productoimagen = document.createElement('img');
        const productoInfo = document.createElement('div');
        const productDiv = document.createElement('div');
        const precio = document.createElement('p');
        const nombre = document.createElement('p');
        const figure = document.createElement('figure');
        const imagenicocarrito = document.createElement('img');


        productCard.classList.add('product-card');


        productoimagen.setAttribute('src', producto.imagen);

        productCard.append(productoimagen, productoInfo);


        productoInfo.classList.add('product-info');
        productoInfo.append(productDiv, figure);



        precio.innerText = ("$ " + producto.precio);

        nombre.innerText = (producto.nombre);

        productDiv.append(precio, nombre);



        imagenicocarrito.setAttribute('src', "./icons/bt_add_to_cart.svg");

        figure.appendChild(imagenicocarrito);

        carContainer.appendChild(productCard);

    }
}

renderProducts(productosArray);