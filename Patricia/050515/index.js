var hapi = require("hapi");
var fs = require ("fs"); //need file from HD
//built into node; read, write, get contents of file

var server = new hapi.Server();
server.connection({port: 8000});
server.start();

server.views({ //define templates on a per type
  path: "templates",//call before all else
  engines: {
    html: require("handlebars")
  },
  isCached: false,
  layoutPath: "layouts", // this is a wrapper
  layout: "default", // here is the default layout
  partialsPath: //partials in subfolder
    "templates/partials",
});

server.route({
  method:  "GET",
  path: "/",//Home page path
  handler: function(request, reply) {
    reply.view("index", {
      title: "Home"
    });
  }
});

server.route({
  method:  "GET",
  path: "/public/{file}",
  handler: function(request, reply) {
    //load the file
    //pass it into reply
  }
})

server.route({
  method: "GET",
  path: "/classes", //path matches the name of the html files
  handler: function(request, reply) {//handler can be put into modules
    fs.readFile("classes.json", "utf8", function(err, data) {//read the file, take data
      var classList = JSON.parse(data); //parse the data in json file
      //insert in function to access the data - classList variable
      //or call sqlite to get content
      //db.all("SELECT * FROM CLASSES", function(err, classList) )//async cb replace 44 & 45
      reply.view("classes", {//then you can do the next task,
        title: "Classes",
        admin: true, //for login
        //classes: [ //take property objects in this array and inject in template
          //{ name: "ITC 172" url: "itc172" institution: "SCC" } //all keys quoted in a json file
          //{ name: "ITC 260" url: "itc260" institution: "SCC" } //data storage - an async process
          //{ name: "ITC 298" url: "itc298" institution: "SCC" }
        //] // query the array from a data storage called classes.json - parse classList
        classes: classList //pass the data to my json files - you can add data here
      });
    });
  }
});

server.route({//the wrapper and public work together
  method: "GET",
  path: "/assets/{param*}", //access everything after; /assets/
  handler: function(request, reply) {//a Static Resource Route, serves up entire dir
    directory:{//served directly from public
      path: "public"
    }
  }
});
