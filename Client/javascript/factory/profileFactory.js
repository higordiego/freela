(function(){
	'use strict'  
	app.factory('ProfileFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(profile){
					return $http.post(Config.api + 'profiles', profile)
				},
				list: function(){
					return $http.get(Config.api + 'profiles')
				},
				listOne: function(profile){
					return $http.get(Config.api + 'profiles/'+ profile._id)
				},
				update: function(profile){
					return $http.put(Config.api + 'profiles/'+ profile._id , profile)
				},
				delete: function(profile){
					return $http.delete(Config.api + 'profiles/'+ profile._id)
				}
			};
		}]);
})();
