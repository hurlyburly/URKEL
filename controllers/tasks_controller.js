var express = require("express");

var router = express.Router();

// Importing model
var tasks = require("../models/task.js");

// Route logic for urls
router.get("/", function(req, res) {
 res.render('index')
});
router.get("/api/tasks", function(req, res) {
res.json(req.body);
});

router.put("/api/tasks", function(req, res) {
 console.log(req.body);
 res.json(req.body);
});


// Export routes for server.js to use.
module.exports = router;
