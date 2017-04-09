const mongoose = require('mongoose')
const Business = require('../../_molecules/business-group-model')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('description', 'valid description is required').notEmpty();
			req.assert('name', 'valid name is required').notEmpty();
			req.assert('business_id', 'valid business_id is required').notEmpty();
			
			const error = req.validationErrors();
			
			Business.findById({_id: req.body.business_id})
			  .then((business)=>{
			  		!business 
			  			? res.json({business_id: 'does not exist'}) 
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
