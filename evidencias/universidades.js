const axios = require('axios')

let config = {
    method: 'get',
    url: 'http://universities.hipolabs.com/search?country=XXX'
}

const f = async () => {
    try {
        let response = await axios(config)
        response.data.forEach(element => {
            console.log(`Tipo: ${element.name}`)
            console.log(' ♠ ♠ ♠ ♠ ♠ ♠')
        });
    } catch (error) {
        console.error(error)
    }
}

f()
// axios(config)
//     .then((response) => {
//         return response.data.results
//     })

//     .then((data) => {

//     })
//     .catch((error) => {
//         console.error(error)
//     })