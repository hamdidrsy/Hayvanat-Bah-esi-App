export class Hayvan{
    constructor(ad,tur,yas){
        this.ad = ad;
        this.tur = tur;
        this.yas = yas;
    }
    sesCikar() {
        console.log(`${this.ad} bir ses çıkarıyor.`);
    }
    
    bilgi(){
        console.log(`Ad: ${this.ad}, Tür: ${this.tur}, Yaş: ${this.yas}`);
    }
}