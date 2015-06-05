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

function Topping(name, cost){
  this.name = name
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
    var pizzaSize = $("input[name=size]:checked").val();
    var newPizza = new Pizza(pizzaSize);
    var toppings = $('input.topping:checked').val();
    debugger;
      toppings.each(function(item){

      var newTopping = new Topping(item)
      newPizza.addTopping(newTopping);
    });

// Dynamic order display as pizzas are added ----

    $("span#username").text(orderName + "'s Order:");
    $("ul#orderlist").append("<li>" + newPizza.size + " pizza with:" + newPizza.toppings + "</span></li>");
  });

});
