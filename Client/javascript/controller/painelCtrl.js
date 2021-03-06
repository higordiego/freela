(function(){
	'use strict'
	app.controller('PainelCtrl', ['$scope','AuthService','$location', 'PainelFactory','$state','AuthService',
		function($scope,AuthService,$location,PainelFactory,$state){
			$scope.user = {};
			$scope.logout = function(){
				console.log('testando')
				AuthService.logout();
				delete $scope.user
				$location.path('/');
			}

			$scope.dashboard = function(){
				$state.go('painel.dashboard')	
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
