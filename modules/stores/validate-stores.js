const mongoose = require('mongoose');
const Business = require('../../_molecules/business-group-model');
const Regions  = require('../../_molecules/regions-model');
const ctrl = {
	make: (req,res,next)=>{
		req.assert('description', 'valid description is required').notEmpty();
		req.assert('name', 'valid name is required').notEmpty()
		req.assert('code', 'valid code is required').notEmpty()
		req.assert('business_id', 'valid business_id is required').notEmpty()
		req.assert('regions_id', 'valid regions_id is required').notEmpty()

		mongoose.Types.ObjectId.isValid(req.body.business_id) ?  next() : res.json({business_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body.regions_id) ?  next() : res.json({regions_id: 'Invalid!'})

		const error = req.validationErrors();

		Business.findById({_id: req.body.business_id})
			.then((business)=>{
				!business 
					? res.json({business_id: 'does not exist'}) 
					: Regions.findById({_id: req.body.regions_id})
						.then((regions)=>{
							!regions 
								? res.json({regions_id: 'does not exist'}) 	
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
