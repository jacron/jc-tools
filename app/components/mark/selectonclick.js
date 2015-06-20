/*
 * Author: jan
 * Date: 25-jun-2014

 */


angular.module('myApp.mark')
    .directive('selectOnClick', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('click', function () {
                this.select();
            });
        }
    };
});