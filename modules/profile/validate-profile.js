const mongoose = require('mongoose')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('description', 'valid description is required').notEmpty();
			req.assert('name', 'valid name is required').notEmpty()
			const error = req.validationErrors();
			error ? res.json(error) :  next()	
		},
		change: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
		},
		delete: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
		},
		profileDetail: (req,res,next)=>{
			req.assert('profile_id', 'valid profile_id is required').notEmpty();
			req.assert('menuId', 'valid menuId is required').notEmpty()
			const error = req.validationErrors();
			error ? res.json(error) :  next()	
		}
	}

module.exports =  ctrl;
