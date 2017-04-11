(function(){
	'use strict'
	var online = true
	app.constant('Config', {
		api: online ? 'https://api.higordiego.com.br/api/' :'http://localhost:3001/api/',
		user: online ? 'https://api.higordiego.com.br/' : 'http://localhost:3001/'
	})
})()