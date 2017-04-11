(function(){
	'use strict'  
	app.factory('StoresFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(store){
					return $http.post(Config.api + 'stores', store)
				},
				list: function(){
					return $http.get(Config.api + 'stores')
				},
				listOne: function(store){
					return $http.get(Config.api + 'stores/'+ store._id)
				},
				update: function(store){
					return $http.put(Config.api + 'stores/'+ store._id , store)
				},
				delete: function(store){
					return $http.delete(Config.api + 'stores/'+ store._id)
				}
			};
		}]);
})();
