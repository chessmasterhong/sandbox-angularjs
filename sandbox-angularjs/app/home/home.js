angular.module('demoApp.home', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/home/home.partial.html',
        controller: 'homeController',
        data: { pageTitle: 'Home' }
    });
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
});
