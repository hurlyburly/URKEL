var express = require("express");

var router = express.Router();

// Importing model
var burger = require("../models/burger.js");

// Route logic for urls
router.get("/", function(req, res) {
 
});

router.post("/api/burgers", function(req, res) {
 
});

router.put("/api/burgers/:id", function(req, res) {
  
});

// Export routes for server.js to use.
module.exports = router;
