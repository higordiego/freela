(function(){
	'use strict'  
	app.factory('RegionFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(region){
					return $http.post(Config.api + 'regions', region)
				},
				list: function(){
					return $http.get(Config.api + 'regions')
				},
				listOne: function(region){
					return $http.get(Config.api + 'regions/'+ region._id)
				},
				update: function(region){
					return $http.put(Config.api + 'regions/'+ region._id , region)
				},
				delete: function(region){
					return $http.delete(Config.api + 'regions/'+ region._id)
				}
			};
		}]);
})();
