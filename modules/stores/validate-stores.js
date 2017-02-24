const mongoose = require('mongoose')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('description', 'valid description is required').notEmpty();
			req.assert('name', 'valid name is required').notEmpty()
			req.assert('code', 'valid code is required').notEmpty()
			req.assert('business_id', 'valid business_id is required').notEmpty()
			req.assert('regions_id', 'valid regions_id is required').notEmpty()
			const error = req.validationErrors();
			error ? res.json(error) :  next()	
		},
		change: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
		},
		delete: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
		}
	}

module.exports =  ctrl;
