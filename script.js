window.addEventListener("scroll", function(){
    var navbar = document.getElementById("navbar")
    if (window.scrollY>0) {
        navbar.style.backgroundColor="blue";
    }else{
        navbar.style.backgroundColor="transparent";
    }
})

var swiper = new Swiper(".mySwiper-1", {
    slidesPerview: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navitagion: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerview: 3,
    spaceBetween: 30,
    loop: true,

    navitagion: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerview: 1
        },
        520: {
            slidesPerview: 2
        },
        950: {
            slidesPerview: 3
        }
    }
});



//Carrito

const carrito = document.getElementById('carrito');
const elemento1 = document.getElementById('lista-1');
const elemento2 = document.getElementById('lista-2');
const elemento3 = document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elemento1.addEventListener('click', comprarElemento);
    elemento2.addEventListener('click', comprarElemento);
    elemento3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);


    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento-querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);

}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>

        <td>
            ${elemento.titulo}
        </td>

        <td>
            ${elemento.precio}
        </td>

        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;   

    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.targetclassList.constains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}