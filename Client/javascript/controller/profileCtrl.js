(function(){
	'use strict'
	app.controller('ProfileCtrl', ['$scope','AuthService','$location', 'PainelFactory'
		, 'ProfileFactory', 'StaffFactory', '$state', 'Flash'
		,function($scope,AuthService,$location,PainelFactory,ProfileFactory,StaffFactory,$state,Flash){
			$scope.profileEmployee = {};
			$scope.preProfile = {};
			$scope.profiles = [];
			$scope.myProfile = {};
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
				$scope.profileEmployee.employee_id = profileEmployee.employee_id._id
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
			/*
				update senha
				*/
				$scope.profileDetails = function(){
					$scope.myProfile = AuthService.getUser();
				}

				$scope.profileUpdate = function(profile){
					var updateObject = {
						_id: profile._id,
						firstName: profile.firstName,
						lastName: profile.lastName,
						email: profile.email,
						password: profile.password
					}
					StaffFactory.updateMyProfile(updateObject).then(function(resp){
						Flash.clear()
						delete $scope.myProfile;
						AuthService.deleteUser();
						PainelFactory.detailsUser().then(function(response){
							console.log(response)
							$scope.myProfile = response.data
							AuthService.setUser($scope.user)
							Flash.create('primary', 'Update with success!');
						})

					})

				}

			}]);
})();
