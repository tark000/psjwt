'use strict';

/**
 * @ngdoc function
 * @name psjwtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the psjwtApp
 */
angular.module('psjwtApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
  	$scope.isAuthenticated = authToken.isAuthenticated;
  });
