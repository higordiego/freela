const mongoose = require('mongoose')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('transType', 'valid transType is required').notEmpty();
			req.assert('transTypeDesc', 'valid transTypeDesc is required').notEmpty();
			req.assert('active', 'valid active is required').notEmpty();
			req.assert('type', 'valid type is required').notEmpty();
			const error = req.validationErrors();
			error ? res.json(error) :  next()	
		},
		change: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		},
		delete: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		}
	}

module.exports =  ctrl;
