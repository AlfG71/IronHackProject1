document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();  // Create a new instance of the Game class
  game.startGame(); // Initialize the game

  // Event listeners for player choices
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const lizardButton = document.getElementById('lizard');
  const spockButton = document.getElementById('spock');

  const choiceButtons = [rockButton, paperButton, scissorsButton, lizardButton, spockButton];

  function updatePlayerChoice(choice) {
    game.handlePlayerChoice(choice);
    document.getElementById('player-choice-display').textContent = `You have chosen ${choice}`;

    choiceButtons.forEach(buttone => {
      buttone.disabled = true;
    })
  }

  rockButton.addEventListener('click', () => updatePlayerChoice('Rock'));
  paperButton.addEventListener('click', () => updatePlayerChoice('Paper'));
  scissorsButton.addEventListener('click', () => updatePlayerChoice('Scissors'));
  lizardButton.addEventListener('click', () => updatePlayerChoice('Lizard'));
  spockButton.addEventListener('click', () => updatePlayerChoice('Spock'));

  // Handle player name input form
  const nameForm = document.getElementById('name-form');
  const nameDisplay = document.getElementById('user-name-display');

  nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('player-name');
    const playerName = nameInput.value;

    nameDisplay.textContent = `Welcome, ${playerName}!  Let's begin the game.`;

    game.startGame(playerName);
    nameForm.classList.add('hidden');
  });
});








// PREVIOUS CODE THAT WORKS WITH THE BROWSER NOT CLASS BASED

// const nameForm = document.getElementById('name-form');
// const nameInput = document.getElementById('player-name');
// const submitButton = document.getElementById('submit-name');
// const userNameDisplay = document.getElementById('user-name-display');

// function handleNameSubmission(event) {
//   event.preventDefault();
//   const name = nameInput.value;
//   displayUserName(name);
//   clearNameInput();
//   nameForm.classList.add('hidden');
// }

// function displayUserName(name) {
//   if(name.trim() !== '') {
//     userNameDisplay.textContent = `Welcome, ${name}! Let's begin the game.`;
//   }
// }

// function clearNameInput() {
//   nameInput.value = '';
// }

// nameForm.addEventListener('submit', handleNameSubmission);

// function handlePlayerChoice(playerChoice) {
//   const playerChoiceDisplay = document.getElementById('player-choice-display');
//   const computerChoiceDisplay = document.getElementById('computer-choice');

//   const computerChoice = generateComputerChoice();
//   const submittedPlayerChoice = playerChoice;

  // rockButton.removeEventListener('click', handleRockClick);
  // paperButton.removeEventListener('click', handlePaperClick);
  // scissorsButton.removeEventListener('click', handleScissorsClick);
  // lizardButton.removeEventListener('click', handleLizardClick);
  // spockButton.removeEventListener('click', handleSpockClick);

//   playerChoiceDisplay.textContent = `You chose ${submittedPlayerChoice}`;

//   setTimeout(() => {

//     computerChoiceDisplay.textContent = `Computer chose ${computerChoice}.`;

//     const result = evaluateWinner(submittedPlayerChoice, computerChoice);

//     displayResult(result);

//   }, 1500);

//   setTimeout(() => {

//     const playAgain = document.getElementById('play-again');
//     playAgain.classList.remove('hidden');

//   }, 3000);


// }

// function displayResult(result) {
//   const resultDisplay = document.getElementById('round-result');
//   resultDisplay.textContent = result;
// }

// function evaluateWinner(playerChoice, computerChoice) {
//   const rules = {
//     Rock: ['Scissors', 'Lizard'],
//     Paper: ['Rock', 'Spock'],
//     Scissors: ['Paper', 'Lizard'],
//     Lizard: ['Spock', 'Paper'],
//     Spock: ['Scissors', 'Rock'],
//   }

//   if (playerChoice === computerChoice) {
//     return `Alright...  We'll call it a draw`;
//   }  else if (rules[playerChoice].includes(computerChoice)) {
//     return 'You win!';
//   } else {
//     return 'Computer wins!'
//   }
// }

// function generateComputerChoice() {
//   const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function handleRockClick() {
//   handlePlayerChoice('Rock');
// }

// function handlePaperClick() {
//   handlePlayerChoice('Paper');
// }

// function handleScissorsClick() {
//   handlePlayerChoice('Scissors');
// }

// function handleLizardClick() {
//   handlePlayerChoice('Lizard');
// }

// function handleSpockClick() {
//   handlePlayerChoice('Spock');
// }

// const rockButton = document.getElementById('rock');
// const paperButton = document.getElementById('paper');
// const scissorsButton = document.getElementById('scissors');
// const lizardButton = document.getElementById('lizard');
// const spockButton = document.getElementById('spock');

// rockButton.addEventListener('click', handleRockClick);
// paperButton.addEventListener('click', handlePaperClick);
// scissorsButton.addEventListener('click', handleScissorsClick);
// lizardButton.addEventListener('click', handleLizardClick);
// spockButton.addEventListener('click', handleSpockClick);
