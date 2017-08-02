//server.js
'use strict'
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Reps = require('./model/reps');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;
console.log('Server.js started');

//db config
var mongoDB = 'mongodb://ballsrichter:lighting@ds127983.mlab.com:27983/andrewlw';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', '*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
 
 res.setHeader('Cache-Control', 'no-cache');
 next();
});
router.get('/', function(req, res) {
	console.log(req, res);
 res.json({ message: 'API Initialized!'});
});

//adding the /reps route to our /api router
router.route('/reps')
 //retrieve all reps entries from the database
 .get(function(req, res) {
 //looks at our Reps Schema
 Reps.find(function(err, reps) {
 	if (err)
 		res.send(err);
 		//responds with a json object of our database entries.
 		res.json(reps)
 	});
 })
 //post new reps to the database
 .post(function(req, res) {
 	var reps = new Reps();
 	//body parser lets us use the req.body
 	reps.name = req.body.name;
 	reps.age = req.body.age;
 	reps.situps = req.body.situps;
 	reps.pushups = req.body.pushups;
	reps.save(function(err) {
 		if (err)
 			res.send(err);
 			res.json({ message: 'Reps successfully added!' });
 		});
 	});
router.route('/reps/:reps_id')
	//The put method gives us the chance to update our reps based on 
	//the ID passed to the route
 	.put(function(req, res) {
 		Reps.findById(req.params.reps_id, function(err, reps) {
 			if (err)
 				res.send(err);
 			//setting the new author and text to whatever was changed. If 
			//nothing was changed we will not alter the field.
 			(req.body.name) ? reps.name = req.body.name : null;
 			(req.body.age) ? reps.age = req.body.age : null;
 			(req.body.situps) ? reps.situps = req.body.situps : null;
 			(req.body.pushups) ? reps.pushups = req.body.pushups : null;
 			//save reps
 			reps.save(function(err) {
 				if (err)
 					res.send(err);
 				res.json({ message: 'Reps has been updated' });
 			});
 		});
 	})

 //delete method for removing a reps from our database
 .delete(function(req, res) {
 //selects the reps by its ID, then removes it.
	 	Reps.remove({ _id: req.params.reps_id }, function(err, reps) {
	 		if (err)
	 			res.send(err);
	 		res.json({ message: 'Reps has been deleted' })
	 	})
 	});
 	 
app.use('/api', router);
app.listen(port, function() {
 console.log('api running on port ' + port);
});