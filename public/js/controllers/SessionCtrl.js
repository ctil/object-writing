angular.module('SessionCtrl', []).controller('SessionController', ['$scope', '$http', '$modal', '$interval', function($scope, $http, $modal, $interval) {
    $scope.word = 'hello';
    $scope.data = {};
    $scope.data.word = 'word';
    $scope.data.minutes = 10;
    $scope.data.text = '';
    $scope.timerMinutes = 10;

    var timerSeconds = $scope.timerMinutes * 60; 
    $scope.secondsLeft = timerSeconds;
    $scope.minutesLeft = Math.floor(timerSeconds/60);
    //document.getElementById('writing-area').focus();
    var modalInstance = $modal.open({
      templateUrl: 'setupModal.html',
      controller: 'SetupController',
    });

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

    $scope.beginWriting = function() {
	var stop = $interval(updateTimer, 1000);
	$scope.$on('$destroy', function() {
	    $interval.cancel(stop);
	});
    };

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

}]);
