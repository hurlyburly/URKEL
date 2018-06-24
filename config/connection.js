// MySQL connection information
var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else
{ 
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "burgers_db"
});
};

// Make connection with error handling
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection to ORM file
module.exports = connection;