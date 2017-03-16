(function(){
	'use strict'
	app.controller('ProfileCtrl', ['$scope','AuthService','$location', 'PainelFactory',
		function($scope,AuthService,$location,PainelFactory){
			$scope.user = {};
			$scope.user = AuthService.getUser();

		}]);
})();
