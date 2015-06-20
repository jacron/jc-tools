/*
 * Author: jan
 * Date: 25-jun-2014

 */


angular.module('myApp.mark')
    .directive('selectOnFocus', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('focus', function () {
                this.select();

                // Work around Chrome's little problem
                 this.onmouseup = function() {
                     // Prevent further mouseup intervention
                     this.onmouseup = null;
                     return false;
                 };
            });
        }
    };
});