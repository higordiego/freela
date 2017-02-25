const mongoose 		= require('mongoose');
const Stores   		= require('../../_molecules/stores-model')
const Departments   = require('../../_molecules/departments-model')
const ctrl =  {
	make: (req,res,next)=>{

		req.assert('description', 'valid description is required').notEmpty();
		req.assert('name', 'valid name is required').notEmpty();
		req.assert('code', 'valid flag is required').notEmpty();
		req.assert('flag', 'flag  is required').notEmpty();
		req.assert('stores_id', 'valid stores_id is required').notEmpty();

		mongoose.Types.ObjectId.isValid(req.body.stores_id) ?  next() : res.json({stores_id: 'Invalid!'});

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
		req.assert('deviceID', 'valide deviceID  is required').notEmpty();
		req.assert('register', 'valide register is required').notEmpty();
		req.assert('employeeName', 'valide employeeName  is required').notEmpty();
		req.assert('employeeNum', 'valide employeeNum  is required').notEmpty();
		
		mongoose.Types.ObjectId.isValid(req.body.departments_id) ?  next() : res.json({departments_id: 'Invalid!'});

		const error = req.validationErrors();

		Departments.findById({_id: req.body.departments_id})
			  .then((stores)=>{
			  		!stores 
			  			? res.json({departments_id: 'does not exist'}) 
			  			: error ? res.json(error)  : next();
			  })	
	}
}
module.exports = ctrl;
