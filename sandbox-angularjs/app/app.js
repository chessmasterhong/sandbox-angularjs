angular.module('demoApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('/', {
            url: '/home',
            templateUrl: 'app/home/home.partial.html',
            controller: 'simpleController',
            data: { pageTitle: 'Home' }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about/about.partial.html',
            controller: 'simpleController',
            data: { pageTitle: 'About' }
        });

    $urlRouterProvider.otherwise('/home');
})
.controller('appController', function($scope, $location) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.pageTitle = toState.data.pageTitle;
    });
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
