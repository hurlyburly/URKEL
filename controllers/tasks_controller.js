var express = require("express");

var router = express.Router();

// Importing model
var task = require("../models/task.js");

// Route logic for urls
router.get("/", function(req, res) {
 res.render('index')
});

router.post("/api/task", function(req, res) {
 res.json(req.body);
});


// Export routes for server.js to use.
module.exports = router;
