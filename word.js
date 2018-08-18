// word.js
var Letter = require('./letter.js')
// Constructor receives a word to be stored as a array of letter objects 
var Word = function (word)
 {
    // Array of letter objects
    this.letters = [];
    // Store the word in the array of letter objects
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter (word[i]));
    }
}

// Displays the word as a character or underscore letters
Word.prototype.toString = function () {
    // Join all the letters of the letter array into a string
    var s = ""; // make empty string
    // Fill empty string with letters
    for (var i = 0; i < this.letters.length; i++) {
        s += this.letters[i];
    } 
    return s;
}

// Receives a character argument 
// calls the guess function on each letter
Word.prototype.isLetter = function (ch) {
    for (var i = 0; i < this.letters.length; i++) {
        this.letters[i].guess(ch);
    }
}
// Export word class - 
module.exports = Word;