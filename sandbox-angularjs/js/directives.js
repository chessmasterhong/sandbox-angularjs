'use strict';

angular.module('demoApp.directives', [])
.directive('simpleCheckbox', function() {
    var template = '\
        <input type="checkbox">\
    ';

    return {
        restrict: 'A',
        scope: { data: '=' },
        template: template
    };
})
;
