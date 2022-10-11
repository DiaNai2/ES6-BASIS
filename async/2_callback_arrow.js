let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let endpoint = 'https://pokeapi.co/api/v2/type'

const exito = (response) => {
    const tipos = JSON.parse(response).results
    tipos.forEach((tipo) => {
        console.log(`Tipo: ${tipo.name}`)
        console.log('-----------------------------------')
    });
    // console.log(JSON.parse(response).results)
}

const fallo = (status) => {
    console.log(status)
}

const get_data = (endpoint, exito, fallo) => {
    //2.creamos el objeto de conexión
    let http = new XMLHttpRequest()
    //3. abrir una conexión a la API
    http.open('get', endpoint)
    //4. enciar soliciud (request) a la API
    http.send()
    //5. hacer el tratamiento de la response 
    http.onload = () => {
        if (http.status === 200) {

            exito(http.responseText)
        } else {
            fallo(http.status)
        }
    }
}

//ivocamos la función de get_data
get_data(endpoint, exito, fallo)