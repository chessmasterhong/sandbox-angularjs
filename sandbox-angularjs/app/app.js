'use strict';

angular.module('demoApp', [
    'demoApp.home',
    'demoApp.about',
    'demoApp.contact',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
})
.controller('appController', function($scope, $location) {
    $scope.siteTitle = 'Demo App';

    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $scope.pageTitle = toState.data.pageTitle;
    });

    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    }
});
