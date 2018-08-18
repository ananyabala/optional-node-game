// letter.js
// Letter class that stores a letter
// and has a variable 'guess' that indicate if letter is guessed or not

// A constructor that receives a letter
var Letter = function (letter) {
    this.letter = letter;
    // Indicate if the letter is guessed or not
    this.guessed = false;
}
// Returns the letter if guessed, else _
Letter.prototype.toString = function () {
    if (this.guessed == true) {
        return this.letter;
    }
    else {
        return "_";
    }
}
// Check if character is correct 
Letter.prototype.guess = function (ch) {
    if (this.letter === ch) {
        this.guessed = true;
    }
}

module.exports = Letter;