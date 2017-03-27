(function(){
	'use strict'
	app.controller('CompanyCtrl', ['$scope','AuthService','$location', 'PainelFactory' , 'CompanyFactory',
		function($scope,AuthService,$location,PainelFactory, CompanyFactory){
			$scope.company = {};
			$scope.companys = [];

			$scope.add = function(company){
				CompanyFactory.create(company).then(function(response){
					$('#myModal').modal('hide');
					$scope.list()
					delete $scope.company
				});
			}

			$scope.delete = function(company){
				CompanyFactory.delete(company).then(function(response){
					delete $scope.companys
					$scope.list()
				}, function(err){
					console.log(err)
				})
			}

			$scope.list = function(){
				CompanyFactory.list().then(function(response){
					$scope.companys = response.data
				})
			}

		}]);
})();
