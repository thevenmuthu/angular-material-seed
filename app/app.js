define([
	'angular-amd',
  'angular-material',
  'angular-ui-router',
  'home',
  'about'
	], function (angularAMD) {
    var app = angular.module("app", ['ngMaterial', 'ui.router', 'home', 'about']);
    app.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'modules/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'modules/about/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })
    });
    app.config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
          'default': '400',
          'hue-1': '100',
          'hue-2': '600',
          'hue-3': 'A100'
        })
        .accentPalette('red', {
          'default': '400'
        })
        .warnPalette('red', {
          'default': '400'
        });
    });
    return angularAMD.bootstrap(app);
});