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

	app.post("/comments", function(req, res) {
    db.Sightings.findAll({
    	where: {
    		state: req.body.userState
    	},

    	limit: 9
    }).then(function(aliendb) {
    res.json(aliendb);
    console.log(req.body.userState);
    console.log(aliendb);
    });

	});
};