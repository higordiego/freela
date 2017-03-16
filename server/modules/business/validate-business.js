const mongoose = require('mongoose')
const Company   = require('../../_molecules/company-model')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('description', 'valid description is required').notEmpty();
			req.assert('name', 'valid name is required').notEmpty();
			req.assert('company_id', 'valid company_id is required').notEmpty();
			mongoose.Types.ObjectId.isValid(req.body.company_id) ?  next() : res.json({_id: 'Invalid!'})
			const error = req.validationErrors();
			Company.findById({_id: req.body.company_id})
			  .then((company)=>{
			  		!company 
			  			? res.json({company_id: 'does not exist'}) 
			  			: error ? res.json(error)  : next();
			  })	
		},
		change: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		},
		delete: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		}
	}

module.exports =  ctrl;
