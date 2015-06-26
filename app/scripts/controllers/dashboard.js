'use strict';

/**
 * @ngdoc function
 * @name parrotApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the parrotApp
 */
angular.module('parrotApp')
  .controller('DashboardCtrl', function ($scope, $timeout, $rootScope, $state, $window, $location, GApi, dashboard) {
 
  
    $scope.model = {};
    
    $scope.isCurrentLocation = function(path){
    return path === $location.path()
	}
    var init = function () { // initial function
      console.log('DashboardCtrl.init()');
    }();

});

