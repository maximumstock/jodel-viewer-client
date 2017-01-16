'use strict';

angular.module('jodel-viewer-client', ['ngRoute', 'ngTable'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'JodelCtrl',
                templateUrl: 'app/views/jodels.html'
            })
    }]);
