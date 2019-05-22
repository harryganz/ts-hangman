import * as expect from 'expect';
import { FileDictionary, ObjectDictionary } from './dictionary';

describe('expect FileDictionary', () => {
    let fd : FileDictionary;
    beforeEach(() => {
        fd = new FileDictionary();
    });

    it('to not throw an error when loading testData', () => {
        expect(() => fd.load('./_testData/dictionary.json')).not.toThrowError();
    });

    it('to return the only word, foo, in the testDictionary', () => {
        fd.load('./_testData/dictionary.json');
        expect(fd.getWord()).toEqual('foo');
    });
});

describe('expect ObjectDictionary', () => {
    let od : ObjectDictionary;
    beforeEach(() => {
        od = new ObjectDictionary();
    });

    it('to return a word from the passed in corpus', () => {
        let corpus = { 'foo': true, 'bar': true, 'baz': true};
        od.load(corpus);
        expect(Object.keys(corpus)).toContain(od.getWord());
    });
})