const Player = require('./player.js');

class Human extends Player {
  constructor(name) {
    super(name);
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = Human;