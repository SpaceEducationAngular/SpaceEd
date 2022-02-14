var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ih3b2000A',
  database : 'spaceED'
});
connection.connect(function (err) {
  if (err) {
      return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
})
module.exports = connection;