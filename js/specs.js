describe('Player', function() {
  it("will return the positions of the pigs after rolled", function() {
    var testPlayer = new Player ("Margie")
    testPlayer.roll();
    var possibilities = [1,2,3,4,5]
    expect(possibilities).to.include(testPlayer.roll());
  });


  it("returns score for player", function() {
    var testPlayer = new Player("Margie");
    testPlayer.roll();
    expect(testPlayer.score).to.equal(60);
  });

  it("returns the winner when two players roll", function() {
    var testPlayer1 = new Player("Margie");
    var testPlayer2 = new Player("Frank");
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    testPlayer1.roll();
    expect(testPlayer1.wins(testPlayer2)).to.equal(testPlayer1);
  })

  //
  // it("will return the name of a roll's outcome", function(){
  //   var testPig = new Pig ("Gladys")
  //   testPig.roll()
  //   var possibilities = ["sleeping pig", "razorback", "trotter", "snouter", "leaning jowler"]
  //   expect(possibilities).to.include()
  //
  // })

});
