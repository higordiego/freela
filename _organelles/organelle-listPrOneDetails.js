'use strict'
module.exports  = (Organism) => 
  (req, res) => {
    const query 	= {_id: req.params.id ,menuId: req.params.menu}
    const retur 	= {menuId: 1}
    
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.findOne(query,retur)
                    .exec()
                    .then(success)
                    .catch(error)
  }

