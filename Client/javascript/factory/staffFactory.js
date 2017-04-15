(function(){
	'use strict'  
	app.factory('StaffFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(dados){
					return $http.post(Config.api + 'employee', dados)
				},
				list: function(){
					return $http.get(Config.api + 'employee')
				},
				listOne: function(dados){
					return $http.get(Config.api + 'employee/'+ dados._id)
				},
				update: function(dados){
					return $http.put(Config.api + 'employee/'+ dados._id , dados)
				},
				delete: function(dados){
					return $http.delete(Config.api + 'employee/'+ dados._id)
				},
				updateMyProfile: function(dados){
					return $http.put(Config.api + 'employee/update/employeeProfile/'+ dados._id , dados)
				}
			};
		}]);
})();
