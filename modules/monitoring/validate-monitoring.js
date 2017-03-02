const mongoose = require('mongoose')
const Stores   = require('../../_molecules/stores-model')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('EVMSCode', 'valid EVMSCode is required').notEmpty();
			req.assert('EVMSStatus', 'valid EVMSStatus is required').notEmpty();
			req.assert('statusDevice', 'valid statusDevice is required').notEmpty();
			req.assert('statusAlerts', 'valid statusAlerts is required').notEmpty();
			req.assert('stores_id', 'valid company_id is required').notEmpty();
			mongoose.Types.ObjectId.isValid(req.body.stores_id) ?  next() : res.json({stores_id: 'Invalid!'})
			const error = req.validationErrors();
			Stores.findById({_id: req.body.stores_id})
			  .then((stores)=>{
			  		!stores 
			  			? res.json({stores_id: 'does not exist'}) 
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
