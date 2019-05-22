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

    loadDictionary(fileName: string) : void {
        try {
            this.corpus = JSON.parse(readFileSync(resolve(__dirname, fileName), { encoding: 'UTF-8' }));
        } catch (e) {
            throw new Error('could not load dictionary file: ' + e);
        }
    }

    getWord() : string {
        let n = this.corpus.length;
        return this.corpus[Math.floor(Math.random() * n)];
    }
}