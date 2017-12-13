// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/homepage.html"));
  });

  app.get("/report", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/report.html"));
  });

  app.get("/comments", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/comments.html"));
  });
  

  // app.get("/comments", function(req, res) {
  //   res.sendFile(path.join(__dirname + "../views/homepage.html"));
  //  });

};
