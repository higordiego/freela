(function(){
	'use strict'
	var online = true
	app.constant('Config', {
		api: online ? 'https://eyerson.herokuapp.com/api/' :'http://localhost:3001/api/',
		user: online ? 'https://eyerson.herokuapp.com/' : 'http://localhost:3001/'
	})
})()