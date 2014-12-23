angular.module('SessionCtrl', []).controller('SessionController', ['$scope', '$http', 'settings', function($scope, $http, settings) {
    function updateWord() {
        $http.get('/api/word')
            .success(function(data) {
        	settings.word = data;
            })
            .error(function(data) {
        	console.log('Error: ' + data);
            });
    };

    $scope.settings = settings;

    $scope.updateWord = function() {
        updateWord();
    };
}]);
