'use strict';

let app = angular.module("Bangazon", ['ngRoute'])
    .constant('apiUrl', 'http://localhost:7000/api');

angular.module('Bangazon').config(
[
    '$interpolateProvider',
    '$routeProvider',
    function($interpolateProvider, $routeProvider) {

      $interpolateProvider.startSymbol('((');
      $interpolateProvider.endSymbol('))');

      $routeProvider
      	.when('/', {
      		controller: 'AuthCtrl',
      		templateUrl: 'partials/auth.html'
      	});
		}
]);


