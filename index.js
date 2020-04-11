var Word = require("./Word.js");
var inquirer = require("inquirer");
var words = ["cat", "dog", "lion", "tiger", "zebra"];

function generate() {
  var wordtoguess = words[Math.floor(Math.random() * words.length)];
  console.log(wordtoguess);
  var wordtoguessOjb = new Word.word(wordtoguess);
}

function playgame() {
  inquirer
    .prompt([
      {
        name: "letter",
        message: "Guess a letter :",
        validate: function (value) {
          // accept only one character
          if (value.length == 1) {
            return true;
          }
          return false;
        },
      },
    ])
    .then(function (answer) {
      console.log(answer.letter);
      playgame();
    });
}

playgame();
