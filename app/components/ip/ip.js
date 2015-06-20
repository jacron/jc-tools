'use strict';

angular.module('myApp.ip', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ip', {
    templateUrl: 'components/ip/ip.html',
    controller: 'IpCtrl'
  });
}])

.controller('IpCtrl', ['$scope', function() {
}]);