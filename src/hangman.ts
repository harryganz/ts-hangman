
export default class Hangman {
    private word : string;
    wordBank : string[];
    isOver : boolean;
    hasWon : boolean;
    guesses : number;
    
    constructor(word : string) {
        this.word = word;
        this.wordBank = [];
        this.isOver = false;
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
        if (!/^[a-z]+$/i.test(letter)) {
            throw new Error('must guess a letter or word');
        }
        if (!this.wordBank.includes(letter)) {
            if (!this.word.includes(letter)) {
                this.guesses--;
            }
            this.wordBank.push(letter);
        } 
        if (this.guesses < 1) {
            this.isOver = true;
        }
    }
}