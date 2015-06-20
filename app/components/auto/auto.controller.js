/**
 *
 * Created by orion on 20-06-15.
 */
'use strict';

angular.module('myApp.auto')

    .controller('AutoCtrl', function(Service, Util) {
        var auto = this;

        auto.version = '0.8';
        auto.files = [];
        auto.invoer = '';

        auto.find = function(files, pad, to_match) {
            var found = null;

            for (var i = 0; i < files.length; i++) {
                if (files[i].name.indexOf(to_match) === 0) {
                    // een gevonden
                    if (!found) {
                        found = {
                            pad: pad,
                            file: files[i]
                        }
                    }
                    else {
                        // meer dan een gevonden
                        found = null;
                        break;
                    }
                }
            }
            return found;
        };

        auto.autoComplete = function(invoer) {
            var to_match,
                params,
                pad;

            pad = Util.stripAfterSlash(invoer);
            params = {
                req: 'allfiles',
                path: pad
            };
            to_match = Util.stripBeforeSlash(invoer);
            return Service.getFromDir(params).then(function(data){
                if (typeof data === 'string') {
                    auto.files = [];
                }
                else {
                    auto.files = data;
                }
                return auto.find(auto.files, pad, to_match);
            });
        };

        auto.keydown = function(e) {
            if (e.which === 9) {
                e.preventDefault();
                e.stopPropagation();
                auto.autoComplete(auto.invoer).then(function(a) {
                    if (a) {
                        auto.invoer = a.pad + a.file.name;
                        if (a.file.type === 'dir') {
                            auto.invoer += '/';
                        }
                    }
                });
            }
        }
    });