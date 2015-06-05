//Pizza object and functions --------------------

function Pizza(size, toppings, cost){
  this.size = size
  this.toppings = ["cheese", "sauce"]
  this.cost = 10
}

Pizza.prototype.addTopping = function(topping){
  (this.toppings).push(topping);
}

Pizza.prototype.findCost = function(){
  this.cost += (this.toppings.length);
  return this.cost;
}

// Pizza.prototype.addCart = function(){
//   var order = new Order
//   this.push(orderPizzas);
// }

//Toppings object(s) and functions --------------

function Topping(item, cost){
  this.item = item
  this.cost = 1
}

// Order object(s) and functions ----------------

var orderPizzas = [];

function Order(name, pizzas, cost){
  this.pizzas = orderPizzas;
  this.cost = cost;
  this.name = name;
}
