const mongoose = require('mongoose')

const ctrl = {
	make: (req,res,next)=>{
		req.assert('description', 'valid description is required').notEmpty();
		req.assert('name', 'valid name is required').notEmpty()
		req.assert('code', 'valid flag is required').notEmpty()
		req.assert('flag', 'flag  is required').notEmpty()
		req.assert('stores_id', 'valid stores_id is required').notEmpty()
		const error = req.validationErrors();
		error ? res.json(error) :  next()	
	},
	change: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
	},
	delete: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalido!'})
	},
	dpDetails: (req,res,next)=>{
		req.assert('departments_id', 'valid departments_id is required').notEmpty();
		req.assert('EVMSCode', 'valid EVMSCode is required').notEmpty()
		req.assert('deviceID', 'valide deviceID  is required').notEmpty()
		req.assert('register', 'valide register is required').notEmpty()
		req.assert('employeeName', 'valide employeeName  is required').notEmpty()
		req.assert('employeeNum', 'valide employeeNum  is required').notEmpty()
		const error = req.validationErrors();
		error ? res.json(error) :  next()	
	}
}

module.exports =  ctrl;
