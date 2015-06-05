describe('Pizza', function(){

// Spec made obselete by implementation of different base costs for different sized pizzas

  // it("Begins at a base price of 10 dollars", function(){
  //   var testPizza = new Pizza()
  //   expect(testPizza.cost).to.equal(10);
  // });

  it("Begins with no toppings", function(){
    var testPizza = new Pizza()
    expect(testPizza.toppings).to.eql([]);
  });

  it("Has a user-chosen size (small, medium, large, etc.)", function(){
    var testPizza = new Pizza("medium")
    expect(testPizza.size).to.equal("medium");
  });

  it("Can have additional toppings added to it", function(){
    var testPizza = new Pizza("medium")
    testPizza.addTopping("olives");
    testPizza.addTopping("sausage");
    expect(testPizza.toppings).to.eql(["olives", "sausage"]);
  });

  it("Begins at a different base price depending on chosen size", function(){
    var testPizza = new Pizza("small")
    expect(testPizza.findCost()).to.equal(8);
  });

  it("Costs one dollar more for each added topping, calculates cost accordingly", function(){
    var testPizza = new Pizza("small")
    testPizza.addTopping("sausage");
    testPizza.addTopping("mushrooms");
    expect(testPizza.findCost()).to.equal(10);
  });
});



describe('Topping', function(){

  it("Costs 1 dollar per each additional topping", function(){
    var testTopping = new Topping("olives")
    expect(testTopping.cost).to.equal(1);
  });
});



describe('Order', function(){

  it("Starts out empty", function(){
    var newOrder = new Order
    expect(newOrder.pizzas).to.eql([]);
  });

  it("Can have a pizza added to it", function(){
    var newOrder = new Order("courtney")
    var newPizza = new Pizza("medium")
    newOrder.add(newPizza);
    expect(newOrder.pizzas).to.eql([newPizza]);
  });

  it("Collects and compiles pizzas a user orders", function(){
    var newOrder = new Order("courtney")
    var newPizza = new Pizza("medium")
    newOrder.add(newPizza);
    var newPizza2 = new Pizza("large")
    newOrder.add(newPizza2);
    expect(newOrder.pizzas).to.eql([newPizza, newPizza2]);
  });

  it("Calculates the total cost of all pizzas contained in the order", function(){
    var newOrder = new Order("courtney")
    var newPizza = new Pizza("medium")
    newOrder.add(newPizza);
    var newPizza2 = new Pizza("large")
    newOrder.add(newPizza2);
    expect(newOrder.checkout()).to.equal(22);
  });

});
