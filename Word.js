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

var test = new Word("hisham");
// console.log(test.word);
console.log(test.wordrep());
test.check("h");
console.log(test.wordrep());
test.check("m");
console.log(test.wordrep());
// newletter.push(new Letter.letter());
// newletter[0].letter = "a";
// newletter[0].guessed = true;
// newletter.push(new Letter.letter());
// newletter[1].letter = "b";
// // newletter[1].guessed = true;
// console.log(newletter[1]);
// newletter[1].letter = "b";
// newletter[1].guessed = false;
// console.log(newletter);
// newletter[1].guessed = true;
// console.log(newletter);
