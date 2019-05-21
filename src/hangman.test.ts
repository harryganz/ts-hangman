import Hangman from './hangman';
import * as expect from 'expect';

describe('expect Hangman display function', () => {

    it('to return all asterisks of the length of the original word if no letters guessed', () => {
        let words : { word: string; expect: string }[] = [
            {
                word: 'foo',
                expect: '***'
            },
            {
                word: 'apple',
                expect: '*****'
            },
            {
                word: 'banana',
                expect: '******'
            }
        ];

        words.forEach((val) => {
            let h = new Hangman(val.word);
            expect(h.display()).toBe(val.expect);
        });
    });

    it('to return word with correctly guessed letters and asterisks', () => {
        let cases : { word: string; guesses: string[], expect: string }[] = [
            {
                word: 'foo',
                guesses: [],
                expect: '***'
            },
            {
                word: 'banana',
                guesses: ['b'],
                expect: 'b*****'
            },
            {
                word: 'apple',
                guesses: ['a', 'p'],
                expect: 'app**'
            },
            {
                word: 'apple',
                guesses: ['a', 'q'],
                expect: 'a****'
            }
        ];

        cases.forEach((val) => {
            let h = new Hangman(val.word);
            val.guesses.forEach(g => h.guess(g));
            expect(h.display()).toBe(val.expect);
        });
    });

    
});

describe('expect Hangman guess function', () => {
    let h : Hangman;
    const word = 'foo';

    beforeEach(() => {
        h = new Hangman(word);
    });

    it('to not decrement guesses when correct guess entered', () => {
        const initialGuesses = h.guesses;
        h.guess(word.charAt(0));
        expect(h.guesses).toBe(initialGuesses);
        h.guess(word.charAt(1))
        expect(h.guesses).toBe(initialGuesses);
    });

    it('to decrement guesses by 1 when incorrect guess is entered', () => {
        const initialGuesses = h.guesses;
        h.guess('q');
        expect(h.guesses).toBe(initialGuesses - 1);
        h.guess('u');
        expect(h.guesses).toBe(initialGuesses - 2);
    });

    it('to not decrement guesses if letter was already guessed', () => {
        const initialGuesses = h.guesses;
        h.guess('q');
        h.guess('q');
        expect(h.guesses).toBe(initialGuesses - 1);
    });

    it('to not add duplicate entries to wordBank for duplicate guesses', () => {
        h.guess('q');
        expect(h.wordBank).toEqual(['q']);
        h.guess('q');
        expect(h.wordBank).toEqual(['q']);
    });

    it('to throw an error if something other than letters are entered', () => {
        const cases : string[] = [
            '1',
            '.',
            'a ',
            ' '
        ];

        cases.forEach((c) => {
            expect(() => h.guess(c)).toThrow(/letter/);
        });
    });

    it('to set guesses to zero if word guessed', () => {
        h.guess('foo');
        expect(h.guesses).toBe(0);
    });

    it('to set has won to true if correct word is guessed', () => {
        expect(h.hasWon).toBe(false);
        h.guess(word.toUpperCase());
        expect(h.hasWon).toBe(true);
    });
});