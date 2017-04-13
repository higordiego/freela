(function(){
	'use strict'  
	app.factory('RateFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(rate){
					return $http.post(Config.api + 'rates', rate)
				},
				list: function(){
					return $http.get(Config.api + 'rates')
				},
				listOne: function(region){
					return $http.get(Config.api + 'rates/'+ rate._id)
				},
				update: function(region){
					return $http.put(Config.api + 'rates/'+ rate._id , rate)
				},
				delete: function(region){
					return $http.delete(Config.api + 'rates/'+ rate._id)
				}
			};
		}]);
})();
