;(function () {
  "use strict";

  angular.module('adminPanel')
  .factory('filmModel', ['$resource', 
    function($resource) {
    	return $resource('/find-all-films');
  }]);

})();
