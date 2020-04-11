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
    //   this variable changes to true only when the carachter matches
    var found = false;
    if (charachter === this.letter) {
      this.guessed = true;
      found = true;
    }
    // if the returned value is true, means during the current call the match occured
    return found;
  };
}

module.exports = {
  letter: Letter,
};
