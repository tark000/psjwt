'use strict';

/**
 * @ngdoc function
 * @name psjwtApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the psjwtApp
 */
angular.module('psjwtApp')
  .controller('JobsCtrl', function ($scope, $http, API_URL,alert) {

  	$http.get(API_URL + 'jobs').success(function(jobs){
  		$scope.jobs = jobs;
  	}).error(function(err){
  		alert('warning', "Unable to go jobs", err.message);
  	})
  });
