angular.module('flapperNews')
.controller('UsersCtrl', [
'$scope',
'user',
function($scope, user) {
  $scope.user = user;
}]);
