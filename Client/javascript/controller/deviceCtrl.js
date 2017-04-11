(function(){
	'use strict'
	app.controller('DeviceCtrl', ['$scope','DeviceFactory','$location', 'CompanyFactory', 'StoresFactory'
		, function ($scope,DeviceFactory,$location,CompanyFactory, StoresFactory) {
			$scope.device = {};
			$scope.devices = [];
			$scope.preDevice = {};
			$scope.companys = [];
			$scope.stores = [];

			$scope.close = function(){
				$scope.title = "Form Create Devices "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.device
				delete $scope.preDevice
			}

			$scope.close();

			$scope.add = function(device){
				if($scope.type == 'Save'){
					DeviceFactory.create(device).then(function(response){
						$('#myModal').modal('hide');
						$scope.deviceList()
						delete $scope.device
					});
				}else{
					DeviceFactory.update(device).then(function(response){
						$('#myModal').modal('hide')
						$scope.deviceList()
						$scope.close()
						delete $scope.preDevices
						delete $scope.device
					})
				}
			}
			$scope.preDelete = function(device){
				$scope.preDevice = device;
			}

			$scope.preUpdate = function(device){
				$scope.device = {
					_id: device._id,
					name: device.name,
					stores_id: device.stores_id._id,
					company_id: device.company_id._id,
					EVMSCode: device.EVMSCode,
					idDevice: device.idDevice
				} 
				$scope.title = "Form Update Device "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				DeviceFactory.delete($scope.preDevice).then(function(response){
					delete $scope.devices
					delete $scope.preDevice
					$("#myModal2").modal('hide')
					$scope.deviceList()
				}, function(err){
					console.log(err)
				})
			}

			$scope.deviceList = function(){
				DeviceFactory.list().then(function(response){
					$scope.devices = response.data
				})
			}

			$scope.companyList = function(){
				CompanyFactory.list().then(function(response){
					$scope.companys = response.data;
				})
			}
			$scope.storeList = function(){
				StoresFactory.list().then(function(response){
					$scope.stores = response.data
				})
			}


		}])
})();