module.exports = (app) => (req,res)=>{
	const jwt  	=  require('jsonwebtoken')
	const pass  =  require('../_quarks/password')
	const Employee = require('../_moleculas/employee-model')
	Employee.findOne({employeeName: req.body.username},{token: 0})
	.exec()
	.then((employee)=>{
		if (!employee) {
			res.json({ success: false, message: 'Invalid employeeName' });
		} else if (employee) {
			if(!pass.validate(employee.password, req.body.password)) {
				res.json({ success: false, message: 'Invalid password' });
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