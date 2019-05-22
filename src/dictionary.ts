import { readFileSync } from 'fs';
import { resolve } from 'path';

export interface Dictionary {
    getWord : () => string
}

export class FileDictionary implements Dictionary {
    private corpus : {  [propname : string]: any }

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
        let words = Object.keys(this.corpus);
        let n = words.length;
        return words[Math.floor(Math.random() * n)];
    }
}