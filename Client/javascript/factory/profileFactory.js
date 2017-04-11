(function(){
	'use strict'  
	app.factory('ProfileFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(profile){
					return $http.post(Config.api + 'profile', profile)
				},
				list: function(){
					return $http.get(Config.api + 'profile')
				},
				listOne: function(profile){
					return $http.get(Config.api + 'profile/'+ profile._id)
				},
				update: function(profile){
					return $http.put(Config.api + 'profile/'+ profile._id , profile)
				},
				delete: function(profile){
					return $http.delete(Config.api + 'profile/'+ profile._id)
				}
			};
		}]);
})();
