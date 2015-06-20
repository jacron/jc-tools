'use strict';

angular.module('myApp.mark', [
    'ngSanitize',
    'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mark', {
    templateUrl: 'components/mark/mark.html',
    controller: 'MarkCtrl'
  });
}])

.filter('toTrusted', function ($sce) {
  return function(input) {
      return $sce.trustAsHtml(input);
  };
})
;