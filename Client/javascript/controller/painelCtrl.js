(function(){
	'use strict'
	app.controller('PainelCtrl', ['$scope','AuthService','$location', 'PainelFactory','$state','AuthService',
		function($scope,AuthService,$location,PainelFactory,$state){
			$scope.user = {};
			$scope.logout = function(){
				AuthService.logout();
				delete $scope.user
				$location.path('/');
			}

			$scope.profile = function(){
				$state.go('painel.profile')
			}

			$scope.detailsUser = function(){
				PainelFactory.detailsUser().then(function(response){
					$scope.user = response.data
					AuthService.setUser($scope.user)
				})
			}
		}]);
})();
