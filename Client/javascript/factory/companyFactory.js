(function(){
	'use strict'  
	app.factory('CompanyFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(company){
					return $http.post(Config.api + 'company', company)
				},
				list: function(){
					return $http.get(Config.api + 'company')
				},
				listOne: function(company){
					return $http.get(Config.api + 'company/'+ company._id)
				},
				update: function(company){
					return $http.put(Config.api + 'company/'+ company._id , company)
				},
				delete: function(company){
					return $http.delete(Config.api + 'company/'+ company._id)
				}
			};
		}]);
})();
