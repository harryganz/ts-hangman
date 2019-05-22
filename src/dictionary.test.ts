import * as expect from 'expect';
import { FileDictionary } from './dictionary';

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
})