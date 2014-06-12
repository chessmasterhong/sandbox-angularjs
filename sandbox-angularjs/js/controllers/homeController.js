'use strict';

demoApp.controller('homeController', function($scope, homeFactory) {
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
;
