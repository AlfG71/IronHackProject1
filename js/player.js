class Player {

  constructor(name) {
    this.name = name;
    this.score = 0;
    this.currentChoice = null;
  }

  makeChoice() {
    // Sets the player's choice for the current round.
  }

  incrementScore() {
    // Increases the player's score when they win a round.
  }

  resetScore() {
    // Resets the player's score when starting a new game.
  }
}

module.exports = Player;