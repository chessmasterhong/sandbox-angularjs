'use strict';

angular.module('demoApp.controllers', [])
.controller('appController', function($scope, $location) {
    $scope.siteTitle = 'Demo App';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
})
.controller('homeController', function($scope, homeFactory) {
    $scope.customers = [];

    // Init
    $scope.customers = homeFactory.getCustomers();

    $scope.addCustomer = function() {
        if(
            angular.isUndefined($scope.newCustomer) ||
            angular.isUndefined($scope.newCustomer.name) || $scope.newCustomer.name === '' ||
            angular.isUndefined($scope.newCustomer.city) || $scope.newCustomer.city === '' ||
            !angular.isNumber($scope.newCustomer.visits) ||
            $scope.newCustomer.visits % 1 !== 0
        ) return;

        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city,
            visits: $scope.newCustomer.visits
        });
    };
})
.controller('aboutController', function($scope, $http) {
    $scope.colors = [];

    $http.get('http://localhost/sandbox-angularjs/sandbox-angularjs/js/data.json')
        .success(function(data) {
            //console.log(data);
            $scope.colors = data;
        })
        .error(function() {
            console.log('Error getting JSON.');
        });
})
//.controller('contactController', function($scope) {})
//.controller('404Controller', function($scope) {})
;
