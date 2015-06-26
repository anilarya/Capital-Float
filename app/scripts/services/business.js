 'use strict';

/**
 * @ngdoc service
 * @name parrotApp.dashboard
 * @description
 * # dashboard
 * Service in the parrotApp.
 */
angular.module('parrotApp')
  .service('business', function ( $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   return {
            fetchCapitalFloatData: function () {
                var url = 'https://safe.capitalfloat.com/cf/test1/profile?id=3367c6191eb50950fa146dbdf&email=shivram@capitalfloat.com';
                var promise = $http.get(url).success(function (result) { 
                	console.log("result service :", result);
                }).error(function (err) {

                });

                return promise;
            }
         }
});



 