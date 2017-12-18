// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // route loads the "Landing/Home" page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/homepage.html"));
    });

    // route loads the "Report UFO Sighting" page 
    app.get("/report", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/report.html"));
    });

    // route loads the "Likelihood of Abduction" page
    app.get("/abduction", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/abduction.html"));
    });

    // route loads the "Search UFO Sightings" page
    app.get("/comments", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/comments.html"));
    });

    // route loads the "Mars Rover photos" page
    app.get("/marsRoverImages", function(req, res) {
        res.sendFile(path.join(__dirname, "../views/marsRoverImages.html"));
    });

    // // testing for D3 mapping, this page is not in use
    //   app.get("/map", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../views/d3Test.html"));
    //   });

};