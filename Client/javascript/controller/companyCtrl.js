(function(){
	'use strict'
	app.controller('CompanyCtrl', ['$scope','AuthService','$location', 'PainelFactory' , 'CompanyFactory',
		function($scope,AuthService,$location,PainelFactory, CompanyFactory){
			$scope.company = {};
			$scope.companys = [];
			$scope.preCompany = {};

			$scope.close = function(){
				$scope.title = "Form Create Company "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.company
				delete $scope.preCompany
			}

			$scope.close()

			$scope.add = function(company){
				if($scope.type == 'Save'){
					CompanyFactory.create(company).then(function(response){
						$('#myModal').modal('hide');
						$scope.companyList()
						delete $scope.company
					});
				}else{
					CompanyFactory.update(company).then(function(response){
						$('#myModal').modal('hide')
						$scope.companyList()
						$scope.close()
						delete $scope.companys
						delete $scope.company
					})
				}
			}

			$scope.preDelete = function(company){
				$scope.preCompany = company;
			}

			$scope.preUpdate = function(company){
				$scope.company = company
				$scope.title = "Form Update Company "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				CompanyFactory.delete($scope.preCompany).then(function(response){
					delete $scope.companys
					delete $scope.preCompany
					$("#myModal2").modal('hide')
					$scope.companyList()
				}, function(err){
					console.log(err)
				})
			}

			$scope.companyList = function(){
				CompanyFactory.list().then(function(response){
					$scope.companys = response.data
				})
			}

		}]);
})();
