'use strict';

angular.module('demoApp', [
    'demoApp.controllers',
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.partial.html',
            controller: 'homeController',
            data: { pageTitle: 'Home' }
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.partial.html',
            controller: 'aboutController',
            data: { pageTitle: 'About' }
        })
        $stateProvider.state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.partial.html',
            controller: 'contactController',
            data: { pageTitle: 'Contact' }
        });

    $urlRouterProvider.otherwise('/');
});
