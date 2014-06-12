'use strict';

var demoApp = angular.module('demoApp', [
    'ui.router'
])
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '',
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
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.partial.html',
            //controller: 'contactController',
            data: { pageTitle: 'Contact' }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.partial.html',
            //controller: 'loginController',
            data: { pageTitle: 'Login' }
        })
        .state('404', {
            url: '/404',
            templateUrl: 'partials/404.partial.html',
            //controller: '404Controller',
            data: { pageTitle: 'Page Not Found' }
        });

    $urlRouterProvider.otherwise('/404');
});
