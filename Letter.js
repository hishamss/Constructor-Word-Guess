function Letter(letter) {
  this.letter = letter;
  this.guessed = false;
  this.toString = function () {
    if (this.guessed) {
      return this.letter;
    } else {
      return "-";
    }
  };
  this.guess = function (charachter) {
    if (charachter === this.letter) {
      this.guessed = true;
    } else {
      this.guessed = false;
    }
  };
}

module.exports = {
  letter: Letter,
};
