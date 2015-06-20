/**
 * service gets data from remote
 * Created by orion on 20-06-15.
 */
'use strict';

angular.module('myApp.service', [])
    .service('Service', function Service($http) {
        var remoteForDir = 'http://zonebus?srv=dir',
            service = this;

        service.getFromDir = function(params) {
            //console.log(params);
            var req = $http.get(remoteForDir, {
                params: params
            });
            return req.then(function (res) {
                    return res.data;
                },
                function (res) {
                    console.log(res);
            });

        }
    });
