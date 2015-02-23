angular.module('HistoryCtrl', []).controller('HistoryController', ['$scope', '$http', function($scope, $http) {
    $scope.sessions = [];
    $http.get('/api/sessions')
	.success(function(data) {
	    $scope.sessions = data;
	})
	.error(function(data) {
	    console.log('Error: ' + data);
	});
    
}]);
