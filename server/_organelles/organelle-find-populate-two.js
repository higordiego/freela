module.exports  = (Organism)=> (PopulateOne) =>  
(PopulateTwo) => (req, res) => {
    const query = {}
    const success = require('./ribossomos/success-200-json')(res)
    const error = require('./ribossomos/error-json')(res)
    
    return Organism.find(query)
				    .populate(PopulateOne)
				    .populate(PopulateTwo)
				    .exec()
				    .then(success)
				    .catch(error)
}

