'use strict';

/**
 * @ngdoc overview
 * @name tamagotchiApp
 * @description
 * # tamagotchiApp
 *
 * Main module of the application.
 */
angular
  .module('tamagotchiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tama', {
        templateUrl: 'views/tama.html',
        controller: 'TamaCtrl',
        controllerAs: 'tama'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
