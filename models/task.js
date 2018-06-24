var orm = require("../config/orm.js");

var task={
    all: function(cb) {
        orm.all("tasks", function(res) {
          cb(res);
        });
      },
      // The variables cols and vals are arrays.
      create: function(cols, vals, cb) {
        orm.create("tasks", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.update("tasks", objColVals, condition, function(res) {
          cb(res);
        });
      }
}; 
//Pseudocode
//CRUD Object calling functions in orm.js files

module.exports = task;