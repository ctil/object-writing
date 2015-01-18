angular.module('SessionCtrl', []).controller('SessionController', ['$scope', '$http', 'settings', function($scope, $http, settings) {
    $scope.settings = settings;
}]);
