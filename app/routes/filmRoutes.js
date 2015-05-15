"use strict";

var 
	films = require('../models/Film'),
	halls = require('../models/Hall');


module.exports = function (app) {
	app.route('/find-all-films')
	.get(function (req, res) {
		films.find(function (err, data) {
			if(err) {
				console.log("ERROR!: " + err);
			}
			res.json(data);
			console.log(data);
		});
	});

	app.route('/entrance/films')
		.post(function (req, res) {	
			console.log("GOT film");
			var film = new films(req.body);
			film.save(function (err, data) {
				if (err) {
					console.log(err);
				} else {
					console.log('Saved ', data );
				}
			});
		});
};