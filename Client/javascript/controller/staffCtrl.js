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
			$scope.staffUpdateBusiness.regions = [];

			$scope.aux = {};


			$scope.select = function(staff){
				$scope.staffUpdateBusiness = staff
			}

			$scope.updateStaffRegions = function(staff){
				$scope.staffUpdateBusiness.regions.push(staff.addRegions)
				StaffFactory.update($scope.staffUpdateBusiness).then(function(response){
					delete $scope.staffs
					$('#regions').modal('hide');
					$scope.staffList()
					delete $scope.staff
					delete $scope.staffUpdateBusiness
				})	
			}

			$scope.updateStaffBusiness = function(staff){
				var recebe  = $scope.staffUpdateBusiness.business.filter(function(objeto){
					return objeto == staff
				})
				if(!recebe){
					$scope.staffUpdateBusiness.business.push(staff.addbusiness)
					StaffFactory.update($scope.staffUpdateBusiness).then(function(response){
						delete $scope.staffs
						$('#business').modal('hide');
						$scope.staffList()
						delete $scope.staff
						delete $scope.staffUpdateBusiness
					})	
				}else{
					delete $scope.staffs
					$('#business').modal('hide');
					$scope.staffList()
					delete $scope.staff
					delete $scope.staffUpdateBusiness
				}
			}

			$scope.add = function(staff){
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

			$scope.preDeleteBusiness = function(business){
				$scope.aux = business;
			}

			$scope.DeleteBusiness = function(){
				var recebe  = $scope.staffUpdateBusiness.business.filter(function(objeto){
					return objeto != $scope.aux
				})
				$scope.staffUpdateBusiness.business = recebe.filter(function(objeto){ return objeto._id })
				//$('#myModal').modal('hide')
				StaffFactory.update($scope.staffUpdateBusiness).then(function(response){
					$('#businessDelete').modal('hide')
					delete $scope.staffs
					delete $scope.staff
					delete $scope.staffUpdateBusiness
					$scope.staffList();
					$scope.close();
				})
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