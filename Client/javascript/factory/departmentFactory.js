(function(){
	'use strict'  
	app.factory('DepartmentFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(department){
					return $http.post(Config.api + 'departments', department)
				},
				list: function(){
					return $http.get(Config.api + 'departments')
				},
				listOne: function(department){
					return $http.get(Config.api + 'departments/'+ department._id)
				},
				update: function(department){
					return $http.put(Config.api + 'departments/'+ department._id , department)
				},
				delete: function(department){
					return $http.delete(Config.api + 'departments/'+ department._id)
				}
			};
		}]);
})();
