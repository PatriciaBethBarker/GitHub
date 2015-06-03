//database.js

var sqlite = require("sqlite3");

var facade = {
  connection: null, //db will talk thru the connection
  init:  function(callback) {
    var db = new sqlite.Database("reminders.db"); //call the
    facade.connection = db;
    db.run("CREATE TABLE IF NOT EXISTS reminders (task, complete)", function() {
      callback();

    });
  }
};

module.exports = facade;
