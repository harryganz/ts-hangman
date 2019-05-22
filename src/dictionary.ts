export interface Dictionary {
    getWord : () => string
}

export class FileDictionary {
    fileName : string;

    constructor(fileName : string) {
        this.fileName = fileName;
    }


}