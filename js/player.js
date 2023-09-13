class Player {

  constructor(name) {
    this.name = name;
    this.score = 0;
    this.currentChoice = null;

  }

  makeChoice(choice) {

    this.currentChoice = choice;

  }

  incrementScore() {

    this.score++;

  }

  resetCurrentChoice() {

    this.currentChoice = null;
    
  }

  resetScore() {

    this.score = 0;

  }

}
