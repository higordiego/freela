module.exports = (app) => (req,res)=>{
	const jwt  	=  require('jsonwebtoken')
	const pass  =  require('../_quarks/password')
	const Employee = require('../_molecules/employee-model')
	
	Employee.findOne({userName: req.body.username},{token: 0})
	.exec()
	.then((employee)=>{
		if (!employee) {
			res.json({ success: false, message: 'Invalid Username or Password' });
		} else if (employee) {
			if(!pass.validate(employee.password, req.body.password)) {
				res.json({ success: false, message: 'Invalid Username or Password' });
			} else {
				var token = jwt.sign(employee, app.get('superSecret'), {
					expiresIn : new Date().setHours(new Date().getHours() + 5)
				});	
				Employee.update({_id: employee._id},{$set:{token: token}}).then((us)=>{
					res.json({
						success: true,
						message: 'Token Ativado',
						token: token
					});
				}).catch((err)=>{
					throw err;
				});

			};
		};
	})
	.catch((err)=> {throw err});
}