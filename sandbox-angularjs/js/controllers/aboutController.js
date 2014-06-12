'use strict';

demoApp.controller('aboutController', function($scope, $http) {
    $scope.colors = [];

    $http.get('http://localhost/sandbox-angularjs/sandbox-angularjs/js/data.json')
        .success(function(data) {
            //console.log(data);
            $scope.colors = data;
        })
        .error(function() {
            console.log('Error getting JSON.');
        });
})
//.controller('contactController', function($scope) {})
//.controller('404Controller', function($scope) {})
;
