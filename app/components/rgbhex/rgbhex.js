'use strict';

angular.module('myApp.rgbhex', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/rgbhex', {
    templateUrl: 'components/rgbhex/rgbhex.html',
    controller: 'RgbhexCtrl'
  });
}])

.controller('RgbhexCtrl', ['$scope', function($scope) {
    $scope.hex = '#ff0';
    $scope.rgb1 = 255;
    $scope.rgb2 = 25;
    $scope.rgb3 = 10;

    $scope.selectedColor = $scope.hex;
    $scope.convertToHex = function() {
        var rgb1 = parseInt($scope.rgb1, 10),
            rgb2 = parseInt($scope.rgb2, 10),
            rgb3 = parseInt($scope.rgb3, 10);

        if (rgb1 < 0 || rgb1 > 255) {
            $scope.rgb1Err = true;
            return;
        }
        if (rgb2 < 0 || rgb2 > 255) {
            $scope.rgb2Err = true;
            return;
        }
        if (rgb3 < 0 || rgb3 > 255) {
            $scope.rgb3Err = true;
            return;
        }
        var rgb1hex = rgb1.toString(16),
            rgb2hex = rgb2.toString(16),
            rgb3hex = rgb3.toString(16);

        if (rgb1 < 16) {
            rgb1hex = '0' + rgb1hex;
        }
        if (rgb2 < 16) {
            rgb2hex = '0' + rgb2hex;
        }
        if (rgb3 < 16) {
            rgb3hex = '0' + rgb3hex;
        }
        console.log(rgb1);
        console.log(rgb2);
        console.log(rgb3);
        $scope.rgb1Err = false;
        $scope.rgb2Err = false;
        $scope.rgb3Err = false;
        $scope.hex = '#' + rgb1hex + rgb2hex + rgb3hex;
        $scope.selectedColor = $scope.hex;
    };
    $scope.convertToRgb = function() {
        if (($scope.hex.length !== 4 && $scope.hex.length !== 7) || $scope.hex.substr(0,1) !== '#') {
            $scope.hexErr = true;
            return;
        }
        $scope.hexErr = false;
        if ($scope.hex.length === 4) {
            $scope.hex = '#' + $scope.hex.substr(1,1) + $scope.hex.substr(1,1)
                + $scope.hex.substr(2,1) + $scope.hex.substr(2,1)
                + $scope.hex.substr(3,1) + $scope.hex.substr(3,1);
        }
        $scope.rgb1 = parseInt($scope.hex.substr(1,2), 16);
        $scope.rgb2 = parseInt($scope.hex.substr(3,2), 16);
        $scope.rgb3 = parseInt($scope.hex.substr(5,2), 16);

        $scope.selectedColor = $scope.hex;
    };

    $scope.devHex = '#123456';
    $scope.devRgb = 'rgb(10,20,10)';
    $scope.devToHex = function() {
        if ($scope.devRgb.substr(0,4) !== 'rgb(') {
            return;
        }
        var rgb = $scope.devRgb.substr(4);
        var devRgb1, devRgb2, devRgb3;
        var posKomma1, posKomma2, posSluithaakje;
        posKomma1 = rgb.indexOf(',');
        if (posKomma1 === -1) {
            return;
        }
        posKomma2 = rgb.indexOf(',', posKomma1 + 1);
        if (posKomma2 === -1) {
            return;
        }
        posSluithaakje = rgb.indexOf(')', posKomma2 + 1);
        if (posSluithaakje === -1) {
            return;
        }
        devRgb1 = rgb.substr(0, posKomma1);//.toString(16);
        devRgb2 = rgb.substr(posKomma1 + 1, posKomma2 - posKomma1 - 1);//.toString(16);
        devRgb3 = rgb.substr(posKomma2 + 1, posSluithaakje - posKomma2 - 1);//.toString(16);
        var rgb1 = parseInt(devRgb1, 10);//.toString(16);
        var rgb2 = parseInt(devRgb2, 10);//.toString(16);
        var rgb3 = parseInt(devRgb3, 10);//.toString(16);
        var rgbh1 = rgb1.toString(16);
        var rgbh2 = rgb2.toString(16);
        var rgbh3 = rgb3.toString(16);
        if (rgb1 < 16) {
            rgbh1 = '0' + rgbh1;
        }
        if (rgb2 < 16) {
            rgbh2 = '0' + rgbh2;
        }
        if (rgb3 < 16) {
            rgbh3 = '0' + rgbh3;
        }
        $scope.devHex = '#' + rgbh1 + rgbh2 + rgbh3;

    };
    $scope.devToRgb = function() {
        if (($scope.devHex.length !== 7 && $scope.devHex.length !== 4) || $scope.devHex.substr(0,1) !== '#') {
            return;
        }
        if ($scope.devHex.length === 4) {
            var hex1 = parseInt($scope.devHex.substr(1,1) + $scope.devHex.substr(1,1), 16);
            var hex2 = parseInt($scope.devHex.substr(2,1) + $scope.devHex.substr(2,1), 16);
            var hex3 = parseInt($scope.devHex.substr(3,1) + $scope.devHex.substr(3,1), 16);
        }
        else {
            var hex1 = parseInt($scope.devHex.substr(1,2), 16);
            var hex2 = parseInt($scope.devHex.substr(3,2), 16);
            var hex3 = parseInt($scope.devHex.substr(5,2), 16);
        }
        $scope.devRgb = 'rgb(' + hex1 + ',' + hex2 + ',' + hex3 + ')';
    };
}]);