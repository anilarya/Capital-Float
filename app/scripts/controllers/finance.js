'use strict';

/**
 * @ngdoc function
 * @name parrotApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the parrotApp
 */
angular.module('parrotApp')
  .controller('FinanceCtrl', function ($scope, $timeout, $rootScope, $state, $window, $location, business) {
 
  $scope.model = {};
    
    var fetchData = function (){
    	business.fetchCapitalFloatData().success(function (result) {
	        console.log("Hey ! result : ", result); 

	        $scope.model.business = result.business ; 
	        $scope.model.financials = result.financials 
	        console.log("financials", $scope.model.financials)
	    }).error(function (error) {
	        options.error(error);
	    });
    }

    $scope.isCurrentLocation = function(path){
    return path === $location.path()
}
    var init = function () { // initial function
      console.log('DashboardCtrl.init()');
      fetchData();

    }();

});


