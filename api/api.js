var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');
var User = require('./models/User.js')

var app = express();

app.use(bodyParser.json());

app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
})

app.post('/register', function(req,res){
	var user =req.body;
	console.log(222);

	var newUser = new User.model({
		email: user.email,
		password: user.password
	});
	newUser.save(function(err) {
		console.log(333);

		if (err) {
			console.log(err);
		}
		console.log("2", newUser);
		res.status(200).json(newUser);
	})
})

mongoose.connect('mongodb://localhost/psjwt');

var server = app.listen(3000, function() {
	console.log('api lisyening on', server.address().port);
})