"use strict";

var 
	halls = require('../models/Hall'),
	users = require('../models/User'),
	rights = require('../models/rights'),	
	path = require('path'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

module.exports = function (app) {

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, function(username, password,done){
  users.findOne({ username : username},function(err,user){
    return err 
      ? done(err)
      : user
        ? password === user.password
          ? done(null, user)
          : done(null, false, { message: 'Incorrect password.' })
        : done(null, false, { message: 'Incorrect username.' });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  users.findById(id, function(err,user){
    err 
      ? done(err)
      : done(null,user);
  });
});

var rightsFactory = function (right) {
	return function (req, res, next) {
		req.isAuthenticated()
		? (req.user.rights >= right) 
			? next() 
			: res.send("Sorry, you don't have rights for this page!")
		: res.redirect('/login'); 
	};
};
/*here you can add another groups of users*/
var mustBeAdmin = rightsFactory(rights.ADMIN);
var mustBeAuthorized = rightsFactory(rights.AUTHORIZED);

	/*	Authentication	*/
	app.route('/login')
	.get(function (req, res, next) {
		res.sendFile(path.join(__dirname, '../views/login.html'));
	})
	.post(function(req, res, next) {
		passport.authenticate('local',
		  function(err, user, info) {
		    return err 
		      ? next(err)
		      : user
		        ? req.logIn(user, function(err) {
		            return err
		              ? next(err)
		              : res.redirect('/entrance');
		          })
		        : res.redirect('/');
		  }
		)(req, res, next);
	});

	app.route('/register')
	.get(function (req, res, next) {
		res.sendFile(path.join(__dirname, '../views/register.html'));
	})
	.post(function(req, res, next) {	 
	  var data = req.body;
	  console.log(data);
	  var user = new users({ 
	  	name: data.name,
	  	lastname: data.lastname,
	  	username: data.username, 
	  	password: data.password,
	  	tel: data.tel.toString(),
	  	rights: rights.AUTHORIZED
	  });
	  user.save(function(err) {
	    return err
	      ? next(err)
	      : req.logIn(user, function(err) {
	        return err
	          ? next(err)
	          : res.redirect('/entrance');
	      });
	  });
	});

	app.get('/logout', function(req, res) {
	  req.logout();
	  res.redirect('/');
	});
	/*==============================*/

	//all routes =========================================
	app.all('/entrance',       mustBeAdmin);
	app.all('/entrance/*',     mustBeAdmin);
	app.all('/halls',          mustBeAuthorized);
	app.all('/halls/*',        mustBeAuthorized);
};