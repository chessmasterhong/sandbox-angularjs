'use strict';

angular.module('demoApp.contact', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.partial.html',
        controller: 'contactController',
        data: { pageTitle: 'Contact' }
    });
})
.controller('contactController', function($scope) {
    // ...
});
