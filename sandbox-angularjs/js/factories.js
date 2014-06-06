'use strict';

angular.module('demoApp.factories', [])
//.factory('appFactory', function() {})
.factory('homeFactory', function() {
    var customers = [
        { name: 'Alice', city: 'Miami' },
        { name: 'Bob', city: 'New York' },
        { name: 'Carol', city: 'Memphis' },
        { name: 'Dave', city: 'Los Angeles' },
        { name: 'Eve', city: 'Honolulu' },
        { name: 'Frank', city: 'Houston' }
    ];

    var factory = {};
    factory.getCustomers = function() {
        return customers;
    };

    return factory;
})
//.factory('aboutFactory', function() {})
//.factory('contactFactory', function() {})
;
