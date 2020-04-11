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
    for (letterojb of this.word) {
      letterojb.guess(charachter);
    }
  };
}

module.exports = {
  word: Word,
};

// var test = new Word("hisham");

// console.log(test.wordrep());
// test.check("h");
// console.log(test.wordrep());
// test.check("m");
// console.log(test.wordrep());
