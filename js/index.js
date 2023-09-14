document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();  // Create a new instance of the Game class
  game.disableChoiceButtons(); // Does not allow for user to make a choice prior ro entering their name

  // Handle player name input form
  const nameForm = document.getElementById('name-form');
  const nameDisplay = document.getElementById('user-name-display');
  const computerDisplay = document.getElementById('computer-name-display');
  let playerName;
  let computerName = game.computerPlayer.name

  // Handle prelims bfore user makes a choice
  nameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('player-name');
    playerName = nameInput.value;

    nameDisplay.textContent = `Welcome, ${playerName}!  Let's begin the game.`;

    setTimeout(() => {
      computerDisplay.textContent = `${computerName} is eager to play against you today.`
    }, 1000)

    game.startGame(playerName);

    nameForm.classList.add('hidden');

    game.enableChoiceButtons(); // Choice buttons can now be used
  });

  // Event listeners for player choices
  const rockButton = document.getElementById('rock');
  const paperButton = document.getElementById('paper');
  const scissorsButton = document.getElementById('scissors');
  const lizardButton = document.getElementById('lizard');
  const spockButton = document.getElementById('spock');

  const choiceButtons = [rockButton, paperButton, scissorsButton, lizardButton, spockButton];

  // everytime user makes a choice, the information is updated
  function updatePlayerChoice(choice) {
    game.playRound(choice);

    setTimeout(() => {
      document.getElementById('player-choice-display').textContent = `${playerName} has chosen ${choice}`;
    }, 1000);


    choiceButtons.forEach(button => {
      button.disabled = true;
    })
  }

  rockButton.addEventListener('click', () => updatePlayerChoice('Rock'));
  paperButton.addEventListener('click', () => updatePlayerChoice('Paper'));
  scissorsButton.addEventListener('click', () => updatePlayerChoice('Scissors'));
  lizardButton.addEventListener('click', () => updatePlayerChoice('Lizard'));
  spockButton.addEventListener('click', () => updatePlayerChoice('Spock'));

  const playAgainButton = document.getElementById('play-again');

  // once there is a winner if the player wants to play again, the page will refresh
  playAgainButton.addEventListener('click', () => {

    location.reload();

  });

});
