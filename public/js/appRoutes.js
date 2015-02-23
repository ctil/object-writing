angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
	.when('/', {
	    templateUrl: 'views/home.html',
	    controller: 'MainController'
	})
	.when('/session', {
	    templateUrl: 'views/session.html',
	    controller: 'SessionController'
	})
	.when('/history', {
	    templateUrl: 'views/history.html',
	    controller: 'HistoryController'
	});

	$locationProvider.html5Mode(true);
}]);
