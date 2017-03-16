module.exports  = (Organism) => 
(req, res) => {
	const query = {$and: [{email: req.params.email}, {status: true}]}
	const success 	= require('./ribossomos/success-200-json')(res)
	const error 	= require('./ribossomos/error-json')(res)
	const randtoken = require('rand-token');
	const forgot = randtoken.generate(16);
	return Organism.findOne(query)
	.exec()
	.then((organism)=>{
		if(organism){
			const hbs = require('handlebars')
			const nodemailer = require('nodemailer')

			// const transporte = nodemailer.createTransport({
			// 	service: "Gmail",
			// 	auth: {
			// 		user: 'revisacarnissan@gmail.com',
			// 		pass: '<r66189184r>'
			// 	}
			// })

			const transporte = nodemailer.createTransport({
				host: "cpanel0176.hospedagemdesites.ws",
				port: '465',
				secure: true,
				tls: {rejectUnauthorized: false},
				auth: {
					user: 'eyeson@cloudmachine.com.br',
					pass: '@123Mudar'
				},
				
			});

			organism.forgot = forgot;
			organism.save();
			const template = hbs.compile('' +
				'<h1>Olá {{name}}!</h1>' +
				'<p>Para modificar sua senha </p>' +
				'<small>Clique <a href="http://127.0.0.1:8080/#!/new/{{forgot}}">aqui</a></small>' +
				'');
			const config = {
				remetente: 'Eyerson Sistema <eyeson@cloudmachine.com.br>',
				assunto: 'Redefine Password'
			}

			const html = template(organism);
			transporte.sendMail({
				from: config.remetente,
				to: organism.email,
				subject: config.assunto,
				html: html
			}, function(err) {
				if (err)
					throw err;
				console.log('E-mail para %s enviado!', organism.email);

			})
			res.json({ msg: true })		
		}else{
			res.json({msg: false})
		}
	})

	.catch(error)
}
