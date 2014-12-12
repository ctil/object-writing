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

    $scope.updateWord = function() {
        updateWord();
    };
});
