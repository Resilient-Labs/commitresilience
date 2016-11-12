// Export the controller
var myApp = angular.module('myApp', []);

// Defining wrapper Routes for our API
myApp.controller('appCtrl', function appCtrl($scope, $http) {
	//$scope.formData = {};
	$scope.pledgeData = {};

	$http.get('/models')
		.success(function(data) {
			$scope.pledges = data;
			console.log(data);
		})
		.error(function(data) {
			console.log("Error: " + data);
		});

	$scope.createModel = function() {
		$http.post('/models', $scope.pledgeData)
			.success(function(data) {
				$scope.pledgeData = {};
				$scope.pledges = data;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};

	$scope.deleteModel = function(id) {
		$http.delete('/models/' + id)
			.success(function(data) {
				$scope.pledges = data;
				console.log(data);
			})
			.error(function(data) {
				console.log("Error: " + data);
			});
	};
});
