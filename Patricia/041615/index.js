var fs = require("fs");
var path = require("path");
var async = require("async");

var filePath = "./txtfiles";

//directory call the files, async loops through them
//run call back to know we have looked at each file
fs.readdir("./txtfiles", function(err, files) {
  async.each(files, function(name, callback){
    console.log(name);
    // callback();
    //read the files, join the path and file
    //name represents the file I am calling
    fs.readFile(path.join(filePath + "/", name), "utf8", function(err, data){
      console.log(data);
      var result = data.indexOf("needle");
      console.log(name, result);
      if (data.match("needle")) {
      }
    })
  })
});
