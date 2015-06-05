function Pizza(size, toppings, cost){
  this.size = size
  this.toppings = []
  this.cost = 0
}

Pizza.prototype.addTopping = function(topping){
  (this.toppings).push(topping);
}

Pizza.prototype.findCost = function(){
  if (this.size == "small"){
    this.cost += 8;
  } else if (this.size == "medium"){
    this.cost += 10;
  } else if (this.size == "large"){
    this.cost += 12;
  }
  this.cost += (this.toppings.length);
  return this.cost;
}

function Topping(name, cost){
  this.name = name
  this.cost = 1
}

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
    totalCost = totalCost + (pizza.findCost());
  });
  return totalCost;
}

$(document).ready(function(){

  $("form#begin-order").submit(function(event){
    event.preventDefault();
    var orderName = $("input#contact").val();
    var newOrder = new Order(orderName);
    $(".begin-order").fadeOut();
    $(".order-form").fadeIn("slow");
    $("span#contact").text(orderName);

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

    $("span#username").text(orderName + "'s Order:");
    $("ul#orderlist").append("<li>" + newPizza.size + " pizza with: " + newPizza.toppings.join(', ') + "  -  $" + newPizza.findCost() + "</li>");
  });

    $("#addmore").click(function(){
      $(".order-form").fadeIn();
      $(".summary").hide();
    });

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
      $(".finalprompt").show();
      $(".checkout-screen").hide();
    })

    $("#back").click(function(){
      $(".order").hide();
      $(".prompt").show();
      $(".checkout-screen").show();
      $("span#cost").text(newOrder.checkout());
    });
  });
});
