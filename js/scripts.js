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

// Pizza.prototype.addOrder = function(name, pizza){
//   var order = (new Order).pizzas
//   order.push({
//     name: name,
//     pizza: this
//   });
// }

//Toppings object(s) and functions --------------

function Topping(item, cost){
  this.item = item
  this.cost = 1
}

// Order object(s) and functions ----------------

function Order(name, pizzas, cost){
  this.pizzas = [];
  this.cost = cost;
  this.name = name;
}

// jQuery---------------------------------------

$(document).ready(function(){

// Pizza form submission -----------------------

  $("form#new-pizza").submit(function(event){
    event.preventDefault();

    var orderName = $("input#ordername").val();
    var pizzaSize = $("input#size").val();
    var pizzaToppings = [];
    var pizzaToppings = $(':checkbox:checked').each(function(i){
      pizzaToppings[i] = $(this).val();
    })

    var newPizza = { size: pizzaSize, toppings: pizzaToppings };
    $("span#username").text(orderName + "'s Order:");
    $("ul#orderlist").append("<li>" + newPizza.size + "pizza with:" + newPizza.toppings + "</span></li>");

  });

});
