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