'use strict';

angular.module('demoApp.directives', [])
.directive('simpleBarChart', function() {
    return {
        restrict: 'A',
        scope: { data: '=chartData' },
        link: function(scope, element) {
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
