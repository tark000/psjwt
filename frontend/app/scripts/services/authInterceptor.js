'use strict';

angular.module('psjwtApp')
  .factory('authInterceptor', function (authToken) {
  	return {
  		request: function(config) {
  			var token = authToken.getToken();
  			if(token)
  				config.headers.authorization = 'Bearer ' + token;

  			return config;
  		},
  		response: function(response) {
  			return response;
  		}
  	};
  	
  });
