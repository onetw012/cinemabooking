// server.js
"use strict";
// modules ====================================
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	securityRoutes = require('./app/routes/securityRoutes'),
	allRoutes = require('./app/routes/allRoutes'),
	adminRoutes = require('./app/routes/adminRoutes'),
	hallsRoutes = require('./app/routes/hallsRoutes'),
	filmRoutes = require('./app/routes/filmRoutes'),
	cookieParser = require('cookie-parser'),
	sessions = require ('express-session'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;
//=============================================

// config files ===============================
var db = require('./config/db');
//=============================================

// port
var port = process.env.PORT || 4444; 

// connect to database ========================
var uristring =
		process.env.MONGOLAB_URI ||
		process.env.MONGOHQ_URL ||
		db.url;
mongoose.connect(uristring, function () {
	console.log("Connected to database: " + db.url);
}); 

// middleware =================================
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public')); 
app.use(sessions({
	secret: 'keyboard dog',
	resave: false, 
	saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

//securityRoutes ======================================
securityRoutes(app); // configure our securityRoutes
adminRoutes(app); 
hallsRoutes(app); 
filmRoutes(app); 
allRoutes(app); 		 // configure another routes



// make server=================================
app.listen(port, function () {
	console.log("Listening port: " + port);
});