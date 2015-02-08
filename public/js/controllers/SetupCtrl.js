angular.module('SetupCtrl', []).controller('SetupController', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {
    function updateWord() {
        $http.get('/api/words')
            .success(function(data) {
		$scope.data.word = data;
            })
            .error(function(data) {
        	console.log('Error: ' + data);
            });
    };
    $scope.data = {};
    updateWord();
    $scope.data.minutes = 10;

    $scope.updateWord = function() {
        updateWord();
    };
    $scope.begin = function() {
	$modalInstance.close($scope.data);
    };
    $scope.cancel = function() {
	$modalInstance.close();
	location.href = '#/';
    };
}]);
