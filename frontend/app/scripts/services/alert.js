'use strict';

angular.module('psjwtApp')
  .service('alert', function ($rootScope, $timeout) {
  	var timeout = 3000;
  	var alertTimeout;
  	return function(type,message,title) {
  		$rootScope.alert = {
  			hasBeenShown: true,
  			show: true,
  			type: type,
  			message: message,
  			title: title
  		}

  		$timeout.cancel(alertTimeout);
  		alertTimeout = $timeout(function(){
  			$rootScope.alert.show = false;
  		}, timeout || 2000);
  	}



  });
