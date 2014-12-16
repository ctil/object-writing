angular.module('SessionCtrl', []).controller('SessionController', function($scope, $http) {
    function updateWord() {
        $http.get('/api/word')
            .success(function(data) {
        	$scope.word = data;
            })
            .error(function(data) {
        	console.log('Error: ' + data);
            });
    };

    updateWord();
    $scope.timerMinutes = 10;

    $scope.incrementMinutes = function() {
	$scope.timerMinutes += 1;
    };
    $scope.decrementMinutes = function() {
	$scope.timerMinutes -= 1;
    };

    $scope.updateWord = function() {
        updateWord();
    };
});
