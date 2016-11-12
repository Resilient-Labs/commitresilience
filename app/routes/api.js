// Module for API Routes (serving JSON)
module.exports = function(app) {
	var mongoose = require('mongoose'),
		Model = require('../models/model')
		Pledge = require('../models/pledge')

		// Example API route
		app.get('/models', function(req, res) {

			// Checks the model collection and returns all of them`
			Pledge.find(function(err, models) {

				// returns all people in JSON format
				res.send(models);
			});
		});

		// Example POST route
		app.post('/models', function (req, res) {
			Pledge.create({
				name : req.body.name, // Bound using Angular
				title: req.body.title,
				occupation : req.body.occupation,
				commitment : req.body.commitment,
				honoree : req.body.honoree
			}, function(err, model) {
				if(err) {
					res.send(err);
				}

				Pledge.find(function(err, models) {
					res.send(models);
				});
			});
		});

		// Example DELETE route
		app.delete('/models/:model_id', function (req, res) {
			Pledge.remove({
				_id: req.params.model_id
			}, function(err, model) {
				if(err) {
					res.send(err);
				}

				Pledge.find(function(err, models) {
					res.send(models);
				});
			});
		});

}
