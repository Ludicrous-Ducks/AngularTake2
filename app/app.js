"use strict";

var app = angular.module("Bangazon", ['ngRoute'])
    .constant('apiUrl', 'http://localhost:7000/api');

angular.module("Bangazon").config(
    [
        '$interpolateProvider',
        '$httpProvider',
        '$routeProvider',
        '$locationProvider',
        function($interpolateProvider, $httpProvider, $routeProvider, $locationProvider) {

            $interpolateProvider.startSymbol('{{');
            $interpolateProvider.endSymbol('}}');

            $httpProvider.defaults.xsrfCookieName = 'csrftoken';
            $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

            $routeProvider
                .when('/login', {
                    controller: "AuthCtrl",
                    templateUrl: 'partials/auth.html'
                })
                .when('/register', {
                    controller: "AuthCtrl",
                    templateUrl: 'partials/auth.html'
                })
                .when('/main', {
                    controller: "AuthCtrl",
                    templateUrl: 'partials/main.html'
                })
                .otherwise('/');

            $locationProvider.html5Mode(true);
        }
    ]);
