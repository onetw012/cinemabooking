;(function () {
  "use strict";

  angular.module('adminPanel')
  .controller('newFilmCtrl', ['$scope', 'newFilmModel', '$http', 
    function($scope, newFilmModel, $http) {

    	var newFilm = newFilmModel;
    	$scope.film = {
    		date: new Date(),
    		title: "",
    		description: "",
    		begin: "",
    		end: "",
    		sessions: []
    	};
    	$scope.send = function (film) {
    		console.log(film);
    		newFilm.save($scope.film);
    		/*$http.post('/entrance/films', {data: $scope.film});*/
    	};
  }]);

})();
