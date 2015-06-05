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

    var orderName = $("input#orderName").val();
    var pizzaSize = $("input#size").val();
    var pizzaToppings = $(':checkbox:checked').each(function(i){
      pizzaToppings[i] = $(this).val();
    });

    var newPizza = { size: pizzaSize, toppings: pizzaToppings, cost: (newPizza.cost) };

    $("ul#orderlist").append("<li id=" + newPizza.size; + "pizza with:" + "><span class='toppings'>" + newPizza.toppings; + "</span><span class='delete'> (remove) </span></li>");

    // $(".task").last().click(function(){
    //   $("#show-task").show();
    //   $(".task-name").text(taskName);
    //   $(".due-date").text(newTask.dueDate);
    //   $(".task-description").text(newTask.taskDescription);
    //   $(".done").text(newTask.completed);
    // });

  });
});
