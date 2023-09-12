class Game {

  constructor() {

    this.humanPlayer = null;
    this.computerPlayer = null;
    this.currentRound = 1;

  }

  startGame(playerName) {

    this.humanPlayer = new Human(playerName);
    this.computerPlayer = new Computer();
    this.currentRound = 1;
    this.displayUserName(playerName);

  }

  handlePlayerChoice(choice) {
    const computerChoice = this.computerPlayer.generateComputerChoice();

    document.getElementById('computer-choice').textContent = `Computer chose ${computerChoice}`;

    const result = this.evaluateChoices(choice, computerChoice);

    document.getElementById('round-result').textContent = result;

    document.getElementById('player-score').textContent = `Player: ${this.humanPlayer.score}`;
    document.getElementById('computer-score').textContent = `Computer: ${this.computerPlayer.score}`;

    document.getElementById('play-again').classList.remove('hidden');
  }

  displayUserName() {
    return this.name;
  }

  evaluateChoices(playerChoice, computerChoice) {
    const rules = {
      Rock: ['Scissors', 'Lizard'],
      Paper: ['Rock', 'Spock'],
      Scissors: ['Paper', 'Lizard'],
      Lizard: ['Spock', 'Paper'],
      Spock: ['Scissors', 'Rock'],
    }

    if (playerChoice === computerChoice) {
      return `Alroght...  We'll call it a draw!`;
    } else if (rules[playerChoice].includes(computerChoice)) {
      this.humanPlayer.incrementScore();
      return `You win this round!`;
    } else {
      this.computerPlayer.incrementScore();
      return `Computer wins this round!`;
    }
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

