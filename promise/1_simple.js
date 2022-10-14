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

const get_data = (endpoint) => {
    //definir una promesa para al conexión a la API
    let promise = new Promise((resolve, reject) => {
        //2.creamos el objeto de conexión
        let http = new XMLHttpRequest()
        //3. abrir una conexión a la API
        http.open('get', endpoint)
        //4. enviar soliciud (request) a la API
        http.send()
        //5. hacer el tratamiento de la response 
        http.onload = () => {
            if (http.status === 200) {

                resolve(http.responseText)
            } else {
                reject(http.status)
            }
        }

    })
    return promise;


}

//ivocamos la función de get_data
get_data(endpoint)
    .then((response) => {
        exito(response)
    })
    .catch((status) =>{
        fallo(status)
    })