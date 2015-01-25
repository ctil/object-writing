angular.module('SessionCtrl', []).controller('SessionController', ['$scope', '$http', 'settings', '$interval', function($scope, $http, settings, $interval) {
    $scope.word = settings.word;
    $scope.data = {};
    $scope.data.text = '';
    var timerSeconds = settings.timerMinutes * 60; 
    $scope.secondsLeft = timerSeconds;
    document.getElementById('writing-area').focus();

    function updateTimer() {
	$scope.secondsLeft -= 1;
	$scope.percentage = $scope.secondsLeft/(timerSeconds) * 100;
	if ( $scope.secondsLeft <= 0) {
	    $interval.cancel(stop);
	    alert('Time is up!');
	}

    };
    var stop = $interval(updateTimer, 1000);

    $scope.saveSession = function() {
	var json = {
	    text: $scope.data.text,
	    time: new Date(),
	    word: $scope.word
	};
	console.log(json);
	$http.post('/api/sessions', json)
	    .success(function(data) {
		console.log('Success: ', data);
	    })
	    .error(function(data ) {
		console.log('Error: ', data);
	    });
    };

    $scope.$on('$destroy', function() {
        $interval.cancel(stop);
    });
}]);
