'use strict'
module.exports  = (Organism) => 
  (req, res) => {
    const query 	= {stores_id: req.params.id}
    const retur     = {store_id:1,name:1,flag:1}
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.findOne(query,retur)
                    .exec()
                    .then(success)
                    .catch(error)
  }

