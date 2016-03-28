'use strict';

/**
 * @ngdoc directive
 * @name psjwtApp.directive:sameAs
 * @description
 * # sameAs
 */
angular.module('psjwtApp')
  .directive('validateEquals', function () {
    return {
      require: 'ngModel',
      link: function(scope, element,attrs,ngModelCtrl) {
     	function valideEqual(value) {
     		var valid = (value === scope.$eval(attrs.validateEquals));
     		ngModelCtrl.$setValidity('equal', valid);
     		return valid ? value : undefined;
     	}
     	ngModelCtrl.$parsers.push(valideEqual);
     	ngModelCtrl.$formatters.push(valideEqual);

     	scope.$watch(attrs.validateEquals, function(){
     		ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
     	})


      }
    };
  });
