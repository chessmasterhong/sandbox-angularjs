var demoApp = angular.module('demoApp', [
    'ngRoute'
]);

demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'simpleController',
            templateUrl: 'app/home/home.partial.html'
        })
        .when('/about', {
            controller: 'simpleController',
            templateUrl: 'app/about/about.partial.html'
        })
        .otherwise({ redirectTo: '/home' });
});

demoApp.controller('simpleController', function($scope) {
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
});
