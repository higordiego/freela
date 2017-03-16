module.exports  = (Organism) => 
  (req, res) => {
    const query 	= {token: req.body.token}
    const retur     = {token:0, password:0,}
    
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.findOne(query,retur)
                    .exec()
                    .then(success)
                    .catch(error)
  }

