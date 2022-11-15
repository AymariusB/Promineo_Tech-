let expect = chai.expect;

describe("My Card class", function() {
    describe("#Card"), function(){
        it("should be a class", function() {
            expect(Card).to.be.a("class");
          });
          it("should be an instance of Card", function() {
            const card = new Card();
            expect(card).to.be.an.instanceof(Card);
          });
          it("should have a suit", function() {
            const card = new Card("♥️", "A", 2);
            expect(card.suit).to.equal("♥️");
          });
          it("should have a value", function() {
            const card = new Card("♥️", "A", 2);
            expect(card.value).to.equal(2);
          });
          it("should have a rank", function() {
            const card = new Card("♥️", "A", 2);
            expect(card.rank).to.equal("A");
          });

          it("should throw an error if card does not have a suit", function() {
            expect(() => new Card()).to.throw(Error);
          });
            it("should throw an error if card does not have a value", function() {
            expect(() => new Card("♥️")).to.throw(Error);
            });
            it("should throw an error if card does not have a rank", function() {
            expect(() => new Card("♥️", 2)).to.throw(Error);
            });
    }
});