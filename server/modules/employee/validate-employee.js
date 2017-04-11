const mongoose = require('mongoose')
const Profile  = require('../../_molecules/profile-model')
const Employee = require('../../_molecules/employee-model')
const ctrl = {
		make: (req,res,next)=>{
			req.assert('firstName', 'valid firstName is required').notEmpty();
			req.assert('lastName', 'valid firstName is required').notEmpty();
			req.assert('userName', 'valid firstName is required').notEmpty();
			req.assert('password', '6 to 20 characters required').len(6, 20);
			req.assert('email', 'valid email is required').isEmail();
			req.assert('status', 'valid status is required').notEmpty();
			req.assert('profile_id', 'valid profile_id is required').notEmpty();

			const error = req.validationErrors();
			Profile.findById({_id: req.body.profile_id})
			  .then((profile)=>{
			  	!profile 
			  			? res.json({profile_id: 'does not exist'}) 
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
