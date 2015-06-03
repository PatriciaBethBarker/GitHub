var asyncSeries = function(tasks, done) {
  var counter = 0;
  //tasks.forEach(function(fn, i) {
    var callback = function(err) {
      if(err != null) {
        return console.log("Error", err);
      }
      counter++; //value of counter
      var next = tasks[counter]; //value of next
      next(callback); //cycling itself till done
    }
    var fn = tasks[counter];
    fn(callback)

  //  });

};




asyncSeries([
  function(callback) {
    console.log(1);
    callback();
  }, function(callback) {
    setTimeout(function() {
      console.log(2);
      callback(null, "here are the results");
    }, 1000);
  }, console.log.bind(console, 3)
], function(err) {
  console.log("This should not run unless there are errors.");
});
