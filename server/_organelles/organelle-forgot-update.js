module.exports = (Organism) => 
(req, res) => {
	const query = {_id: req.body._id}
	const pass = require('../_quarks/password')

	function configPass (v) {
		return pass.hash(v);
	}

	if(req.body.password1 == req.body.password2){
		const success = require('./ribossomos/success-200-json')(res)
		const error   = require('./ribossomos/error-json')(res)
		return Organism.update(query, {$set: {password: configPass(req.body.password1) , forgot: ''}})
						.exec()
						.then(()=> res.json({msg: true}))
						.catch(error)	
	}else{
		res.json({msg: false})
	}
	
}

