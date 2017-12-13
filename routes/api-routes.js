var db = require("../models");


module.exports = function(app){
	app.post("/api/sightings", function(req, res){
		console.log(req.body);	
		console.log("This is cool");
		db.Sightings.create({
			city: req.body.city,
			state: req.body.state, 
			country: req.body.country,
			shape: req.body.shape,
			duration_seconds: req.body.duration_seconds,
			duration_minutes: req.body.duration_minutes,
			comments: req.body.comments,
			date: req.body.date
		}).then(function(dbPost){
			res.json(dbPost);
		})
	});

	app.get("/comments", function(req, res) {
    db.Sightings.findAll({}).then(function(aliendb) {
    res.json(aliendb);
    });

	});
};