'use strict';

angular.module('demoApp.directives', [])
.directive('simpleCheckbox', function() {
    var template = '\
        <input type="checkbox"> <span ng-transclude></span>\
    ';

    return {
        restrict: 'A',
        scope: { visited: '=' },
        transclude: true,
        template: template,
        link: function(scope, element, attributes) {
            element.click(function() {
                scope.visited = !scope.visited;
                console.log(scope.visited);
            });
        },
        controller: function($scope) {
            console.log($scope.visited);
        }
    };
})
;
