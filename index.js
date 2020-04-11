var Word = require("./Word.js");
var inquirer = require("inquirer");
var words = ["cat", "dog", "lion", "tiger", "zebra"];
var wordtoguess;
var wordtoguessOjb;
function generateword() {
  wordtoguess = words[Math.floor(Math.random() * words.length)];
}

function PromptCharGuessing() {
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
      //   console.log(answer.letter);
      var correct = false;
      correct = wordtoguessOjb.check(answer.letter);
      console.log(wordtoguessOjb.wordrep());
      //   if check method returned true, means that the match just happened and your answer correct
      if (correct) {
        console.log("Correct!");
      } else {
        console.log("InCorrect!!");
      }

      PromptCharGuessing();
    });
}

function PlayGame() {
  generateword();
  wordtoguessOjb = new Word.word(wordtoguess);
  PromptCharGuessing();
}

PlayGame();
