"use strict";

var app = angular.module("Bangazon", ['ngRoute'])
    .constant('apiUrl', 'http://localhost:7000/api');

angular.module("Bangazon").config(
  [
      'interpolateProvider',
      '$httpProvider',
      '$routeProvider',
      function($interpolateProvider, $httpProvider, $routeProvider) {

        $interpolateProvider.startSymbol('{{');
        $interpolateProvider.endSymbol('}}');

        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.defaults.withCredentials = true;

        $routeProvider
          .when('/login', {
            controller: "AuthCtrl",
            templateUrl: 'partials/auth.html'
          })
          .when('/register', {
            controller: "AuthCtrl",
            templateUrl: 'partials/auth.html'
          })
          // .when('/addProduct', {
          //   templateUrl: 'partials/createProduct.html',
          //   controller:'addProductCtrl'
          // })
          // .when('/addProductType', {
          //   templateUrl:'partials/addProductType.html',
          //   controller: 'addProductTypeCtrl'
          // });
      }
  ]);