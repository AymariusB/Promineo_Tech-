// -- Create classes such as Card, Deck & Player.Keeping in mind what fields and methods each class might have.
// -- Deal 26 Cards to 2 Players from a Deck
const suits = ['♥️', '♣️', '♦️', '♠️'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

class Card {
    constructor(suit, value, rank) {
        this.suit = suit;
        this.value = value;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
      this.deck = [];
      for (let suit of suits) {
        for (let value of values) {
//         this.deck.push(`${values[value]} of ${suits[suit]}`);
this.deck.push({suit,value});
        }
      }console.log(this.deck[0].value);
    } 
  
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
      while(m){
        i = Math.floor(Math.random() * m--);
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
      return this;
    }
    
  }

class Player {
    constructor(){
        this.playerHand = [];
        this.playerScore = 0;
    }
}

const playDeck = new Deck();
playDeck.shuffle();
const player1 = new Player();
const player2 = new Player();

function dealCards(){
    for(let i = 0; i < 26; i++){
        player1.playerHand.push(playDeck.deck[i]);
        player2.playerHand.push(playDeck.deck[i + 26]);
    }
}

dealCards();

console.log(`---------🔥💣💣 LET THE WAR BEGIN 💣💣🔥 ---------
`);

for (let i = 0; i < 26; i++){
    const player1Card = player1.playerHand[i].value;
    const player2Card = player2.playerHand[i].value;
   
   // const player1CardValue = player1Card.split(" ")[0];
 // const player2CardValue = player2Card.split(" ")[0];

    console.log(`----- ROUND 🎲 ${i + 1} 🎲 -----
    `);
    if(player1Card > player2Card){
        player1.playerScore++;
        console.log(`Player 1 won with ${player1Card} over ${player2Card}
        `);
        
    } else if (player1Card < player2Card){
        player2.playerScore++;
        console.log(`Player 2 won with ${player2Card} over ${player1Card}
        `);
    } else {
        console.log(`It's a 🎀! Both players have ${player1Card}
        `);
    }
}

console.log(`---------🔥💣💣 THE WAR IS OVER 💣💣🔥 ---------
`);

if(player1.playerScore > player2.playerScore){
    console.log(`Player 1 wins the game with ${player1.playerScore} points!`);
} else if (player1.playerScore < player2.playerScore){
    console.log(`Player 2 wins the game with ${player2.playerScore} points!`);
} else {
    console.log(`It's a 🎀! Both players have ${player1.playerScore} points!`);
}



