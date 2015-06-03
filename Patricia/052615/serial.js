//serial.js

var sqlite = require("sqlite3");
var db = new sqlite.Database('serial.db');//db must come before server
var async = require("async");//look up caolan/async

async.waterfall([//arg an array
  function(c) { // callback function 'c'
    db.run("CREATE TABLE IF NOT EXISTS test (x, y)", c);
  },
  function(c) {
  //  console.log(arguements);
    db.run("INSERT INTO test VALUES ($x, $y)", {
      $x: 3,
      $y: 4
    }, c);
  },
  function(c) {
    db.all("SELECT * FROM test", c)
  },
  function(results, c) {
    console.log(results);
  }
]);

// db.run("CREATE TABLE IF NOT EXISTS test (x, y)", function() {
//   db.run("INSERT INTO test VALUES ($x, $y)", {
//     $x: 1,
//     $y: 2
//   }, function() {
//     db.all("SELECT * FROM test", function(err, results) {
//       console.log(results);
//     });
//   });
// });
