(function(){
	'use strict'
	app.controller('StoresCtrl', ['$scope','AuthService','$location', 'PainelFactory' , 'BusinessFactory', 'RegionFactory'
		, 'StoresFactory'
		, function($scope,AuthService,$location,PainelFactory, BusinessFactory, RegionsFactory,StoresFactory){
			
			$scope.store = {};
			$scope.stores = [];
			$scope.regions =  [];
			$scope.business = [];
			$scope.preStore = {};

			$scope.close = function(){
				$scope.title = "Form Create Store "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.store
				delete $scope.preStore
			}

			$scope.close();

			$scope.add = function(store){

				if($scope.type == 'Save'){
					StoresFactory.create(store).then(function(response){
						$('#myModal').modal('hide');
						$scope.storeList()
						delete $scope.store
					});
				}else{
					StoresFactory.update(store).then(function(response){
						$('#myModal').modal('hide')
						$scope.storeList()
						$scope.close()
						delete $scope.stores
						delete $scope.store
					})
				}
			}

			$scope.preDelete = function(store){
				$scope.preStore = store;
			}

			$scope.preUpdate = function(store){
				$scope.store = {
					_id: store._id,
					name: store.name,
					description: store.description,
					code: store.code,
					business_id: store.business_id._id,
					regions_id: store.regions_id._id
				}
				$scope.title = "Form Update Store "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				StoresFactory.delete($scope.preStore).then(function(response){
					delete $scope.stores
					delete $scope.store
					$("#myModal2").modal('hide')
					$scope.storeList()
				}, function(err){
					console.log(err)
				})
			}

			$scope.storeList = function(){
				StoresFactory.list().then(function(response){
					$scope.stores = response.data;
				})
			}

			$scope.regionList = function(){
				RegionsFactory.list().then(function(response){
					$scope.regions = response.data;
				})
			}

			$scope.businessList = function(){
				BusinessFactory.list().then(function(response){
					$scope.business = response.data
				})
			}
			
		}]);
})();
