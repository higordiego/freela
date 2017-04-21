(function(){
	'use strict'
	app.controller('DepartmentsCtrl', ['$scope','AuthService','$location', 'PainelFactory'
		, 'DepartmentFactory', 'DeviceFactory', 'StoresFactory'
		, function($scope,AuthService,$location,PainelFactory,DepartmentFactory,DeviceFactory,StoresFactory){
			$scope.department = {};
			$scope.departments = [];
			$scope.preDepartment = {};
			$scope.devices = [];
			$scope.devicesList = {};
			$scope.aux = {};

			$scope.close = function(){
				$scope.title = "Form Create Department"
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.department
				delete $scope.preDepartment
			}

			$scope.select = function(department){
				$scope.devicesList = department;
			}

			$scope.close()


			$scope.updateDepartment = function(department){
				$scope.devicesList.devices.push(department.addDepartment)
				DepartmentFactory.update($scope.devicesList).then(function(response){
					delete $scope.department
					delete $scope.preDepartment
					$('#device').modal('hide');
					$scope.departmentList()
					delete $scope.devicesList;
				})	
			}


			$scope.DeleteDevice = function(){
				var recebe  = $scope.devicesList.devices.filter(function(objeto){
					return objeto != $scope.aux
				})
				$scope.devicesList.devices = recebe.filter(function(objeto){ return objeto._id })
				//$('#myModal').modal('hide')
				DepartmentFactory.update($scope.devicesList).then(function(response){
					$('#deviceDelete').modal('hide')
					delete $scope.department
					delete $scope.devicesList
					delete $scope.preDepartment
					$scope.departmentList();
					$scope.close();
				})
			}

			$scope.preDeleteDepartmentDevice = function(device){
				$scope.aux = device;
			}

			$scope.updateDepartmentAdd = function(department){
				var recebe  = $scope.devicesList.devices.filter(function(objeto){
					return objeto == devices
				})
				if(!recebe){
					$scope.devicesList.devices.push(department.addDepartment)
					DepartmentFactory.update($scope.devicesList).then(function(response){
						delete $scope.department
						delete $scope.preDepartment
						$('#device').modal('hide');
						$scope.departmentList()
						delete $scope.devicesList;
					})	
				}else{
					delete $scope.department
					delete $scope.preDepartment
					$('#device').modal('hide');
					$scope.departmentList()
					delete $scope.devicesList;
				}
			}

			$scope.add = function(department){

				if($scope.type == 'Save'){
					DepartmentFactory.create(department).then(function(response){
						console.log(response.data)
						$('#myModal').modal('hide');
						$scope.departmentList()
						delete $scope.department
					});
				}else{
					DepartmentFactory.update(department).then(function(response){
						$('#myModal').modal('hide')
						$scope.departmentList()
						$scope.close()
						delete $scope.preDepartment
						delete $scope.department
					})
				}
			}
			$scope.preDelete = function(department){
				$scope.preDepartment = department;
			}

			$scope.preUpdate = function(department){
				$scope.department = {
					_id: department._id,
					name: department.name,
					stores_id: department.stores_id._id,
					devices_id: department.devices_id._id,
					description: department.description,
					EVMSCode: department.EVMSCode,
					flag: department.flag,
					register: department.register
				} 
				$scope.title = "Form Update Department "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				DepartmentFactory.delete($scope.preDepartment).then(function(response){
					delete $scope.departments
					delete $scope.preDepartment
					$("#myModal2").modal('hide')
					$scope.departmentList()
				}, function(err){
					console.log(err)
				})
			}

			$scope.departmentList = function(){
				DepartmentFactory.list().then(function(response){
					$scope.departments = response.data;
				})
			}

			$scope.listOneDepartment = function(department){
				console.log(department)
			}

			$scope.deviceList = function(){
				DeviceFactory.list().then(function(response){
					$scope.devices = response.data;
				})
			}

			$scope.storeList = function(){
				StoresFactory.list().then(function(response){
					$scope.stores = response.data
				})
			}

			
		}]);
})();

