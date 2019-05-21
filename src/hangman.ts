
export default class Hangman {
    private word : string;
    wordBank : string[];
    hasWon : boolean;
    guesses : number;
    
    constructor(word : string) {
        this.word = word;
        this.wordBank = [];
        this.hasWon = false;
        this.guesses = 5;
    }

    display() : string {
        return this.word
            .split('')
            .map(letter => this.wordBank.includes(letter) ? letter : '*')
            .join('');
    }

    guess(letter : string) : void {
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
        } else {
            if (!this.wordBank.includes(letter)) {
                if (!this.word.includes(letter)) {
                    this.guesses--;
                }
                this.wordBank.push(letter);
            } 
        }
    }
}