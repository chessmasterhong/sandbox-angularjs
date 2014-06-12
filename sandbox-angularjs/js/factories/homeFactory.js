'use strict';

demoApp.factory('homeFactory', function() {
    var customers = [
        { name: 'Alice', city: 'Miami'      , visits:  6 },
        { name: 'Bob'  , city: 'New York'   , visits: 11 },
        { name: 'Carol', city: 'Memphis'    , visits:  8 },
        { name: 'Dave' , city: 'Los Angeles', visits: 15 },
        { name: 'Eve'  , city: 'Honolulu'   , visits:  2 },
        { name: 'Frank', city: 'Houston'    , visits:  8 }
    ];

    var factory = {};
    factory.getCustomers = function() {
        return customers;
    };

    return factory;
})
;
