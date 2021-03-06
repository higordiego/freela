const mongoose 		= require('mongoose');
const Stores   		= require('../../_molecules/stores-model')
const Departments   = require('../../_molecules/departments-model')
const Devices   = require('../../_molecules/devices-model')
const ctrl =  {
	make: (req,res,next)=>{

		req.assert('description', 'valid description is required').notEmpty();
		req.assert('name', 'valid name is required').notEmpty();
		req.assert('flag', 'flag  is required').notEmpty();
		req.assert('stores_id', 'valid stores_id is required').notEmpty();

		

		const error = req.validationErrors();

		Stores.findById({_id: req.body.stores_id})
			  .then((stores)=>{
			  		!stores 
			  			? res.json({stores_id: 'does not exist'}) 
			  			: error ? res.json(error)  : next();
			  })		
	},
	change: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'});
	},
	delete: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'});
	},
	dpDetails: (req,res,next)=>{
		req.assert('departments_id', 'valid departments_id is required').notEmpty();
		req.assert('EVMSCode', 'valid EVMSCode is required').notEmpty();
		req.assert('devices_id', 'valide deviceID  is required').notEmpty();
		req.assert('register', 'valide register is required').notEmpty();
		req.assert('employeeName', 'valide employeeName  is required').notEmpty();
		req.assert('employeeNum', 'valide employeeNum  is required').notEmpty();
		
		const error = req.validationErrors();

		Departments.findById({_id: req.body.departments_id})
			.then((departments)=>{
				!departments 
					? res.json({departments_id: 'does not exist'})
					: Devices.findById({_id: req.body.devices_id})
						.then((devices)=>{
							!devices 
								? res.json({devices_id: 'does not exist'}) 	
								: error ? res.json(error)  : next();		 	
						});
			});
	}
}
module.exports = ctrl;
