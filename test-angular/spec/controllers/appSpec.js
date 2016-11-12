describe("Unit Testing Examples", function() {
	var $httpBackend, $rootScope, $scope, appCtrl;

	beforeEach(module('myApp'));
	beforeEach(inject(function($injector) {
		$rootScope = $injector.get('$rootScope');
		$scope = $rootScope.$new();

		var $controller = $injector.get('$controller');
		$httpBackend = $injector.get('$http');

		createController = function() {
			return $controller('appCtrl', { '$scope': $scope, '$http': $httpBackend });
		};
	}));

	it('Checking if the controller exists', function() {
		appCtrl = createController();
		expect(appCtrl).toBeDefined();
	});

});
