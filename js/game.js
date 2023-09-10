const Human = require('./human.js');
const Computer = require('./computer.js');

class Game {

  constructor(playerName, gameLength) {

    this.humanPlayer = new Human();
    this.computerPlayer = new Computer();
    this.roundsToWin = 0;
    this.gameLength = 0;

  }

  startGame() {
   // Starts a new game, initializes players, and sets up the game based on player input.
   return "And we are off!";
  }

  playRound() {
    // Handles the logic for each round of the game.
  }

  checkForGameWinner() {
    // Checks if there's a game winner based on the score and the number of rounds to win.
  }

  annouceGameWinner() {
    // Announces the game winner and asks the player if they want to play again.
  }

  resetGame() {
    //  Resets the game state to play another game.
  }

}

const newGame = new Game();

console.log(newGame.startGame());
console.log(newGame);