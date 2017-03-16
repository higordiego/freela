'use strict'
module.exports  = (Organism) => 
  (req, res) => {
    const query 	= {employee: req.params.employee}
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.findById(query)
                    .exec()
                    .then(success)
                    .catch(error)
  }

