class Computer extends Player {

  constructor() {
    super();
    this.name = this.generateRandomName();
  }

  generateRandomName() {
    const computerNames = ['C3PO', 'R2D2', 'Hal', 'Wall-E', 'BB5', 'Bender', 'Optimus Prime']

    const name = computerNames[Math.floor(Math.random() * computerNames.length)];

    return name;
  }

  generateComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

}
