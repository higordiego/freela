(function(){
	'use strict'
	app.controller('RegionCtrl', ['$scope','AuthService','$location', 'RegionFactory', 'BusinessFactory',
		function($scope,AuthService,$location,RegionFactory,BusinessFactory){
			$scope.region = {};
			$scope.regions = [];
			$scope.businessS = [];
			$scope.preRegion = {};

			$scope.businessList = function(){
				BusinessFactory.list().then(function(response){
					$scope.businessS = response.data
				})
			}
			
			$scope.close = function(){
				$scope.title = "Form Create Region "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.region
				delete $scope.preRegion
			}

			$scope.close();

			$scope.add = function(region){
				if($scope.type == 'Save'){
					RegionFactory.create(region).then(function(response){
						$('#myModal').modal('hide');
						$scope.regionList()
						delete $scope.region
					}, function(error){
						console.log(error)
					});
				}else{
					RegionFactory.update(region).then(function(response){
						$('#myModal').modal('hide')
						$scope.regionList()
						$scope.close()
						delete $scope.region
					})
				}
			}

			$scope.preDelete = function(region){
				$scope.preRegion = region;
			}

			$scope.preUpdate = function(region){
				$scope.region = {
					_id: region._id,
					name: region.name,
					business_id: region.business_id._id,
					description: region.description
				}
				$scope.title = "Form Update Region "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				RegionFactory.delete($scope.preRegion).then(function(response){
					delete $scope.regions
					delete $scope.preRegion
					$("#myModal2").modal('hide')
					$scope.regionList()
				}, function(err){
					console.log(err)
				})
			}

			
			$scope.regionList = function(){
				RegionFactory.list().then(function(response){
					$scope.regions = response.data
				});
			}

		}]);
})();
