//index.js

var hapi = require("hapi");

console.log(hapi);

var server = new hapi.Server();
server.connection({ port: 8000 });
server.start(function(){
  console.log("Server running!");
  console.log(server.info);

});

//var counter = 0; // counter is outside the route, a value running the function every time page reloads
                 // if you kill the server, it resets back to one
                 // user table, account, saves to a db
server.route({
  method:  "GET",
  path: "/{name?}",  // do we have a name or not
  handler: function(request, reply){  // post it data, cookies, form data, set headers, etc
    //console.log(request.headers);
    var name = request.params.name ||  //or be Anon
    "Anonymous";
  //  counter++;
    console.log(request.params);

    //("Hello," + name + ", from Pizza Shack " + counter);
    reply("Hello," + name + ", from Pizza Shack");
  }

});

//server.route({
  //method:  "GET",
  //path: "/{name}/{id}",
    //handler: function(request, reply) {
      //reply(request.params.name + "|" + request.params.id);
    //}
//})
