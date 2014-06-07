'use strict';

angular.module('demoApp.controllers', [])
.controller('appController', function($scope, $location) {
    $scope.siteTitle = 'Demo App';

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
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
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
    };
})
.controller('aboutController', function($scope, $http) {
    $scope.colors = [];

    $http.get('http://localhost/sandbox-angularjs/sandbox-angularjs/js/data.json')
        .success(function(data, status, headers, config) {
            //console.log(data);
            $scope.colors = data;
        })
        .error(function(data, status, headers, config) {
            console.log('Error getting JSON.');
        });
})
//.controller('contactController', function($scope) {})
//.controller('404Controller', function($scope) {})
;
