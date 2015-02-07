angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainController'
	})
	.when('/session', {
	    templateUrl: 'views/session.html',
	    controller: 'SessionController'
	});

	$locationProvider.html5Mode(true);
}]);
