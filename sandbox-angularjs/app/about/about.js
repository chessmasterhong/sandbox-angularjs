'use strict';

angular.module('demoApp.about', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'app/about/about.partial.html',
        controller: 'aboutController',
        data: { pageTitle: 'About' }
    });
})
.controller('aboutController', function($scope) {
    // ...
});
