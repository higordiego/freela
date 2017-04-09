(function(){
	'use strict'
	app.controller('ProfileCtrl', ['$scope','AuthService','$location', 'PainelFactory'
		, 'ProfileFactory'
		,function($scope,AuthService,$location,PainelFactory){
			$scope.profile = {};
			$scope.profiles = [];

			$scope.profileList = function(){
				ProfileFactory.list().then(function(response){
					$scope.profiles = response.data;
				})

			}
		}]);
})();
