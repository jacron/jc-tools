'use strict';

angular.module('myApp.auto', [
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/auto', {
    templateUrl: 'components/auto/auto.html',
    controller: 'AutoCtrl as auto'
  });
}])
;