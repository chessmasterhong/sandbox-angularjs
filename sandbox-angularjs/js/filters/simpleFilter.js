'use strict';

angular.module('demoApp.filters', [])
.filter('simpleFilter', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
})
;
