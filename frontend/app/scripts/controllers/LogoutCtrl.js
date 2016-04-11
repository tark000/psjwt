'use strict';

angular.module('psjwtApp')
  .controller('LogoutCtrl', function (authToken, $state) {
  	authToken.removeToken();
    $state.go('main');
  });
