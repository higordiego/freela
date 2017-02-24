module.exports  = (Organism) => 
  (req, res) => {
    const query 	= {userName: req.params.username}
    console.log(req.params)
    const retur     = {business_id:1,regions_id:1,departments_id:1,stores_id:1}
    
    const success 	= require('./ribossomos/success-200-json') (res)
    const error  	= require('./ribossomos/error-json') (res)
    
    return Organism.findOne(query,retur)
                    .exec()
                    .then(success)
                    .catch(error)
  }

