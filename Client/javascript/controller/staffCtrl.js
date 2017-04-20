(function(){
	'use strict'
	app.controller('StaffCtrl', ['$scope', 'StaffFactory', 'StoresFactory', 'BusinessFactory','DepartmentFactory'
		, 'ProfileFactory', 'RegionFactory', '$state'
		, function ($scope,StaffFactory,StoresFactory,BusinessFactory,DepartmentFactory,ProfileFactory,RegionFactory,$state) {
			
			$scope.staff = {};	
			$scope.staffs = [];
			$scope.preStaff	= {};
			$scope.businessS = []
			$scope.staffUpdateBusiness = {};


			$scope.select = function(staff){
				$scope.staffUpdateBusiness = staff
			}

			$scope.updateStaffBusiness = function(staff){
				
				$scope.staffUpdateBusiness.business.push(staff.addbusiness)
				console.log($scope.staffUpdateBusiness)
				$('#business').modal('hide');
				StaffFactory.update($scope.staffUpdateBusiness).then(function(response){
					console.log(response)
					$scope.staffList();
				})
			}

			$scope.add = function(staff){
				console.log(staff)
				if($scope.type == 'Save'){
					staff.password = staff.password1

					StaffFactory.create(staff).then(function(response){
						delete $scope.staffs
						$('#myModal').modal('hide');
						$scope.staffList()
						delete $scope.staff
					});

				}else{
					StaffFactory.update(staff).then(function(response){
						$('#myModal').modal('hide')
						delete $scope.staffs
						delete $scope.staff
						$scope.staffList();
						$scope.close();
					})
				}
			}


			$scope.preDelete = function(staff){
				delete staff.password 
				$scope.preStaff = staff;
			}

			$scope.preUpdate = function(staff){
				delete staff.password
				$scope.staff = staff
				$scope.title = "Form Update Staff "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				StaffFactory.delete($scope.preStaff).then(function(response){
					delete $scope.staff
					delete $scope.preStaff
					$("#myModal2").modal('hide')
					$scope.staffList()
				}, function(err){
					console.log(err)
				})
			}

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
					console.log(response.data)
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
					$scope.businessS = response.data
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