(function(){
	'use strict'
	app.controller('ProfileCtrl', ['$scope','AuthService','$location', 'PainelFactory'
		, 'ProfileFactory', 'StaffFactory'
		,function($scope,AuthService,$location,PainelFactory,ProfileFactory,StaffFactory){
			$scope.profileEmployee = {};
			$scope.preProfile = {};
			$scope.profiles = [];
			$scope.employees = [];

			$scope.profileList = function(){
				ProfileFactory.list().then(function(response){
					$scope.profiles = response.data;
				})
			}

			$scope.employeeList = function(){
				StaffFactory.list().then(function(response){
					$scope.employees = response.data;
				})
			}

			$scope.close = function(){
				$scope.title = "Form Create Profile "
				$scope.class = "btn btn-primary"
				$scope.type = 'Save'
				delete $scope.profileEmployee
				delete $scope.preProfile
			}

			$scope.close();

			$scope.add = function(profileEmployee){
				if($scope.type == 'Save'){
					ProfileFactory.create(profileEmployee).then(function(response){
						$('#myModal').modal('hide');
						$scope.profileList()
						delete $scope.profileEmployee
					}, function(error){
						console.log(error)
					});
				}else{
					ProfileFactory.update(profileEmployee).then(function(response){
						$('#myModal').modal('hide')
						$scope.profileList()
						$scope.close()
						delete $scope.profileEmployee
					})
				}
			}

			$scope.preDelete = function(profileEmployee){

				$scope.preProfile = profileEmployee;
			}

			$scope.preUpdate = function(profileEmployee){

				$scope.profileEmployee = profileEmployee
				$scope.title = "Form Update Region "
				$scope.class = "btn btn-info"
				$scope.type = 'Update'
			}

			$scope.delete = function(){
				ProfileFactory.delete($scope.preProfile).then(function(response){
					delete $scope.profileEmployee
					delete $scope.preProfile
					$("#myModal2").modal('hide')
					$scope.profileList()
				}, function(err){
					console.log(err)
				})
			}



		}]);
})();
