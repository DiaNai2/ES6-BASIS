let colors = require('colors');

// const estudiante = {
//     id: 1,
//     nombre: 'Diana',
//     apellido: 'Adarme',
//     identificacion: 1084221235
// }

const g1 = [
    "Laura",
    "Carlos",
    "Ana"]

const g2 = [
    "Enrique",
    "Jairo",
    "Valeria"]

const g3 = [
    ...g1,
    "Diana",
    ...g2,
    "Duvan"]

const estudiante = {
        id: 1,
        nombre: 'Diana',
        apellido: 'Adarme',
        identificacion: 1084221235,
        amigos :g3
}
    

console.log(estudiante)

// const estudiantes = ["Laura", "Carlos", "Ana", "Jorge"]

//desestructurar el arreglo de estudiante

// let [, , A, J] = estudiantes

// console.log(A, J)
// let { nombre , identificacion} = estudiante

// console.log(nombre.rainbow)
// console.log(identificacion) 