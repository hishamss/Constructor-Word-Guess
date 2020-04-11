var Letter = require("./Letter.js");

// define array of new Letter object

function Word(RandWord) {
  this.word = [];
  for (RandChar of RandWord) {
    this.word.push(new Letter.letter(RandChar));
  }
  this.wordrep = function () {
    var repstring = "";
    for (letterojb of this.word) {
      repstring += letterojb + "";
    }
    return repstring;
  };
  this.check = function (charachter) {
    //   this vriable to tell in which loop the match occured
    var result = false;
    for (letterojb of this.word) {
      // check if the retunred value from Letter object is true, means match just happened
      if (letterojb.guess(charachter)) {
        result = true;
      }
    }
    // if the returned value is true, means during the current call the match occured
    return result;
  };
}

module.exports = {
  word: Word,
};
