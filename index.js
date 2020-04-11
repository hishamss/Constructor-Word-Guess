var Word = require("./Word.js");
var inquirer = require("inquirer");
var words = ["cat", "dog", "lion", "tiger", "zebra"];

var wordtoguess = words[Math.floor(Math.random() * words.length)];
console.log(wordtoguess);
