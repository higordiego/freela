'use strict'
module.exports  = (Organism) => 
  (req, res) => {
    const query = {$and: [{forgot: req.params.forgot}, {status: true}]}
    const mod   = {_id: 1, userName: 1}
    const success =  require('./ribossomos/success-200-json') (res)
    const error  = require('./ribossomos/error-json') (res)
    
    return Organism.findOne(query,mod)
                    .exec()
                    .then(success)
                    .catch(error)
  }

