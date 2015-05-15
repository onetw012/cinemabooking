;(function () {
  "use strict";

  angular.module('adminPanel')
  .factory('newFilmModel', ['$resource', 
    function($resource) {
    	return $resource('/entrance/films');
  }]);

})();
