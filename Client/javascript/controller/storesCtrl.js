(function(){
	'use strict'
	app.controller('StoresCtrl', ['$scope','AuthService','$location', 'PainelFactory' ,
		function($scope,AuthService,$location,PainelFactory){
			$scope.user = {};
			$scope.user = AuthService.getUser();
			
		}]);
})();
