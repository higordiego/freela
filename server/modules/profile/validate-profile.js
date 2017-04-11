const mongoose = require('mongoose')
const Profile  = require('../../_molecules/profile-model')
const ctrl = {
		make: (req,res,next)=>{
			req.assert('description', 'valid description is required').notEmpty();
			req.assert('employee_id', 'valid employee_id is required').notEmpty();
			const error = req.validationErrors();
			error ? res.json(error) :  next()	
		},
		change: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		},
		delete: (req,res,next)=>{
			mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
		},
		profileDetail: (req,res,next)=>{
			req.assert('profile_id', 'valid profile_id is required').notEmpty();
			req.assert('menuId', 'valid menuId is required').notEmpty()
			mongoose.Types.ObjectId.isValid(req.body.profile_id) ?  next() : res.json({profile_id: 'Invalid!'});
			const error = req.validationErrors();
			Profile.findById({_id: req.body.profile_id})
			  .then((profile)=>{
			  		!profile 
			  			? res.json({profile_id: 'does not exist'}) 
			  			: error ? res.json(error)  : next();
			  })		
		}
	}

module.exports =  ctrl;
