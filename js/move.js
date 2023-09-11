class Move {
  static getMoves() {
    return ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
  }

  static getWinner(choice1, choice2) {
    
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

module.exports = Move;

// class Rock extends Move {

// }

// class Paper extends Move {

// }

// class Scissors extends Move {

// }

// class Lizard extends Move {

// }

// class Spock extends Move {

// }