module.exports = (Organism) => 
(req, res) => {
	const query = {_id: req.params.id}
	const pass = require('../_quarks/password')

	function configPass (v) {
		return pass.hash(v);
	}
	let mod = {};

	if(req.body.password){
		mod = {
			$set: {
				password: configPass(req.body.password) ,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email 
			}
		}
	}else{
		mod = {
			$set: {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email 
			}
		}
	}
	
	const success = require('./ribossomos/success-200-json')(res)
	const error   = require('./ribossomos/error-json')(res)
	return Organism.update(query, mod)
	.exec()
	.then(()=> res.json({msg: true}))
	.catch(error)	
	

}

