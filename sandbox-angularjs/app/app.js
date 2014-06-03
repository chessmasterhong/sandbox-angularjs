angular.module('demoApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/home',
            templateUrl: 'app/home/home.partial.html',
            controller: 'simpleController'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.partial.html',
            controller: 'simpleController'
        });

    $urlRouterProvider.otherwise('/home');
})
.controller('simpleController', function($scope) {
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
