//reminderList.js

var Backbone = require("backbone");
var sql = require("../database");
var Reminder = require("./reminder");

var ReminderList = Backbone.Collection.extend({
  model: Reminder
  load: function(callback) {
    var self = this;
    //select all Reminders from database
    var q = "SELECT * FROM reminders;"
    sql.connection.all(q, function(err, results) {//all -> multiple rows, reminders
      //fill this list with Reminders based on the database
    //  console.log("results")
      self.reset(results);
      callback();
    });
  }
});

module.exports = ReminderList;
