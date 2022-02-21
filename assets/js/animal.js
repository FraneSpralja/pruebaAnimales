//Clases Padre

class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get nombre() {
        return this._nombre
    }

    set nombre(value) {
        this._nombre = value
    }

    get edad() {
        return this._edad
    }

    set edad(value) {
        this._edad = value
    }

    get img() {
        return this._img
    }

    set img(value) {
        this._img = value
    }

    get comentarios() {
        return this._comentarios
    }

    set comentarios(value) {
        this._comentarios = value
    }

    get sonido() {
        return this._sonido
    }

    set sonido(value) {
        this._sonido = value
    }
}

//Clases hija

//León

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir() {
        console.log('El León está rugiendo')
    }
}

//Lobo

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar() {

    }
}

//Oso

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    grunir() {

    }
}

//Serpiente

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear() {

    }
}

//Aguila

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar() {

    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };