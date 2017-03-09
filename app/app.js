'use strict';

let app = angular.module("Bangazon", ['ngRoute'])
    .constant('apiUrl', 'http://localhost:7000/api');

angular.module('BangaClient').config(
[
    '$interpolateProvider',
    '$routeProvider',
    function($interpolateProvider, $routeProvider) {

      $interpolateProvider.startSymbol('((');
      $interpolateProvider.endSymbol('))');

      $routeProvider
      	.when('/', {
      		controller: 'AuthController',
      		templateUrl: 'partials/login.html'
      	});
		}
]);

