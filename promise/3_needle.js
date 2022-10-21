const needle = require('needle')

const url = 'https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=10'

needle('get', url )
        .then((response)=>{
            console.log(response)
        })
        .catch(()=>{
            console.log()
        })