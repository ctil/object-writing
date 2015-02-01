angular.module('SessionCtrl', []).controller('SessionController', ['$scope', '$http', 'settings', '$interval', function($scope, $http, settings, $interval) {
    $scope.word = settings.word;
    $scope.data = {};
    $scope.data.text = '';
    var timerSeconds = settings.timerMinutes * 60; 
    $scope.secondsLeft = timerSeconds;
    $scope.minutesLeft = Math.floor(timerSeconds/60);
    document.getElementById('writing-area').focus();

    function updateTimer() {
	$scope.secondsLeft -= 1;
	$scope.minutesLeft = Math.floor($scope.secondsLeft/60);
	if ( $scope.secondsLeft <= 0) {
	    $interval.cancel(stop);
	    // TODO: use something other than an alert and go to a different view.
	    alert('Time is up!  Saving session.');
	    $scope.saveSession();
	}

    };
    var stop = $interval(updateTimer, 1000);

    $scope.saveSession = function() {
	var json = {
	    text: $scope.data.text,
	    time: new Date(),
	    word: $scope.word
	};
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
