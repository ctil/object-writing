angular.module('SetupCtrl', []).controller('SetupController', ['$scope', '$http', 'settings', function($scope, $http, settings) {
    function updateWord() {
        $http.get('/api/word')
            .success(function(data) {
		$scope.data.word = data;
            })
            .error(function(data) {
        	console.log('Error: ' + data);
            });
    };
    $scope.data = {};
    $scope.settings = settings;
    updateWord();
    $scope.data.minutes = 10;

    $scope.updateWord = function() {
        updateWord();
    };

    $scope.$watch('data.word', function(word) {
        settings.word = word;
    });
    $scope.$watch('data.minutes', function(minutes) {
        settings.timerMinutes = minutes;
    });
}]);
