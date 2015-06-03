//orders.js

var ordering = { //is an object that has pizzas as an array
  pizzas: [], //add is a function that takes a pizza and pushes it into pizzas
  add: function(pizza) {
    ordering.pizzas.push(pizza);
  }
};

 module.exports = ordering; //buiness logic
