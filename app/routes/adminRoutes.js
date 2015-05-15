"use strict";

var 
	path = require('path'),
	halls = require('../models/Hall');

module.exports = function (app) {
	app.route('/entrance')
	  .get(function (req, res) {
	  	res.sendFile(path.join(__dirname, '../../public/admin.html'));
	  });
};