import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface Dictionary {
    getWord : () => string
}

export interface Corpus {
    [ propname : string ]: any
}

export class FileDictionary implements Dictionary {
    private corpus : Corpus 

    constructor() {
        this.corpus = {};
    }

    load(fileName: string) : void {
        try {
            this.corpus = JSON.parse(readFileSync(resolve(fileName), { encoding: 'UTF-8' }));
        } catch (e) {
            throw new Error('could not load dictionary file: ' + e);
        }
    }

    getWord() : string {
        return randomWord(this.corpus);
    }
}

export class ObjectDictionary implements Dictionary {
    private corpus : Corpus
    
    constructor() {
        this.corpus = {};
    }

    load(corpus : Corpus) {
        this.corpus = corpus;
    }

    getWord() : string  {
        return randomWord(this.corpus);
    }
}

function randomWord(corpus : Corpus) {
    let words = Object.keys(corpus);
    let n = words.length;
    return words[Math.floor(Math.random() * n)];
}