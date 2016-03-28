'use strict';

/**
 * @ngdoc function
 * @name psjwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the psjwtApp
 */
angular.module('psjwtApp')
  .controller('RegisterCtrl', function ($scope,$http,alert) {
    
  	var url = '/';
  	var user = {};

    $scope.submit = function() {
    	$http.post(url,user)
    	.success(function(res){
    		console.log("good");
    	})
    	.error(function(res){
    		alert('warning', 'Opps', 'Could not register');
    	});
    	console.log("test");
    }
  });
