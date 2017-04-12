(function(){
	'use strict'
	app.controller('StaffCtrl', ['$scope', 'StaffFactory', 'StoresFactory', 'BusinessFactory','DepartmentFactory'
		, 'ProfileFactory', 'RegionFactory', '$state'
		, function ($scope,StaffFactory,StoresFactory,BusinessFactory,DepartmentFactory,ProfileFactory,RegionFactory,$state) {
			
			$scope.staff = {};	
			$scope.staffs = [];
			$scope.preStaff	= {};


			$scope.close = function(){
				$scope.title = "Form Create Staff "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.staff
				delete $scope.preStaff
			}

			$scope.close();

			
			$scope.staffList = function(){
				StaffFactory.list().then(function(response){
					$scope.staffs = response.data
				})
			}

			$scope.storesList = function(){
				StoresFactory.list().then(function(response){
					$scope.stores = response.data
				})
			}

			$scope.businessList = function(){
				BusinessFactory.list().then(function(response){
					$scope.business = response.data
				})
			}

			$scope.regionList = function(){
				RegionFactory.list().then(function(response){
					$scope.regions = response.data
				})
			}

			$scope.departmentList = function(){
				BusinessFactory.list().then(function(response){
					$scope.departments = response.data
				})
			}

			$scope.businessRoute = function(){
				$state.go('painel.staff.business')	
			}

			$scope.businessRoute()

			$scope.regionRoute = function(){
				$state.go('painel.staff.region')	
			}

			$scope.storeRoute = function(){
				$state.go('painel.staff.store')	
			}

			$scope.departmentRoute = function(){
				$state.go('painel.staff.department')	
			}

			
			


		}])
})();