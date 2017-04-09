(function(){
	'use strict'
	app.controller('BusinessCtrl', ['$scope','AuthService','$location', 'CompanyFactory','BusinessFactory',
		function($scope,AuthService,$location,CompanyFactory,BusinessFactory){
			$scope.companys = [];
			$scope.businessS = [];
			$scope.business = {};
			$scope.preBusiness = {};

			$scope.close = function(){
				$scope.title = "Form Create Business "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.business
			}

			$scope.add = function(business){
				console.log(business)
				if($scope.type == 'Save'){
					BusinessFactory.create(business).then(function(response){
						$('#myModal').modal('hide');
						$scope.businessList()
						delete $scope.business
					});
				}else{
					BusinessFactory.update(business).then(function(response){
						$('#myModal').modal('hide')
						$scope.businessList()
						$scope.close()
						delete $scope.businessS
						delete $scope.business
					})
				}
			}
			$scope.close()

			$scope.preDelete = function(business){
				$scope.preBusiness = business;
			}

			$scope.preUpdate = function(business){
				$scope.business = business
				$scope.business.company_id = business.company_id._id
				$scope.title = "Form Update Company "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				BusinessFactory.delete($scope.preBusiness).then(function(response){
					delete $scope.business
					delete $scope.preBusiness
					$("#myModal2").modal('hide')
					$scope.businessList()
				}, function(err){
					console.log(err)
				})
			}


			$scope.companyList = function(){
				CompanyFactory.list().then(function(response){
					$scope.companys = response.data
				})
			}
			
			$scope.businessList = function(){
				BusinessFactory.list().then(function(response){
					$scope.businessS = response.data
				})
			}
		}]);
})();
