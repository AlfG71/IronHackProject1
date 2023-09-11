const readline = require('readline');
const Game = require('./game.js');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function startGame() {
  rl.question('Enter your name: ', (playerName) => {
    const game = new Game(playerName, 5);
    const computerPlayer = game.computerPlayer.name;

    console.log(`Welcome ${playerName}!  Let's start the game.`);
    console.log(`We will play best 3 out of 5 rounds`);
    console.log(`Your opponent this game will be ${computerPlayer}`);

    playRound(game);

  })
};

function playRound(game) {
  rl.question(`Enter your choice (Rock, Paper, Scissors, Lizard, or Spock): `, (choice) => {
    if (isValidChoice(choice)) {
      game.humanPlayer.currentChoice = choice;
      console.log(`You have chosen ${choice}`);

      const computerChoices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
      const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      game.computerPlayer.currentChoice = computerChoice;
      console.log(`${game.computerPlayer.name} has chosen ${computerChoice}`);

      determineRoundWinner(game);

    if (determineGameWinner(game)) {
      return;
    } else {
      playRound(game);
    }

    } else {
      console.log(`Invalid choice.  Please enter a valid choice.`);
      playRound(game);
    }
  })
}

function isValidChoice(choice) {
  const isValidChoices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  return isValidChoices.includes(choice);
}

function determineRoundWinner(game) {
  const humanPlayerChoice = game.humanPlayer.currentChoice;
  const computerPlayerChoice = game.computerPlayer.currentChoice;
  const humanName = game.humanPlayer.name;
  const computerName = game.computerPlayer.name;

  const rules = {
    Rock: ['Scissors', 'Lizard'],
    Paper: ['Rock', 'Spock'],
    Scissors: ['Paper', 'Lizard'],
    Lizard: ['Spock', 'Paper'],
    Spock: ['Scissors', 'Rock'],
  }

  if (humanPlayerChoice === computerPlayerChoice) {
    console.log(`Alright... We'll call it a draw!`)
  } else if (rules[humanPlayerChoice].includes(computerPlayerChoice)) {
    console.log(`${humanName} wins this round!!!`);
    game.humanPlayer.score++;
  } else {
    console.log(`${computerName} wins this round!!!`);
    game.computerPlayer.score++;
  }
}

function determineGameWinner (game) {
  const totalHumanWins = game.humanPlayer.score;
  const totalComputerWins = game.computerPlayer.score;
  const humanName = game.humanPlayer.name;
  const computerName = game.computerPlayer.name;

  if (totalComputerWins > 2 || totalHumanWins > 2) {
    if (totalHumanWins > totalComputerWins) {
      console.log(`${humanName} has won the game by a score of ${totalHumanWins} to ${totalComputerWins}`)
      return true;
    } else {
      console.log(`${computerName} has won the game by a score of ${totalComputerWins} to ${totalHumanWins}`)
      return true;
    }
  }

  return false;
}

startGame();



// POTENTIAL CODE FOR LATER

// import Game from './game.js';
// export const game = new Game();

// const playerNameInput = document.getElementById('player-name');
// const submmitNameButton = document.getElementById('submit-name');

// submmitNameButton.addEventListener('click', () => {
//   const playerName = playerNameInput.value;

//   if (playerName.trim() !== '') {
//     game.humanPlayer.setName(playerName);

//     console.log(playerName);
//     playerNameInput.value = '';
//   }  else {
//     alert('Please enter a valid name...');
//   }
// });