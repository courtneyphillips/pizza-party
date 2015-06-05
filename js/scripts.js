//Pizza object and functions --------------------

function Pizza(size, toppings, cost){
  this.size = size
  this.toppings = ["Cheese", "Sauce"]
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

Order.prototype.add = function(pizza){
  (this.pizzas).push(pizza);
}

// jQuery---------------------------------------------------------------

$(document).ready(function(){

// Begin order function -----------------------

  $("form#begin-order").submit(function(event){
    event.preventDefault();
    var orderName = $("input#contact").val();
    var number = $("input#phone").val();
    var newOrder = new Order(orderName);
    $(".begin-order").fadeOut();
    $(".order-form").fadeIn("slow");
    $("#contact").text(orderName);
    $("#number").text(number);
  });

// Pizza form submission -----------------------

  $("form#new-pizza").submit(function(event){
    event.preventDefault();
    var orderName = $("input#ordername").val();
    var pizzaSize = $("input[name=size]:checked").val();
    var newPizza = new Pizza(pizzaSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      newPizza.addTopping(topping);
    });

// Create new Order ---------------------




// Dynamic order display as pizzas are added ----

    $("span#username").text(orderName + "'s Order:");
    $("ul#orderlist").append("<li>" + newPizza.size + " pizza with: " + newPizza.toppings.join(', ') + "</span></li>");
  });

});
