import { prompt, InputQuestion } from 'inquirer';

import { ObjectDictionary, FileDictionary } from './dictionary';
import Hangman from './hangman';

const guessQuestion : InputQuestion<{guess: string}> = {
    name: 'guess',
    type: 'input',
    message: 'Please enter a guess'
}

let dictionary = new FileDictionary();
dictionary.load('./data/dictionary.json');
let hangman = new Hangman(dictionary.getWord());

function makeGuess() : void {
    prompt([guessQuestion]).then(({ guess }) => {
        hangman.guess(guess);
        console.log(hangman.display());
        if (hangman.guesses === 0) {
            if (hangman.hasWon) {
                console.log('you have won!')
            } else {
                console.log('you have lost');
            }
            console.log('the word was: ' + hangman.showWord());
            console.log('Game over');
        } else {
            console.log('guesses left: ' + hangman.guesses);
            makeGuess();
        }
    })
    .catch(exception => {
        console.log(exception.message);
        makeGuess();
    })
}

console.log(hangman.display())
makeGuess();