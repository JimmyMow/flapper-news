angular.module('flapperNews')
.factory('users', [
'$http',
function($http) {
  var o = {};

  o.get = function(id) {
    return $http.get('/users/' + id + '.json').then(function(res){
      return res.data;
    });
  };
  return o;
}]);
