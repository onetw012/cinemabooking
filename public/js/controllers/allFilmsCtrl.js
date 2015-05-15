;(function () {
  "use strict";

  angular.module('adminPanel')
  .controller('allFilmsCtrl', ['$scope', 'filmModel', 'films',
    function($scope, filmModel, films) {
    	console.log(films);
    	$scope.films = films;
  }]);

})();
