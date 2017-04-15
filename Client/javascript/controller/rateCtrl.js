(function(){
	'use strict'
	app.controller('RateCtrl', ['$scope','$location','$state', 'RateFactory'
		, function($scope,$location,$state,RateFactory){
			$scope.rate = {};
			$scope.myAlert = {};

			$scope.myAlerts = [
			{
				city: 'Boston',
				storeNumber: 'Store 60',
				descriptionStore: 'Excessive Return Transaction',
				descriptionStoreMessage: 'I am alone, and feel the charm of existence in this spot..',
				prioritys: [
				{
					_id: '232193123921',
					name: 'Highest'
				},
				{
					_id: '23219312392132131',
					name: 'Highest priority'
				},
				{
					_id: '23219312392132132135',
					name: 'High priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Normal priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Low priority'
				}
				],
				priority:'23219312392132132135' 
			},
			{
				city: 'Boston',
				storeNumber: 'Store 70',
				descriptionStore: 'Excessive Return Transaction',
				descriptionStoreMessage: 'I am alone, and feel the charm of existence in this spot..',
				prioritys: [
				{
					_id: '232193123921',
					name: 'Highest'
				},
				{
					_id: '23219312392132131',
					name: 'Highest priority'
				},
				{
					_id: '23219312392132132135',
					name: 'High priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Normal priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Low priority'
				}
				],
				priority:'23219312392132132135' 
			},
			{
				city: 'Boston',
				storeNumber: 'Store 70',
				descriptionStore: 'Excessive Return Transaction',
				descriptionStoreMessage: 'I am alone, and feel the charm of existence in this spot..',
				prioritys: [
				{
					_id: '232193123921',
					name: 'Highest'
				},
				{
					_id: '23219312392132131',
					name: 'Highest priority'
				},
				{
					_id: '23219312392132132135',
					name: 'High priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Normal priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Low priority'
				}
				],
				priority:'23219312392132132135' 
			},
			{
				city: 'Texas',
				storeNumber: 'Store 10',
				descriptionStore: 'Excessive Return Transaction',
				descriptionStoreMessage: 'I am alone, and feel the charm of existence in this spot..',
				prioritys: [
				{
					_id: '232193123921',
					name: 'Highest'
				},
				{
					_id: '23219312392132131',
					name: 'Highest priority'
				},
				{
					_id: '23219312392132132135',
					name: 'High priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Normal priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Low priority'
				}
				],
				priority:'23219312392132132135' 
			},
			{
				city: 'Texas',
				storeNumber: 'Store 32',
				descriptionStore: 'Excessive Return Transaction',
				descriptionStoreMessage: 'I am alone, and feel the charm of existence in this spot..',
				prioritys: [
				{
					_id: '232193123921',
					name: 'Highest'
				},
				{
					_id: '23219312392132131',
					name: 'Highest priority'
				},
				{
					_id: '23219312392132132135',
					name: 'High priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Normal priority'
				},
				{
					_id: '23219312392132132135',
					name: 'Low priority'
				}
				],
				priority:'23219312392132132135' 
			}
			]
			$scope.pagination = $scope.myAlerts / 10 == 0 ? '1' : '0'
		}]);
})();
