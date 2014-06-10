'use strict';

describe('controllers', function() {
    beforeEach(module('demoApp.controllers'));

    it('should ...', inject(function($controller) {
        var appController = $controller('appController', { $scope: {} });
        expect(appController).toBeDefined();
    }));

    it('should ...', inject(function($controller) {
        var homeController = $controller('homeController', { $scope: {} });
        expect(homeController).toBeDefined();
    }));

    it('should ...', inject(function($controller) {
        var aboutController = $controller('aboutController', { $scope: {} });
        expect(aboutController).toBeDefined();
    }));
});
