
module.exports = (Organism) => 
(req, res) => {
	const query = {_id: req.body._id}
	const mod   = req.body
	const success = require('./ribossomos/success-200-json')(res)
	const error = require('./ribossomos/error-json')(res)

	return Organism.update(query,mod)
				    .then(success)
					.catch(error)
}

