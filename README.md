# Constructor-Word-Guess

- Constructor Word Guess: it's a command-line game using constructor functions.
- the game consists of 3 files: Letter.js, Word.js and index.js
- Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
- Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess
- index.js: The file containing the logic for the course of the game, which depends on Word.js and randomly selects a word and uses the Word constructor to store it also it Prompts the user for each guess and keeps track of the user's remaining guesses.
- the game validate the uer input to only one charachter each time
  ///////////////////////////Video Illustration//////////////////
  - Win the game
    ![video1](assets/vid1.gif)
  - Game Over
    ![video2](assets/vid2.gif)
