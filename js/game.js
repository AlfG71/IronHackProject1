const Human = require('./human.js');
const Computer = require('./computer.js');

class Game {

  constructor(playerName, gameLength) {

    this.humanPlayer = new Human(playerName);
    this.computerPlayer = new Computer();
    // this.roundsToWin = gameLength;
    this.currentRound = 1;

  }

  startGame() {
   // Starts a new game, initializes players, and sets up the game based on player input.
   console.log("And we are off!");
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
    this.humanPlayer.resetScore();
    this.computerPlayer.resetScore();
    this.currentRound = 1;
  }

}

module.exports = Game;

// const newGame = new Game();

// console.log(newGame.startGame());
// console.log(newGame);