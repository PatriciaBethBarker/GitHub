// functions
// forEach
// async.each
// functions are values and they accept values

var z = 12;

var f = function(y) {
  var x = y;
  x +=z;
  return x;
};

var x = f(1); // x ==13

var g = function(fn) {
  var result = fn(1); //arguement gets passed here
  console.log(result);

};
// pay close attention to the meaning of the puncuation
// we are calling g and calling it, causing it to run, f is not being executed
// we are passing that function value to g
g(f);

var fibonacci = [1,1,2,3,5,8];
fibonacci.forEach(function(item){  // forEach won't break like a forLoop will
  console.log(item * 2);
});

fibonacci.sort(function(a,b) {
  if (a < b) return 1;  // this is where the sort happens
  if (a > b) return -1;
  return 0;
});


//function that

var adder = function(first) {  //the outer scope for this function
  return function(second) { //the inner function closes over the variables in the outer function
    return first + second; // it remembers the function first , its equal to 5
  }
};

var add5 = adder(5); //currying memorizes a first function
var result = add5(10);  //15
console.log("add5 + 10", result);

// @param list An array to be processes
// @param f A function called on each item
var each = function(list, f) { //using the items - costomizable and adaptable
  //loop through list
  for(var i = 0; i <list.length; i++) {
    // f is passed an item and its index
    var item = list[i];
    f(item, i);
  }
};

var names = ["Alice", "Bob", "Carla"];
var greet = function(name, index) {
  console.log(arguments);
  console.log("Hello, " + name + " (#" + index + ")")

};

each(names, greet); // not calling greet directly, pass it a different function

//query selector all returns a numbered load list,
//not foreach that you expect in an array
//jquery call backs and forEach - when you attach and event listener, it's easy
//to foget calling a function by name instead of calling it by adding parens after the fn
