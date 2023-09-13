class Game {

  constructor() {

    this.humanPlayer = null;
    this.computerPlayer = new Computer();
    this.currentRound = 1;

  }

  startGame(playerName) {

    this.humanPlayer = new Human(playerName);
    this.displayUserName(playerName);

    const intervalId = setInterval(() => {
      if (this.humanPlayer.score < 3 && this.computerPlayer.score < 3) {
        this.currentRound++;
      } else {
        const gameWinner = this.checkForGameWinner(this.humanPlayer, this.computerPlayer);
        if (gameWinner) {
          clearInterval(intervalId);
          setTimeout(() => {
            this.annouceGameWinner(gameWinner);
          }, 8000);
          this.resetGame();
        }
      }
    }, 2000);

  }

  playRound(choice) {
    // generates the choice of the computer
    const computerChoice = this.computerPlayer.generateComputerChoice();

    // displays computer choice on page after 3 seconds
    setTimeout(() => {
      document.getElementById('computer-choice').textContent = `${this.computerPlayer.name} chose ${computerChoice}`;
    }, 3000);

    const rulesText = this.evaluateRules(choice, computerChoice);

    setTimeout(() => {
      document.getElementById('rules-text').textContent = rulesText;
    }, 4000)

    // evaluates the choices of each player to declare a winner or tie
    const result = this.evaluateChoices(choice, computerChoice);

    setTimeout(() => {
      document.getElementById('round-result').textContent = result;
    }, 6000);

    // setTimeout(() => {
    //   document.getElementById('play-again').classList.remove('hidden');
    // }, 6000);

    setTimeout(() =>{
      document.getElementById('player-score').textContent = `Player: ${this.humanPlayer.score}`;
      document.getElementById('computer-score').textContent = `Computer: ${this.computerPlayer.score}`;

      this.resetRound();
    }, 7000);

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
      return `Alright...  We'll call it a draw!`;
    } else if (rules[playerChoice].includes(computerChoice)) {
      this.humanPlayer.incrementScore();
      return `${this.humanPlayer.name} wins this round!`;
    } else {
      this.computerPlayer.incrementScore();
      return `${this.computerPlayer.name} wins this round!`;
    }

  }

  evaluateRules(choice1, choice2) {
    const currentCombination = `${choice1}-${choice2}`
    switch (currentCombination) {
      case 'Spock-Scissors':
      case 'Scissors-Spock':
        return `Spock smashes scissors so...`;
        break;
      case 'Scissors-Paper':
      case 'Paper-Scissors':
        return `Scissors cuts paper so...`;
        break;
      case 'Paper-Rock':
      case 'Rock-Paper':
        return `Paper covers rock so...`;
        break;
      case 'Rock-Lizard':
      case 'Lizard-Rock':
        return `Rock crushes lizard so...`;
        break;
      case 'Lizard-Spock':
      case 'Spock-Lizard':
        return `Lizard poisons Spock so...`;
        break;
      case 'Scissors-Lizard':
      case 'Lizard-Scissors':
        return `Scissors decapitates lizard so...`;
        break;
      case 'Scissors-Rock':
      case 'Rock-Scissors':
        return `Rock crushes scissors so...`;
        break;
      case 'Spock-Rock':
      case 'Rock-Spock':
        return `Spock vaporizes rock so...`;
        break;
      case 'Spock-Paper':
      case 'Paper-Spock':
        return `Paper disproves Spock so...`;
        break;
      case 'Lizard-Paper':
      case 'Paper-Lizard':
        return `Lizard eats paper so...`;
        break;
      default:
        return `You both chose the same.`
        // return `${choice1}-${choice2}` used for debugging purposes
    }
  }

  resetRound() {
    // Reset the currentChoice properties for each player
    this.humanPlayer.resetCurrentChoice();
    this.computerPlayer.resetCurrentChoice();

    // Reset the display elements
    document.getElementById('round-result').textContent = '';
    document.getElementById('computer-choice').textContent = '';
    document.getElementById('rules-text').textContent = '';
    document.getElementById('player-choice-display').textContent = "What's your choice?";  //What's your choice?

    // Enable choice buttons for the next round
    const choiceButtons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    choiceButtons.forEach(choice => {
      document.getElementById(choice).disabled = false;
    });

    // Hide the play-again prompt
    document.getElementById('play-again').classList.add('hidden');
  }



  checkForGameWinner(player1, player2) {
    // Checks if there's a game winner based on the score and the number of rounds to win.
    if (player1.score >= 3) {
      return `${player1.name} wins the game!!!`;
    } else if (player2.score >= 3) {
      return `${player2.name} wins the game!!!`
    } else {
      return false;
    }
  }

  annouceGameWinner(result) {
    const gameWinner = document.getElementById('game-result');
    gameWinner.textContent = result;
  }

  resetGame() {
    this.humanPlayer.resetScore();
    this.computerPlayer.resetScore();
    this.currentRound = 1;
  }

}

