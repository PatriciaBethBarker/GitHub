/*
/views - templates go here
/assets | /public - css, JS, images
/handlers -controllers
/models -backbone models
/routes.js - contans all routing
/database.js - starts and config SQLite
*/
var hapi = require("hapi");
var server = new hapi.Server();
server.connection({ port:8000 });
server.views({
  engines: { //must be plural
      html: require("handlebars")
  },
  path: "./views",
  isCached: false //views are loaded fresh each time
});

var Reminder = require("./models/reminder");//calling the constructor

var sql = require("./database");
sql.init(function() {
  console.log("database ready");
  var reminder = new Reminder({
    task: "Start server"
  });
  //console.log(reminder.toJSON()); //replace with line below
  reminder.create(function(err) {
    if (err) {
      console.error(err)
    }
    sql.connection.all("SELECT * FROM reminders", function(err, results) {
      console.log(err, results);
    });
  });
  server.start();//start and configure server
});//the db needs to be avail and ready before the server starts

var routes = require("./routes");//use module.exports to reuqire the new file
server.route(routes);//remove the code into the routes.js file
