import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

const url = "../../animales.json";

let animalesObjt = {}; //capturar los objetos de animales.
let arrayAnimales = []; //capturar los objetos en un array para recorrer y pintar

//Capturar objetos del JSON
(async() => {

    try {
        const res = await fetch("animales.json");

        console.log(res); //status: true;

        const { animales } = await res.json();

        animales.forEach(animal => {
            animalesObjt[animal.name] = animal
        });

    } catch (err) {
        console.log(err);
    }
})()

console.log(animalesObjt); //true

//Llamar elementos del DOM
const formulario = document.querySelector('#formulario')
const rowAnimales = document.querySelector('#Animales');

const selectAnimal = document.querySelector('#animal');
const edad = document.querySelector('#edad');
const comentariosAnimal = document.querySelector('#comentarios');
const preview = document.querySelector('#preview');
const audio = document.querySelector('#player');

//Pintar imagen preview al seleccionar el animal
selectAnimal.addEventListener('change', (e) => {
    preview.innerHTML = `
    <img src="assets/imgs/${animalesObjt[e.target.value].imagen}" alt="" class="img-thumbnail m-auto">
    `
});

//Pintar animales
const pintarAnimales = () => {

    arrayAnimales.forEach((animal) => {
        rowAnimales.innerHTML += `
        <article class="card col">
            <img src="assets/imgs/${animal._img}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${animal._nombre}</h5>
                <p>${animal._edad}</p>
                <p>${animal._comentarios}</p>
            </div>
        </article>
        `
    })
};

//Evento submit en el formulario
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    //Instanciar animales
    if (selectAnimal.value === 'Leon') {

        const leon = new Leon(
            selectAnimal.value,
            edad.value,
            animalesObjt[selectAnimal.value].imagen,
            comentariosAnimal.value,
            "El león ruge",
        );

        console.log(leon);
        arrayAnimales.push(leon) //Agregar los objetos instanciados a a arrayAnimales[];
    }

    if (selectAnimal.value === 'Oso') {

        const oso = new Oso(
            selectAnimal.value,
            edad.value,
            animalesObjt[selectAnimal.value].imagen,
            comentariosAnimal.value,
            "El Oso Gruñe",
        );

        console.log(oso);
        arrayAnimales.push(oso) //Agregar los objetos instanciados a a arrayAnimales[];
    }

    if (selectAnimal.value === 'Lobo') {

        const lobo = new Lobo(
            selectAnimal.value,
            edad.value,
            animalesObjt[selectAnimal.value].imagen,
            comentariosAnimal.value,
            "El lobo Aulla",
        );

        console.log(lobo);
        arrayAnimales.push(lobo) //Agregar los objetos instanciados a a arrayAnimales[];
    }

    if (selectAnimal.value === 'Serpiente') {

        const serpiente = new Serpiente(
            selectAnimal.value,
            edad.value,
            animalesObjt[selectAnimal.value].imagen,
            comentariosAnimal.value,
            "El Serpiente sisea",
        );

        console.log(serpiente);
        arrayAnimales.push(serpiente) //Agregar los objetos instanciados a a arrayAnimales[];
    }

    if (selectAnimal.value === 'Aguila') {

        const aguila = new Aguila(
            selectAnimal.value,
            edad.value,
            animalesObjt[selectAnimal.value].imagen,
            comentariosAnimal.value,
            "El Aguila Chilla",
        );

        console.log(aguila);
        arrayAnimales.push(aguila) //Agregar los objetos instanciados a a arrayAnimales[];
    }

    console.log(arrayAnimales); //True
    pintarAnimales();
});