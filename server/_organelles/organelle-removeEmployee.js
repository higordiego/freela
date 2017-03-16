
module.exports  = (Organism) => 
  (req, res) => {
    const query     = {userName: req.params.username ,password: req.params.password, email: req.params.email}
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.remove(query)
                    .exec()
                    .then(success)
                    .catch(error)
  }

