function llamarAlumno(alumno, callback) {
    let llamadaAlumno = `Llamando a alumno: ${alumno}`

    //ejecutar la función callback
    callback(llamadaAlumno)
}

//definir función callback
const imprimir = (texto) => {
    console.log(texto)
}

//invocar la funci'on principal LlamarAlumno
llamarAlumno("Diana Adarme", imprimir)