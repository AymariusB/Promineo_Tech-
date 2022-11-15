// Clear out the mess to start!
console.clear();

// Define the Card Class
var Card = (function(){
  // Member Vars
  //index: '# 0-51 signifies the index of a card in a new deck of cards'
  //value: 'numerical value: 1 - 13'
  //suit: 'spades, diamonds, clubs, hearts'
  
  // Prototype members
  //number: '2 - 10, J, Q, K, A'
  //name: ' {number} of {suit} '
  
  //          ['Spades', 'Diamonds', 'Clubs', 'Hearts']
  var suitNames = ['spades', 'diamonds', 'clubs', 'hearts'],
      suitCodes = ['\u2660', '\u2666', '\u2663', '\u2665'],
      Card = function(index){
        this.index = index;
        this.value = (index % 13)+1;
        this.suit = suitNames[Math.floor(index/13)];
      };
  
  Card.prototype = {
    get number() {
      switch(this.value) {
        case 11:
          return 'J';
        case 12:
          return 'Q';
        case 13:
          return 'K';
        case 1:
          return 'A';
        default:
          return this.value;
      }
      return this.value;
    },
    get name() {
      var numberName = (function(n){
        switch(n){
          case 'A': return 'Ace';
          case 'K': return 'King';
          case 'Q': return 'Queen';
          case 'J': return 'Jack';
          default: return n;
        }
      })(this.number);
      return numberName + ' of ' + this.suit;
    },
    get suitUnicodeArray() { return suitCodes; },
    get suitNameArray() { return suitNames; }
  };
            
  return Card;
})();

console.log(new Card(13));

/*** START GAME SETUP ***/

// Create Deck of cards
var deck = Array.apply(null, Array(52)).map(function(_, i){ return new Card(i); });

//for( var i = 0 ; i < 13 ; i++ ){
  //console.log( deck[i] );
//}

// Create player decks
var playerDeck = [], cpuDeck = [],
    drawIndex;

// Deal cards to players (2)
while( deck.length > 0 ){
  
  // Draw Card for Player
  drawIndex = Math.random() * deck.length;
  playerDeck.push( deck.splice(drawIndex, 1)[0] );
  
  // Draw Card for CPU
  drawIndex = Math.random() * deck.length;
  cpuDeck.push( deck.splice(drawIndex.cpu, 1)[0] );
  
}
