(function(){
	'use strict'  
	app.factory('DeviceFactory', ['$http','Config', 
		function($http, Config){
			return {
				create: function(device){
					return $http.post(Config.api + 'devices', device)
				},
				list: function(){
					return $http.get(Config.api + 'devices')
				},
				listOne: function(device){
					return $http.get(Config.api + 'devices/'+ device._id)
				},
				update: function(device){
					return $http.put(Config.api + 'devices/'+ device._id , device)
				},
				delete: function(device){
					return $http.delete(Config.api + 'devices/'+ device._id)
				}
			};
		}]);
})();
