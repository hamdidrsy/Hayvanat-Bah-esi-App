import { Hayvan } from "./Hayvan.js";
import { Kopek } from "./Kopek.js";
import { Kedi } from "./Kedi.js";

const kedi = new Kedi("Minnak", 2);
kedi.sesCikar();
kedi.miyavla();
kedi.bilgi();

const kopek = new Kopek("Karabas", 4);
kopek.sesCikar();   
kopek.havla();
kopek.bilgi();

const hayvan = new Hayvan("Leo", "Aslan", 5);
hayvan.bilgi();