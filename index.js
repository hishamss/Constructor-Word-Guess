var Word = require("./Word.js");
var inquirer = require("inquirer");
var words = ["cat", "dog", "lion", "tiger", "zebra"];
var wordtoguess;
var wordtoguessOjb;
var NumOfGuessed;
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
      correct = wordtoguessOjb.check(answer.letter.toLowerCase());
      console.log(wordtoguessOjb.wordrep());
      //   if check method returned true, means that the match just happened and your answer correct
      if (correct) {
        console.log("Correct!");
        NumOfGuessed++;
      } else {
        console.log("Incorrect!!");
        NumOfGuessess--;
        console.log("--------" + NumOfGuessess + " guesses remaining---------");
      }
      if (NumOfGuessess == 0) {
        GameOver();
      } else if (NumOfGuessed == wordtoguess.length) {
        console.log("Great Job!! You Got It right");
        PlayAgain();
      } else {
        PromptCharGuessing();
      }
    });
}

function PlayGame() {
  NumOfGuessess = 8;
  NumOfGuessed = 0;
  console.log("---------New Game----------");
  console.log("--------" + NumOfGuessess + " guesses remaining---------");
  generateword();
  wordtoguessOjb = new Word.word(wordtoguess);
  PromptCharGuessing();
}

function PlayAgain() {
  inquirer
    .prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to play again?",
      },
    ])
    .then(function (answer) {
      if (answer.confirm === true) {
        PlayGame();
      } else {
        console.log("Goodbye");
        process.exit();
      }
    });
}

function GameOver() {
  console.log("-------GAME OVER-----------");

  inquirer
    .prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to play again?",
      },
    ])
    .then(function (answer) {
      if (answer.confirm === true) {
        PlayGame();
      } else {
        console.log("Goodbye");
        process.exit();
      }
    });
}

PlayGame();
