'use strict';

demoApp.filter('simpleFilter', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
})
;
