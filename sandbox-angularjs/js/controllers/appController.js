'use strict';

demoApp.controller('appController', function($scope, $location) {
    $scope.siteTitle = 'Demo App';

    $scope.$on('$stateChangeSuccess', function(event, toState) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
})
;
