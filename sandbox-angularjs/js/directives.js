'use strict';

angular.module('demoApp.directives', [])
.directive('simpleCheckbox', function() {
    var template = '\
        <input type="checkbox"> <span ng-transclude></span>\
    ';

    return {
        restrict: 'A',
        scope: { data: '=visited' },
        transclude: true,
        template: template,
        link: function(scope, element, attributes) {
            element.click(function() {
                scope.visited = !scope.visited;
                //console.log(scope.visited);
            });
        }
    };
})
.directive('sampleBarChart', function($parse) {
    return {
        restrict: 'A',
        scope: { data: '=chartData' },
        link: function(scope, element, attributes) {
            var d = [];
            angular.forEach(scope.data, function(v) {
                d.push(v.visits);
            });

            d3.select(element[0])
                .append('div').attr('class', 'chart')
                .selectAll('div')
                .data(d).enter().append('div')
                .style('width', function(d) { return d + '%'; })
                .text(function(d) { return d + '%'; });
        }
    };
})
;
