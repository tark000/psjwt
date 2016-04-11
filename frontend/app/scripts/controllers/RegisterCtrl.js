'use strict';

angular.module('psjwtApp')
  .controller('RegisterCtrl', function ($scope,$http,alert,authToken,$state) {
    
  	var url = 'http://localhost:3000/register';
  	var user = {email: "test", password: "test123"};

    $scope.submit = function() {
      var user = {email: $scope.email, password: $scope.password};
    	$http.post(url,user)
    	.success(function(res){
        alert('success', 'Account create! ', 'Welcom ' + res.user.email);
        authToken.setToken(res.token);
        // $state.go('main');
      })
    	.error(function(res){
    		alert('warning', 'Opps', 'Could not register');
    	});
    }
  });
