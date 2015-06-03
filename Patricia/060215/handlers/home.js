//home.js
var ReminderList = require("../models/reminderList");

module.exports = function(req, reply) {
  //reply("Hello, world!");
  var list = new ReminderList();
  list.load(function() {
    var data = list.toJSON();
    console.log(data);
    //list now ready
  reply.view("home", { //replace with view home.js
    test: "It's alive!",
    reminders: data
    });
  });
};
