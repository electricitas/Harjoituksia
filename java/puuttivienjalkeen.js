class Kirja {
    constructor(nimi, kirjailija) {
        this.nimi = nimi;
        this.kirjailija = kirjailija;
    }
}

class Kirjasto {
    constructor() {
        this.kirjat = [];
    }

    lisaaKirja(kirja) {
        this.kirjat.push(kirja);
    }

    haeKirjat(kirjailija) {
        return this.kirjat.filter(kirja => kirja.kirjailija === kirjailija);
    }
}

const kirjasto = new Kirjasto();

const kirja1 = new Kirja("Slipknot", "Joel Mciver");
const kirja2 = new Kirja("Long Hard Road Out Of Hell", "Marilyn Manson");

kirjasto.lisaaKirja(kirja1);
kirjasto.lisaaKirja(kirja2);

const haetutKirjat = kirjasto.haeKirjat("Joel Mciver");
console.log("Kirjat Joel Mciver:");
console.log(haetutKirjat);

