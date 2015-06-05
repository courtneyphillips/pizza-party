describe('Pizza', function(){

  it("Begins at a base price of 10 dollars", function(){
    var testPizza = new Pizza()
    expect(testPizza.cost).to.equal(10);
  });

  it("Begins with only cheese and sauce as toppings, unless otherwise specified to remove", function(){
    var testPizza = new Pizza()
    expect(testPizza.toppings).to.eql(["cheese", "sauce"])
  });

  it("Has a user-chosen size (small, medium, large, etc.)", function(){
    var testPizza = new Pizza("medium")
    expect(testPizza.size).to.equal("medium");
  });

  it("Can have additional toppings added to it", function(){
    var testPizza = new Pizza("medium")
    testPizza.addTopping("olives");
    expect(testPizza.toppings).to.eql(["cheese", "sauce", "olives"]);
  })

});
