const mongoose = require('mongoose')

const ctrl = {
		make: (req,res,next)=>{
			req.assert('firstName', 'valid firstName is required').notEmpty();
			req.assert('lastName', 'valid firstName is required').notEmpty();
			req.assert('userName', 'valid firstName is required').notEmpty();
			req.assert('password', '6 to 20 characters required').len(6, 20);
			req.assert('email', 'valid email is required').isEmail();
			req.assert('status', 'valid name is required').notEmpty();
			req.assert('profile_id', 'valid profile_id is required').notEmpty();
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
