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
    
  	var url = 'http://localhost:3000/register';
  	var user = {email: "test", password: "test123"};

    $scope.submit = function() {
      var user = {email: $scope.email, password: $scope.password};
    	$http.post(url,user)
    	.success(function(res){
        alert('success', 'good ', 'Good');
    	})
    	.error(function(res){
    		alert('warning', 'Opps', 'Could not register');
    	});
    	console.log("test");
    }
  });
