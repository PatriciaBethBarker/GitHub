//routes.js
module.exports =
[
  {
    method:  "GET",
    path: "/",
    handler: require("./handlers/home");
    //handler: function(req, reply) {
    //  reply("Hello, world!");
    //}   //remove these 3 lines of code to handlers/home.js

  }
]
