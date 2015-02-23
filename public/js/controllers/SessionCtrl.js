angular.module('SessionCtrl', []).controller('SessionController', ['$scope', '$http', '$modal', '$interval', '$timeout', function($scope, $http, $modal, $interval, $timeout) {

    $scope.writingInProgress = false;
    var modalInstance = $modal.open({
      templateUrl: 'setupModal.html',
      controller: 'SetupController',
    });

    modalInstance.result.then(function(data) {
	$scope.word = data.word;
	$scope.minutes = data.minutes;	
	$scope.data = {};
	var timerSeconds = $scope.minutes * 60;
	$scope.data.text = '';
	$scope.secondsLeft = timerSeconds;
	$scope.minutesLeft = Math.floor(timerSeconds/60);
	$scope.writingInProgress = true;
	$timeout(function () {
	    document.getElementById('writing-area').focus();
	});

	// Start timer
	var timer = $interval(function () {
	    updateTimer(timer);
	}, 1000);
	$scope.$on('$destroy', function() {
	    $interval.cancel(timer);
	});
    });

    function updateTimer(timer) {
	$scope.secondsLeft -= 1;
	$scope.minutesLeft = Math.floor($scope.secondsLeft/60);
	if ( $scope.secondsLeft == 0) {
	    $interval.cancel(timer);
	    // TODO: use something other than an alert and go to a different view.
	    alert('Time is up!  Saving session.');
	    $scope.saveSession();
	    var elem = document.getElementById('writing-area');
	    elem.blur();
	    angular.element(elem).attr('readonly', true);
	}

    };

    $scope.saveSession = function() {
	var json = {
	    text: $scope.data.text,
	    date: new Date(),
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
