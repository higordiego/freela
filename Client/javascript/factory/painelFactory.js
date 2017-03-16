(function(){
	'use strict'  
	app.factory('PainelFactory', ['$http','Config', 'AuthService',
		function($http, Config,AuthService){
			return {
				detailsUser: function(){
					return $http.post(Config.api + 'employee/details/token' , {token: AuthService.getToken()})
				}
			};
		}]);
})();
