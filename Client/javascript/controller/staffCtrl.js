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

			$scope.updateFactoryDepartment = function(objeto){
				StaffFactory.update(objeto).then(function(response){
					delete $scope.staffs
					$scope.staffList()
					delete $scope.staff
					delete $scope.staffUpdateBusiness
				})	
			}

			$scope.updateStaffDepartment = function(staff){
				var recebe  = $scope.staffUpdateBusiness.departments.filter(function(objeto){
					return objeto == staff
				})
				if(!recebe){
					$scope.staffUpdateBusiness.departments.push(staff.addDepartment)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#department').modal('hide');
				}else if(!$scope.staffUpdateBusiness.departments.length){
					$scope.staffUpdateBusiness.departments.push(staff.addDepartment)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#department').modal('hide');
				}else{
					delete $scope.staffs
					$('#department').modal('hide');
					$scope.staffList()
					delete $scope.staff
					delete $scope.staffUpdateBusiness
				}
			}

			$scope.DeleteDepartment = function(){
				var recebe  = $scope.staffUpdateBusiness.departments.filter(function(objeto){
					return objeto != $scope.aux
				})
				$scope.staffUpdateBusiness.departments = recebe.filter(function(objeto){ return objeto._id })
				$('#departmentDelete').modal('hide')
				$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
				$scope.close();
			}

			$scope.deleteRegions = function(){
				console.log($scope.aux)
				var recebe  = $scope.staffUpdateBusiness.regions.filter(function(objeto){
					return objeto != $scope.aux
				})
				$scope.staffUpdateBusiness.regions = recebe.filter(function(objeto){ return objeto._id })
				$('#regionsDelete').modal('hide')
				$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
				$scope.close();
			}



			$scope.updateStaffStores = function(staff){
				$scope.staffUpdateBusiness.stores.push(staff.addStores)
				$('#store').modal('hide');
				$scope.updateFactoryDepartment($scope.staffUpdateBusiness)				
			}


			$scope.updateStaffStores = function(staff){
				var recebe  = $scope.staffUpdateBusiness.stores.filter(function(objeto){
					return objeto == staff
				})
				if(!recebe){
					$scope.staffUpdateBusiness.stores.push(staff.addStores)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#store').modal('hide');	
				}else if(!$scope.staffUpdateBusiness.stores.length){
					$scope.staffUpdateBusiness.stores.push(staff.addStores)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#store').modal('hide');	
				}else{
					delete $scope.staffs
					$('#store').modal('hide');
					$scope.staffList()
					delete $scope.staff
					delete $scope.staffUpdateBusiness
				}
			}

			$scope.deleteStores = function(){
				var recebe  = $scope.staffUpdateBusiness.stores.filter(function(objeto){
					return objeto != $scope.aux
				})
				$scope.staffUpdateBusiness.stores = recebe.filter(function(objeto){ return objeto._id })
				$('#storesDelete').modal('hide')
				$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
				$scope.close();
			}


			$scope.updateStaffRegions = function(staff){
				var recebe  = $scope.staffUpdateBusiness.regions.filter(function(objeto){
					return objeto == staff
				})
				if(!recebe){
					$scope.staffUpdateBusiness.regions.push(staff.addRegions)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#region').modal('hide');	
				}else if(!$scope.staffUpdateBusiness.regions.length){
					$scope.staffUpdateBusiness.regions.push(staff.addRegions)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#region').modal('hide');	
				}else{
					delete $scope.staffs
					$('#region').modal('hide');
					$scope.staffList()
					delete $scope.staff
					delete $scope.staffUpdateBusiness
				}
				
			}





		


			$scope.staffFactoryUpdate = function(objeto){
				StaffFactory.update(objeto).then(function(response){
					delete $scope.staffs
					$('#business').modal('hide');
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
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#business').modal('hide');
				}else if(!$scope.staffUpdateBusiness.business.length){
					$scope.staffUpdateBusiness.business.push(staff.addbusiness)
					$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
					$('#business').modal('hide');
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
				$scope.updateFactoryDepartment($scope.staffUpdateBusiness)
				$('#businessDelete').modal('hide')
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
				DepartmentFactory.list().then(function(response){
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