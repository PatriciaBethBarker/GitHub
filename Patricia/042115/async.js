/*
async.each
@param list An array to be processed
@param iterator A function to be called on each item
@param complete A function to be called when all items are complete
*/
var wait = require("./wait");
console.log("echo!");

wait("echo...", function(err, value) {
  console.log(value);
});

var asyncEach = function(list, iterator, complete) {
  // keep track of how many items are done - make a counter varible
  var counter = 0;
  // loop through list
  list.forEach(function(item, index) {
    // for each item...
    // call iterator
    iterator(item, function() { //iterator gets the item and passes the fn
    // add one to the total processed items
      counter++; //add one to counter
    // and if counter is ==# of items, call complete
      if (counter == list.length) {  //is the counter as long as the list?
        complete(); //third argument
      }
    });
  });
};

var names = ["Alice","Bob","Carla"];

asyncEach(names, function(name, callback) {// here's a list of names and a fn
  wait(name, function(err, data) {
    console.log(data);
    callback();
  });
}, function() {
  console.log("Goodbye!");
});
