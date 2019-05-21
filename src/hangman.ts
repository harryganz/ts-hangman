
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
        } else {
            if (!this.wordBank.includes(letter)) {
                if (!this.word.includes(letter)) {
                    this.guesses--;
                }
                this.wordBank.push(letter);
            } 
        }

        if (letter.toLowerCase() === this.word.toLowerCase() || all(this.word.split(''), (l) => this.wordBank.includes(l))) {
            this.hasWon = true;
        }
    }
}

function all(collection : any[], pred : (val : any) => boolean) : boolean {
    return collection.reduce((acc, next) => acc && pred(next), true);
}