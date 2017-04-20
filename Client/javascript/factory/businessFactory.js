(function(){
	'use strict'  
	app.factory('BusinessFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(dados){
					return $http.post(Config.api + 'business', dados)
				},
				list: function(){
					return $http.get(Config.api + 'business')
				},
				listOne: function(dados){
					console.log(dados)
					return $http.get(Config.api + 'business/'+ dados._id)
				},
				update: function(dados){
					return $http.put(Config.api + 'business/'+ dados._id , dados)
				},
				delete: function(dados){
					return $http.delete(Config.api + 'business/'+ dados._id)
				}
			};
		}]);
})();
