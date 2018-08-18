// index.js

var inquirer = require("inquirer");
var Word = require("./word.js");
var Letter = require("./letter.js");

console.log("Word Game");
// Array of words to be guessed
var gameWords = ["cat", "dog", "lion", "bat", "wolf"];
console.log(gameWords);
// Pick a random word
// Converting a float number into a int number
var randomIndex = parseInt(Math.random() * gameWords.length);
var randomWord = gameWords[randomIndex];
console.log(randomWord);
// Make a word object
// Insert random word 
var wordObject = new Word(randomWord);
// Print out word to be guessed 
console.log(wordObject.toString());

var question = [
    {
        message: "Please enter letter:",
        type: "input",
        name: "name"
    }];

function processGuess(answer) {
    console.log("You guessed letter", answer.name, "\n");

    // Check if letter is correct 
    wordObject.isLetter(answer.name);
    console.log(wordObject.toString());
    // Check if word has been guessed
    var wordToBeGuessed = wordObject.toString();
    if (wordToBeGuessed.indexOf("_") >= 0) {
        inquirer.prompt(question).then(processGuess);
    }
    else {
        console.log(wordObject.toString());
        console.log("You guessed the word!!!!");
    }
}
inquirer.prompt(question).then(processGuess);