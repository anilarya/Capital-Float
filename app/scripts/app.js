'use strict';

/**
 * @ngdoc overview
 * @name homealoneApp
 * @description
 * # homealoneApp
 *<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="bower_components/angular-bootstrap/ui-bootstrap-tpls.js"></script>
 * Main module of the application.
 */
angular
  .module('parrotApp', ['ngAnimate','ngCookies','ui.router','ngResource',
    'ui.bootstrap','ngRoute','ngSanitize','ngTouch','kendo.directives', 'angular-google-gapi','ngMaterial'
  ]).config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/'); 
    
    $stateProvider 
        .state('/', {
            url: '/',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }) 
        .state('business', {
            url: '/business/',
            templateUrl: 'views/business.html',
            // controller: 'BusinessCtrl'
        }) 
         .state('finance', {
            url: '/finance/',
            templateUrl: 'views/finance.html',
            // controller: 'FinanceCtrl'
        }) 
          .state('promoter', {
            url: '/promoter/',
            templateUrl: 'views/promoter.html',
            // controller: 'PromoterCtrl'
        }) 
           .state('principal', {
            url: '/principal/',
            templateUrl: 'views/principal.html',
            // controller: 'PrincipalCtrl'
        }) 

  });
