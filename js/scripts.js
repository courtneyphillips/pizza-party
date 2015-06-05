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

//Toppings object(s) and functions --------------

function Topping(item, cost){
  this.item = item
  this.cost = 1
}
