"use strict";
exports.__esModule = true;
var Hangman = /** @class */ (function () {
    function Hangman(word) {
        this.word = word;
        this.wordBank = [];
        this.hasWon = false;
        this.guesses = 5;
    }
    Hangman.prototype.display = function () {
        var _this = this;
        return this.word
            .split('')
            .map(function (letter) { return _this.wordBank.includes(letter) ? letter : '*'; })
            .join('');
    };
    Hangman.prototype.guess = function (letter) {
        // Check that letter is a letter or word
        if (!/^[a-z]+$/i.test(letter)) {
            throw new Error('must guess a letter or word');
        }
        if (letter.length > 1) {
            this.guesses = 0;
            // If answer is equal to the word, set hasWon to true
            if (letter.toLowerCase() === this.word.toLowerCase()) {
                this.hasWon = true;
            }
        }
        else {
            if (!this.wordBank.includes(letter)) {
                if (!this.word.includes(letter)) {
                    this.guesses--;
                }
                this.wordBank.push(letter);
            }
        }
    };
    return Hangman;
}());
exports["default"] = Hangman;
