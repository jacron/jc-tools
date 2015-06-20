'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.mark',
    'myApp.rgbhex',
    'myApp.ip',
    'myApp.version',
    'myApp.util',
    'myApp.auto',
    'myApp.service',
    'jcDirectives'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
