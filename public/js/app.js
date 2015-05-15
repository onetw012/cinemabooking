;(function () {	
	"use strict";

	angular.module("adminPanel", ['ui.router', 'ngResource', 'ngMaterial'])
	.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
	  function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
	  $mdThemingProvider.theme('docs-dark', 'default')
	         .primaryPalette('yellow')
	         .dark();

	  $urlRouterProvider.otherwise("/");
	  //
	  // Now set up the states
	  $stateProvider
	  .state('films', {
	    url: "/find-all-films",
	    templateUrl: "js/templates/allFilms.html",
	    resolve: {
	      filmModel: 'filmModel',
	      films: function(filmModel){
	          return filmModel.query();
	      }
	    },
	    controller : 'allFilmsCtrl'
	  })
	  .state('newFilm', {
	  	url:'/films',
	  	templateUrl: "js/templates/newFilm.html",
	  	controller: 'newFilmCtrl'
	  });
	}]);

	angular.module("mainPanel", ['ui.router', 'ngResource', 'ngMaterial']);
	
})();


