(function(){
	'use strict'
	app.controller('BusinessCtrl', ['$scope','AuthService','$location', 'PainelFactory' ,
		function($scope,AuthService,$location,PainelFactory){
			$scope.user = {};
			$scope.user = AuthService.getUser();
			
		}]);
})();
