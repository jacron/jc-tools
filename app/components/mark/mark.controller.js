/*
 * Created by orion on 15-06-15.
 */

"use strict";

angular.module('myApp.mark')
    .controller('MarkCtrl', function ($scope, Util) {

        $scope.invoer = 'Plak hier uw tekst in (om het uit te proberen) met [haken].%3c%3d';
        $scope.mark = function () {
            $scope.uitvoer = Util.markHooks($scope.invoer);
        };
        $scope.handlePaste = function (evt) {
            var d = evt.clipboardData,
                text = d.getData('text/plain');

            $scope.uitvoer = Util.markHooks(text);
        };
        $scope.urldecode = function () {
            $scope.invoer = Util.urldecode($scope.invoer);
        };
        /*
        $timeout(function () {
            angular.element('.tekstvak').focus();
        });*/

    });