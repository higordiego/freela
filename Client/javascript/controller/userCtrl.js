(function(){
	'use strict'
	app.controller('UserCtrl', ['$scope','$state','AuthService','UserFactory','$stateParams','$location',
		function($scope,$state,AuthService,UserFactory,$stateParams,$location){
			$scope.auth = false;
			$scope.user = {};
			$scope.error = {};

			$scope.initForm = function(){
				$state.go('login.formLogin')	
				$scope.validate = false
			}
			$scope.login = function(user){
				AuthService.signin(user).then(function(response){
					if(!response.data.success){
						$scope.auth = true
						$scope.error = response.data.message
						delete $scope.user
					}else{
						AuthService.setToken(response.data.token);
						$state.go('painel')
						delete $scope.error 
						$scope.auth = false
						delete $scope.user
					}
				}, function(err){
					console.log(err)
				});
			};
			$scope.forgot = function(user){
				$scope.validate = false;
				UserFactory.forgot(user).then(function(response){
					if(response.data.msg){
						$scope.class = 'alert alert-success no-border'
						$scope.msg = 'Send you instructions in email'
						$scope.validate = true
						delete $scope.user
						setTimeout(function() {
							$state.go('login.formLogin')
							$scope.validate = false
						}, 3000);
					}else{
						$scope.class = 'alert alert-danger no-border'
						$scope.msg = 'Email not found'
						$scope.validate = true
						delete $scope.user
					}
				})
			}
			$scope.validateToken = function(){
				$scope.validateNew = false;
				if(!$stateParams.id) $location.path('#!/')
					UserFactory.validateToken($stateParams.id).then(function(response){
						console.log(response.data)
						if(!response.data){
							$location.path('#/')
						}
						$scope.user = response.data
					})
			}

			$scope.newPassword = function(user){
				if(user.password1.length >= 6 && user.password2.length >= 6){
					if(user.password1 == user.password2){
						user._id = $scope.user._id
						$scope.validateNew = false;
						UserFactory.passwordNew(user).then(function(response){
							$scope.validateNew = true;
							$scope.class = 'alert alert-success no-border'
							$scope.msg = 'Password update ;)'
							delete $scope.user	
							setTimeout(function() {
								$scope.initForm();
							}, 4000);
						})
					}else{
						$scope.validateNew = true;
							$scope.class = 'alert alert-danger no-border'
							$scope.msg = 'Passwords must be the same '
							delete $scope.user	
					}
				}else{
					$scope.validateNew = true;
					$scope.class = 'alert alert-info no-border'
					$scope.msg = 'Password contains at least 6 digits'
					delete $scope.user
				}
				
			}

		}])
})();