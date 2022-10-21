const needle = require('needle')

const url = 'https://the-dune-api.herokuapp.com/quotes/5'

needle('get', url )
        .then((response)=>{
            console.log(response.body.forEach(element => {
              console.log(element.quote)  
              console.log(`♥ ♥ ♥ ♥ ♥`)
            }))
        })
        .catch(()=>{
            console.log()
        })