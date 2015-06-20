/*
 * Created by orion on 12-06-15.
 */
'use strict';

angular.module('myApp.util', [])
    .service('Util', function Util() {

        this.stripAfterSlash = function(s) {
            var pos = s.lastIndexOf('/');
            //console.log('pos', pos);
            //console.log('length', s.length);

            if (pos === -1 || pos === s.length - 1) {
                return s;
            }
            return s.substr(0, pos + 1);
        };

        this.stripBeforeSlash = function(s) {
            var pos = s.lastIndexOf('/'),
                toMatch;
            //console.log('pos', pos);
            //console.log('length', s.length);

            if (pos === -1) {
                return s;
            }
            toMatch = s.substr(pos + 1);
            //console.log(toMatch);
            return toMatch;
        };

        //http://webdesign.about.com/library/bl_url_encoding_table.htm
        this.mapCoding =
        {
            '%28': '(',
            '%29': ')',
            '%7B': '{',
            '%7C': '|',
            '%3D': '=',
            '%27': '\'',
            '%3B': ';',
            '%3C': '<',
            '%3E': '>',
            '%2B': '+',
            '%7D': '}',
            '%3F': '?',
            '%26': '$',
            '%3A': ':',
            '%2F': '/',
            '%23': '#',
            '%24': '&',
            '%40': '%',
            '%20': ' ',
            '%2C': ',',
            '%25': '~',
            '%5E': '^',
            '%60': '`',
            '%5C': '\\',
            '%5B': '[',
            '%5D': ']',
            '%22': '"'
            //'\+': ' '
        };
        this.mapHooks = {
            '\\(': '<i>(</i>',
            '\\)': '<i>)</i>',
            '\\[': '<a>[</a>',
            '\\]': '<a>]</a>',
            '\\n': '<br>'
        };
        this.replaceAll = function (str, mapObj) {
            var result = str;

            angular.forEach(mapObj, function (value, key) {
                //noinspection JSCheckFunctionSignatures
                result = result.replace(new RegExp(key, "gi"), value);
            });
            return result;
        };
        this.markHooks = function (s) {
            return this.replaceAll(s, this.mapHooks);
        };
        this.urldecode = function (html) {
            return this.replaceAll(html, this.mapCoding);
        };

    });
