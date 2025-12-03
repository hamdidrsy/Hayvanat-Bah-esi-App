import { Hayvan } from "./Hayvan.js";

export  class Kedi extends Hayvan {
    constructor(ad, yas) {
        super(ad, "Kedi", yas);
    }
    sesCikar() {
        console.log(`${this.ad} Miyav Miyav Miyav!`);
    }

    miyavla() {
        console.log(`${this.ad} miyavlıyor!`);
    }
}