
export default class Hangman {
    private word : string;
    private wordBank : string[];
    
    constructor(word : string) {
        this.word = word;
        this.wordBank = [];
    }

    display() : string {
        return this.word
            .split('')
            .map(letter => this.wordBank.includes(letter) ? letter : '*')
            .join('');
    }

    guess(letter : string) : void {
        this.wordBank.push(letter);
    }
}