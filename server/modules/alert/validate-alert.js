const mongoose  	= require('mongoose')
const Company   	= require('../../_molecules/company-model')
const Employee 		= require('../../_molecules/employee-model')
const Stores 		= require('../../_molecules/stores-model')
const Transaction 	= require('../../_molecules/transaction-model')
const Profile 		= require('../../_molecules/profile-model')
const ctrl = {
	make: (req,res,next)=>{
		req.assert('title', 'valid title is required').notEmpty();
		req.assert('text', 'valid text is required').notEmpty();
		req.assert('employee_id', 'valid employee_id is required').notEmpty();
		req.assert('stores_id', 'valid stores_id is required').notEmpty();
		req.assert('transaction_id', 'valid transaction_id is required').notEmpty();
		req.assert('EVMSCode', 'valid EVMSCode is required').notEmpty();

		mongoose.Types.ObjectId.isValid(req.body.employee_id) ?  next() : res.json({employee_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body.stores_id) ?  next() : res.json({stores_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body.transaction_id) ?  next() : res.json({transaction_id: 'Invalid!'})
		const error = req.validationErrors();
		Employee.findById({_id: req.body.employee_id})
			.then((employee)=>{
				!employee
					? res.json({employee_id: 'does not exist'}) 
					: Stores.findById({_id: req.body.stores_id})
						.then((stores)=>{
							!stores
								? res.json({stores_id: 'does not exist'})
								: Transaction.findById({_id: req.body.transaction_id})
											.then((transaction)=>{
												!transaction
													? res.json({transaction_id: 'does not exist'})
													: error ? res.json(error)  : next();
											})
										})
			})	
	},
	change: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
	},
	employee: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.employee) ?  next() : res.json({_id: 'Invalid!'})
	},
	detailsComment: (req,res,next)=>{
		req.assert('_id', 'valid _id is required').notEmpty();
		req.assert('employee_id', 'valid employee_id is required').notEmpty();
		req.assert('comment', 'valid comment is required').notEmpty();
		mongoose.Types.ObjectId.isValid(req.body.employee_id) ?  next() : res.json({employee_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body._id) ?  next() : res.json({_id: 'Invalid!'})
		const error = req.validationErrors();
		Employee.findById({_id: req.body.employee_id})
				.then((employee)=>{
					!employee 
						? res.json({employee_id: 'does not exist'}) 
						: error ? res.json(error)  : next();
				})	
	},
	detailsStatus: (req,res,next)=>{
		req.assert('_id', 'valid _id is required').notEmpty();
		req.assert('profile_id', 'valid profile_id is required').notEmpty();
		req.assert('status', 'valid status is required').notEmpty();
		mongoose.Types.ObjectId.isValid(req.body.employee_id) ?  next() : res.json({profile_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body._id) ?  next() : res.json({_id: 'Invalid!'})
		const error = req.validationErrors();
		Profile.findById({_id: req.body.profile_id})
				.then((profile)=>{
					!profile 
						? res.json({profile_id: 'does not exist'}) 
						: error ? res.json(error)  : next();
				})	
	},


	forward: (req,res,next)=>{
		req.assert('_id', 'valid _id is required').notEmpty();
		req.assert('company_id', 'valid company_id is required').notEmpty();
		req.assert('profile_id', 'valid profile_id is required').notEmpty();
		mongoose.Types.ObjectId.isValid(req.body.profile_id) ?  next() : res.json({profile_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body.company_id) ?  next() : res.json({company_id: 'Invalid!'})
		mongoose.Types.ObjectId.isValid(req.body._id) ?  next() : res.json({_id: 'Invalid!'})
		const error = req.validationErrors();
		Company.findById({_id: req.body.company_id})
			   .then((company)=>{
			   		!company
			   			? res.json({company_id: 'does not exist'})
			   			: Profile.findById({_id: req.body.profile_id})
			   					 .then((profile)=>{
			   					 		!profile
			   					 			? res.json({profile_id: 'does not exist'})
			   					 			: error ? res.json(error)  : next();
			   					 })
			   })

	},
	delete: (req,res,next)=>{
		mongoose.Types.ObjectId.isValid(req.params.id) ?  next() : res.json({_id: 'Invalid!'})
	}
}

module.exports =  ctrl;
