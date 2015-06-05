function Pizza(size, toppings, cost){
  this.size = size
  this.toppings = ["cheese", "sauce"]
  this.cost = 10
}

function Toppings(item, amount){
  this.item = item
  this.amount = amount
}


Pizza.prototype.addTopping = function(topping){
  (this.toppings).push(topping);
}
