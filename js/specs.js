describe('Pizza', function(){
  it("Begins at a base price of 10 dollars", function(){
    var testPizza = new Pizza()
    expect(testPizza.cost).to.equal(10);
  });
  it("Begins with only cheese and sauce as toppings, unless otherwise specified to remove", function(){
    var testPizza = new Pizza()
    expect(testPizza.toppings).to.eql(["cheese", "sauce"])
  });
});
