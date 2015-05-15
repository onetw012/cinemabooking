"use strict";

var 
	path = require('path');

module.exports = function (app) {

	/*=============================*/

/*	========== All routes =============*/
	app.get('*', function(req, res) {
	    res.sendFile(path.join(__dirname, '../../public/index.html')); // load our public/index.html file
	});
/*	===================================*/
};