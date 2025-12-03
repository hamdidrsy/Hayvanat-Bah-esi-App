import { Hayvan } from "./Hayvan.js";

export class Kopek extends Hayvan {
    constructor(ad, yas) {
        super(ad, "Kopek", yas);
    }
    sesCikar() {
        console.log(`${this.ad} Hav Hav Hav!`);
    }
    havla() {
        console.log(`${this.ad} havlıyor!`);
    }
}