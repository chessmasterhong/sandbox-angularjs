'use strict';

angular.module('demoApp.controllers', [])
.controller('appController', function($scope, $location) {
    $scope.siteTitle = 'Demo App';

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    }
})
.controller('homeController', function($scope) {
    $scope.customers = [
        { name: 'Alice', city: 'Miami' },
        { name: 'Bob', city: 'New York' },
        { name: 'Carol', city: 'Memphis' },
        { name: 'Dave', city: 'Los Angeles' },
        { name: 'Eve', city: 'Honolulu' },
        { name: 'Frank', city: 'Houston' }
    ];

    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
    }
})
.controller('aboutController', function($scope) {
    // ...
})
.controller('contactController', function($scope) {
    // ...
});
