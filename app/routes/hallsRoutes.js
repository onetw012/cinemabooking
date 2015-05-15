"use strict";

var 
	halls = require('../models/Hall');


module.exports = function (app) {
	app.route('/halls')
		.get(function (req, res) {
			halls.find(function (err, data) {
				if(err) {
					console.log("ERROR!: " + err);
				}
				res.json(data);
			});
		})
		.post(function (req, res) {	

		});
};