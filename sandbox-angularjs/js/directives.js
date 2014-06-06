'use strict';

angular.module('demoApp.directives', [])
.directive('simpleCheckbox', function() {
    var template = '\
        <input type="checkbox"> <span ng-transclude></span>\
    ';

    return {
        restrict: 'A',
        scope: { data: '=' },
        transclude: true,
        template: template
    };
})
;
