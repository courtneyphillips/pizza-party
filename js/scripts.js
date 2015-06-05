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

function Order(name, pizzas, total){
  this.pizzas = [];
  this.total = 0;
  this.name = name;
}

Order.prototype.add = function(pizza){
  (this.pizzas).push(pizza);
}

Order.prototype.checkout = function(){
  var totalCost = this.total;
  (this.pizzas).forEach(function(pizza){
    totalCost += (pizza.findCost());
  });
  return totalCost;
}

// jQuery---------------------------------------------------------------

$(document).ready(function(){

// Begin order function --------------------------------

  $("form#begin-order").submit(function(event){
    event.preventDefault();
    var orderName = $("input#contact").val();
    var newOrder = new Order(orderName);
    $(".begin-order").fadeOut();
    $(".order-form").fadeIn("slow");
    $("span#contact").text(orderName);

// Pizza form submission ---------------------------------

  $("form#new-pizza").submit(function(event){
    event.preventDefault();
    var pizzaSize = $("input[name=size]:checked").val();
    var newPizza = new Pizza(pizzaSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      newPizza.addTopping(topping);
    });

    newOrder.add(newPizza);

    $(".order-form").fadeOut("slow");
    $(".summary").fadeIn("slow");

// Dynamic order display as pizzas are added --------------

    $("span#username").text(orderName + "'s Order:");
    $("ul#orderlist").append("<li>" + newPizza.size + " pizza with: " + newPizza.toppings.join(', ') + "  -  $" + newPizza.findCost() + "</li>");
  });

// Add another pizza -------------------------------------

    $("#addmore").click(function(){
      $(".order-form").fadeIn();
      $(".summary").hide();
    });

// Finalize Order ---------------------------------------

    $("#checkout").click(function(){
      $(".checkout-screen").fadeIn();
      $(".prompt").hide();
      $(".order").show();
      $("span#cost").text(newOrder.checkout());
    });

    $("#submit").click(function(){
      $(".final").show();
      $(".checkout-screen").hide();
      $(".order").hide();
    })

    $("#back").click(function(){
      $(".order").hide();
      $(".prompt").show();
      $(".checkout-screen").show();
      $("span#cost").text(newOrder.checkout());
    });

  });

});
