//reminder.js

var Backbone = require("backbone");
var sql = require("../database");//go to the parent directory in the models folder

var Reminder = Backbone.Model.extend({//capitalised because its a constructor
  defaults: { //plural
    task: "", //empty to begin
    complete: false //
  },
  create: function(callback) {
    callback = callback || function() {};//if nothing is passed in, value of callback is undefined
    //get its own database
    var data = this.toJSON();
    //run an INSERT on the db
    var q = "INSERT INTO reminders (task, complete) VALUES ($task, $complete);";//prevents sql injection attacks
    //pass in its database
    sql.connection.run(q, {
      $task: data.task,
      $complete: data.complete
    }, callback)
    //when done, call the callback
  }
});

//var reminder = new Reminder(); //capitalized because its a constructor

//console.log(reminder.toJSON()); //we just want to see the object

module.exports = Reminder;
