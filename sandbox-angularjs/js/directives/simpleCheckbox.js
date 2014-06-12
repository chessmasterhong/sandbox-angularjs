'use strict';

demoApp.directive('simpleCheckbox', function() {
    var template = '\
        <input type="checkbox"> <span ng-transclude></span>\
    ';

    return {
        restrict: 'A',
        scope: { data: '=visited' },
        transclude: true,
        template: template,
        link: function(scope, element) {
            element.click(function() {
                scope.visited = !scope.visited;
                //console.log(scope.visited);
            });
        }
    };
})
;
