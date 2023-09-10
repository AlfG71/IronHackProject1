class Move {
  constructor() {
    this.name = null;
  }

  beats(move) {
    // Checks if this move beats the opponent's move
  }

  tiesWith(move) {
    // Checks if this move ties with the opponent's move.
  }

  losesTo(move) {
    //  Checks if this move loses to the opponent's move.
  }
}

class Rock extends Move {

}

class Paper extends Move {

}

class Scissors extends Move {

}

class Lizard extends Move {

}

class Spock extends Move {
  
}