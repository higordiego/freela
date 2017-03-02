const mongoose = require('mongoose');
const Company = require('../../_molecules/company-model');
const Stores  = require('../../_molecules/stores-model');
const ctrl = {
	make: (req,res,next)=>{
		req.assert('name', 'valid name is required').notEmpty();
		req.assert('enable', 'valid enable is required').notEmpty();
		req.assert('idDevice', 'valid idDevice is required').notEmpty()
		req.assert('EVMSCode', 'valid EVMSCode is required').notEmpty()
		req.assert('company_id', 'valid company_id is required').notEmpty()
		req.assert('stores_id', 'valid stores_id is required').notEmpty()

		mongoose.Types.ObjectId.isValid(req.body.company_id) ?  next() : res.json({company_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body.stores_id) ?  next() : res.json({stores_id: 'Invalid!'})

		const error = req.validationErrors();

		Company.findById({_id: req.body.company_id})
			.then((company)=>{
				!company 
					? res.json({company_id: 'does not exist'})
					: Stores.findById({_id: req.body.stores_id})
						.then((stores)=>{
							!stores 
								? res.json({stores_id: 'does not exist'}) 	
								: error ? res.json(error)  : next();		 	
						});
			});
	},
	change: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
	},
	delete: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
	}
}

module.exports =  ctrl;

//iconv -f ISO-8859-1 -t utf-8 bairro.csv > bairro-utf8.csv
