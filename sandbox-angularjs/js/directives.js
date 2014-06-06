'use strict';

angular.module('demoApp.directives', [])
//.directive('appDirective', function() {})
.directive('homeDirective', function() {
    return {
        restrict: 'A',
        scope: {
            data: '='
        },
        template: 'abc123',
        //templateUrl: 'partials/_____.partial.html',
    };
})
//.directive('aboutDirective', function() {})
//.directive('contactDirective', function() {})
;
