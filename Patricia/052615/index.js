var sqlite = require("sqlite3");

var db = new
sqlite.Database("test.db", function()//it will create a db if it doesn't exist
{
  db.run("CREATE TABLE IF NOT EXISTS users (name, age)", function() {
//if you run it again, it will crash, unless you add 'if not exists'

    db.run("INSERT INTO users VALUES ('Patricia', 58)");

    db.get("SELECT * FROM users", function(err, results) {
      console.log(results);
    });

    var query = "INSERT INTO users VALUES ($name, $age);";
    db.run(query, {
      $name: "Alice",
      $age: 42
    }, function() {
      console.log(this);
    });

    var statement = db.prepare(query);
    statement.run ({
      $name: "Bob",
      $age: 20
    });

    db.all("SELECT * FROM users", function(err, results) {
      console.log(results);
    });//closes the SELECT *

  });//closes CREATE TABLE

});//cloases new sqlite.Database
