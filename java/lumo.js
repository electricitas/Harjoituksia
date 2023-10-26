function jotain() {
    console.log("hei");
}
jotain();

function summa(a, b) {
    console.log(a + b);
}
summa(2, 5);

function num(a, b) { 
console.log(a - b);
}
num(6, 2);

function kerto(a, b) {
    console.log(a * b);
}
kerto(3, 3)

function jako(a, b) {
    console.log(a / b);
}
jako(15, 3)

function lampo(cel) {
    var fah = cel * 9 / 5 + 32;
    console.log("Celsius-asteet: " + cel + " vastaa Fahrenheit-asteina: " + fah);
}

lampo(23);

function lamppo(fah) {
    var cel = (fah - 32) * 5 / 9;
    console.log("Fahrenheit-asteet: " + fah + " vastaa Celsius-asteina: " + cel);
}
lamppo(98);

function mailit(maili) {
    var km = 1.609 * maili;
    console.log("Maili lukema: " + maili + " vastaa Kilometreina:" + km);
}
mailit(74);

function kilometrit(km) {
    var maili = km / 1.609;
    console.log("Kilometri lukema: " + km + " vastaa Maileina: " + maili)
}
kilometrit(74);

function sentti(tuumat) {
    var sentit = tuumat * 2.54;
    console.log("Tuumat: " + tuumat + " on Sentteina: " + sentit)
}
sentti(74);

function tuuma(sentit) {
    var tuumat = sentit / 2.54;
    console.log("Sentit: " + sentit + " on Tuumina: " + tuumat)
}
tuuma(74);

function yardit(yard) {
    var metri = yard * 0.9144;
    console.log("Yardit: " + yard + " on Metreina: " + metri + " metria");
}

yardit(74);

function metrit(metri) {
    var yard = metri / 0.9144;
    console.log("Metrit: " + metri + " on Yardeina: " + yard + " yardia");
}

metrit(74);


function convertToASCII(inputStr) {
    for (let i = 0; i < inputStr.length; i++) {
        let ascii = inputStr.charCodeAt(i);
        console.log(ascii);
    }
}

convertToASCII("ASCII");

function ympyranAla(sade) {
    console.log(sade * sade * Math.PI);
}
ympyranAla(2);

function nelioAla(sivu) {
    console.log(sivu * sivu);
}
nelioAla(5);

function suoraAla(sivu1, sivu2) {
    console.log(sivu1 * sivu2);
}
suoraAla(4, 3);

function muutaVuosiksi(paivat) {
    let vuodet = parseInt(paivat / 365);
    let kuukaudet = parseInt((paivat % 365) / (365 / 12));
    let paiva = parseInt((paivat % 365) - kuukaudet * (365 / 12));
    console.log(paivat + " paivaa on " + vuodet + " vuotta " + kuukaudet + " kuukautta on " + paiva + " paivaa.");
}
muutaVuosiksi(12410);

function suurempi(a, b) {
    if (a > b) {
        console.log("suurempi luku on " + a);
    }
    else if (b > a) {
        console.log("suurempi luku on " + b);
    }
}
suurempi(5, 3);
//suurempi (2, 7); t‰ss‰ tapauksessa b olisi suurempi luku.

function suurinNumero(a, b, c) {
    if (a > b && a > c) {
        console.log("suurin luku on " + a);
    }
    else if (b > c) {
        console.log("suurin luku on " + b);
    }
    else {
        console.log("suurin luku on " + c);
    }
}
suurinNumero(4, 8, 2);
//suurinNumero (9, 1, 7); t‰ss‰ suurin olisi a
//suurinNumero (3, 7, 12); t‰ss‰ suurin olisi c

function luvunTarkistus(luku) {
    if (luku < 0) {
        console.log("luku on negatiivinen");
    }
    else if (luku == 0) {
        console.log("luku on nolla");
    }
    else {
        console.log("luku on positiivinen");
    }
}
luvunTarkistus(0);
//luvunTarkistus(-3); tulostuu negatiivinen
//luvunTarkistus(75); tulostuu luku on positiivinen

function jaollinen(luku) {
    if (luku % 5 == 0 || luku % 11 == 0) {
        console.log("luku on jaollinen 5:lla tai 11:sta");
    }
    else {
        console.log("luku ei ole jaollinen 5:lla tai 11:sta");
    }
}
jaollinen(44);
//jaollinen(61); ei ole jaollinen

function tarkistaKarkausvuosi(vuosiluku) {
    if ((vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) || vuosiluku % 400 === 0) {
        console.log("Vuosi on karkausvuosi.");
    } else {
        console.log("Vuosi ei ole karkausvuosi.");
    }
}

tarkistaKarkausvuosi(2004);
//tarkistaKarkausvuosi(2023); ei ole karkausvuosi

function parillinen(luku) {
    if (luku % 2 == 0) {
        console.log("luku on parillinen");
    }
    else {
        console.log("luku on pariton");
    }
}

parillinen(6);
//parillinen(5); on pariton.

function onkoKirjain(merkki) {
    var kirjaimet = /^[A-Za-z]+$/;

    if (kirjaimet.test(merkki)) {
        console.log("'" + merkki + "' on kirjain.");
    } else {
        console.log("'" + merkki + "' ei ole kirjain.");
    }
}

onkoKirjain('A');
//onkoKirjain('1'); ei ole kirjain

function vokaaliKonsonantti(merkki) {
    if (merkki.match(/[aeiouy‰ˆ]/i)) {
        console.log("annettu merkki on vokaali");
    }
    else if (merkki.match(/[bcdfghjklmnpqrstvwxz]/i)) {
        console.log("annettu merkki on konsonantti");
    }
    else {
        console.log("annettu merkki ei ole kumpikaan.");
    }
}

vokaaliKonsonantti("e");
//vokaaliKonsonantti("f"); = konsonantti
//vokaaliKonsonantti("2"); = ei ole kumpikaan

function kirjainNumeroErikoismerkki(merkki) {
    let kirjain = /[a-ˆA-÷]/i;
    let numero = /[0-9]/i;

    if (merkki.length > 0 && merkki.match(kirjain)) {
        console.log("merkki on kirjain");
    } else if (merkki.match(numero)) {
        console.log("merkki on numero");
    } else {
        console.log("merkki on erikoismerkki");
    }
}

kirjainNumeroErikoismerkki("H");
//kirjainNumeroErikoismerkki("4"); = merkki on numero
//kirjainNumeroErikoismerkki("&"); = merkki on erikoismerkki

function tarkastaKirjain(kirjain) {
    if (kirjain.match(/[A-Z]/)) {
        console.log("" + kirjain + " on iso kirjain.");
    } else if (kirjain.match(/[a-z]/)) {
        console.log("" + kirjain + " on pieni kirjain.");
    } else {
        console.log("" + kirjain + " ei ole kirjain.");
    }
}

tarkastaKirjain("f");
//tarkastaKirjain("G"); = on iso kirjain
//tarkastaKirjain("!"); = ei ole kirjain

function laskeVoittoTaiTappio(myyntiStr, ostotStr) {
    var myynti = parseInt(myyntiStr, 10);
    var ostot = parseInt(ostotStr, 10);

    if (isNaN(myynti) || isNaN(ostot)) {
        console.log("Virheelliset syˆtteet, anna kokonaislukuja.");
        return;
    }

    var voitto = myynti - ostot;

    if (voitto > 0) {
        console.log("Sait voittoa " + voitto + " euroa.");
    } else if (voitto < 0) {
        console.log("Teit tappiota " + Math.abs(voitto) + " euroa.");
    } else {
        console.log("Ei voittoa eik‰ tappiota.");
    }
}

laskeVoittoTaiTappio("500", "400");
//laskeVoittoTaiTappio("300", "500"); teit tappiota 200 euroa
//laskeVoittoTaiTappio("400", "400"); Ei voittoa eik‰ tappiota

function koePisteet(Ma, KeFy, Ai, Ru, En) {
    var taulukko = [["Matematiikka", Ma], ["KemiaFysiikka", KeFy], ["Aidinkieli", Ai], ["Ruotsi", Ru], ["Englanti", En]];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i][1] >= 90) {
            console.log(taulukko[i][0] + ": K5");
        }
        else if (taulukko[i][1] >= 80) {
            console.log(taulukko[i][0] + ": H4");
        }
        else if (taulukko[i][1] >= 70) {
            console.log(taulukko[i][0] + ": H3");
        }
        else if (taulukko[i][1] >= 60) {
            console.log(taulukko[i][0] + ": T2");
        }
        else if (taulukko[i][1] >= 50) {
            console.log(taulukko[i][0] + ": T1");
        }
        else {
            console.log(taulukko[i][0] + ": Hyl‰tty");
        }
    }
}
koePisteet(59, 76, 68, 81, 97);
//koePisteet(99, 41, 72, 86, 61); K5, hyl‰tty, H3, H4, T2

function paiva(paivanNumero) {
    switch (paivanNumero) {
        case 1:
            return "Maanantai";
            break;
        case 2:
            return "Tiistai";
            break;
        case 3:
            return "Keskiviikko";
            break;
        case 4:
            return "Torstai";
            break;
        case 5:
            return "Perjantai";
            break;
        case 6:
            return "Lauantai";
            break;
        case 7:
            return "Sunnuntai";
            break;
        default:
            return "Et antanut arvoa v‰lill‰ 1-7";
    }
}
console.log(paiva(1));

function tarkastaKokonaisluvut(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Et antanut kokonaislukuja";
    }
    if (a === b) {
        return "Antamasi luvut ovat samat.";
    } else {
        return "Antamasi luvut eiv‰t ole samat.";
    }
}

console.log(tarkastaKokonaisluvut(3, 3));
//console.log(tarkastaKokonaisluvut(5,7)); Antamasi luvut eiv‰t ole samat.

function tarkistaAanestysoikeus(ika) {
    if (ika >= 18) {
        return "Sinulla on ‰‰nestysoikeus.";
    } else {
        return "Sinulla ei ole ‰‰nestysoikeutta.";
    }
}

var ika = parseInt("20");
// var ika = parseInt("15"); = sinulla ei ole ‰‰nestysoikeutta.
if (!isNaN(ika)) {
    var tulos = tarkistaAanestysoikeus(ika);
    if (tulos === "Sinulla on ‰‰nestysoikeus.") {
        console.log(tulos);
    } else {
        console.log("Sinulla ei ole ‰‰nestysoikeutta.");
    }
} else {
    console.log("Syˆte ei ole kelvollinen ik‰.");
}

function laskeKuukaudenPaivat(kuukausi) {
    switch (kuukausi) {
        case 1:
            console.log("Tammikuussa on 31 p‰iv‰‰.");
            break;
        case 2:
            console.log("Helmikuussa on 28 tai 29 p‰iv‰‰ riippuen vuodesta.");
            break;
        case 3:
            console.log("Maaliskuussa on 31 p‰iv‰‰.");
            break;
        case 4:
            console.log("Huhtikuussa on 30 p‰iv‰‰.");
            break;
        case 5:
            console.log("Toukokuussa on 31 p‰iv‰‰.");
            break;
        case 6:
            console.log("Kes‰kuussa on 30 p‰iv‰‰.");
            break;
        case 7:
            console.log("Hein‰kuussa on 31 p‰iv‰‰.");
            break;
        case 8:
            console.log("Elokuussa on 31 p‰iv‰‰.");
            break;
        case 9:
            console.log("Syyskuussa on 30 p‰iv‰‰.");
            break;
        case 10:
            console.log("Lokakuussa on 31 p‰iv‰‰.");
            break;
        case 11:
            console.log("Marraskuussa on 30 p‰iv‰‰.");
            break;
        case 12:
            console.log("Joulukuussa on 31 p‰iv‰‰.");
            break;
        default:
            console.log("Antamasi kuukauden numero ei ole kelvollinen.");
            break;
    }
}

var kuukausi = parseInt("2");

if (!isNaN(kuukausi) && kuukausi >= 1 && kuukausi <= 12) {
    laskeKuukaudenPaivat(kuukausi);
} else {
    console.log("Antamasi kuukauden numero ei ole kelvollinen.");
}

function muunnaRahaksi(summa) {
    var setelitJaKolikot = [500, 100, 50, 20, 10, 5, 2, 1];
    var rahat = {};

    for (var i = 0; i < setelitJaKolikot.length; i++) {
        var arvo = setelitJaKolikot[i];
        var lukumaara = Math.floor(summa / arvo);

        if (lukumaara > 0) {
            rahat[arvo] = lukumaara;
            summa -= arvo * lukumaara;
        }
    }

    return rahat;
}

var summa = parseInt("3789");

if (!isNaN(summa) && summa >= 0) {
    var rahat = muunnaRahaksi(summa);
    console.log("Rahojen m‰‰r‰:");
    for (var seteli in rahat) {
        console.log(seteli + " = " + rahat[seteli]);
    }
} else {
    console.log("Syˆte ei ole kelvollinen raham‰‰r‰.");
}

function laskeLainanTakaisinmaksu(laina, korko, vuodet) {
    var korkoDesimaali = korko / 100;
    var korkojenMaara = laina * korkoDesimaali;
    var takaisinmaksu = laina + korkojenMaara * vuodet;

    return takaisinmaksu;
}

var lainaSumma = 5000;
var korkoProsentti = 2;
var lainaAikaVuodet = 2;

var takaisinmaksuSumma = laskeLainanTakaisinmaksu(lainaSumma, korkoProsentti, lainaAikaVuodet);

console.log("Sinun tulee maksaa takaisin yhteens‰ " + takaisinmaksuSumma + " euroa.");


function kertoma(luku) {
    let kertoma = 1;
    for (var i = 1; i <= luku; i++) {
        kertoma *= i;
    }
    console.log("Luvun " + luku + "kertoma on: " + kertoma);
}
kertoma(5);


function esiintyma() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i] == 3) {
            console.log("Nro 3 on taulukon " + i + ". j‰sen");
            i = taulukko.length;
        }
    }
}
esiintyma();  


function kaannaSana(sana) {
    var kaannettySana = "";
    for (var i = sana.length - 1; i >= 0; i--) {
        kaannettySana += sana[i];
    }
    console.log(kaannettySana);
}
kaannaSana("Hevonen");


function suurinArvo() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1];
    let suurinArvo = taulukko[0];
    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > suurinArvo) {
          suurinArvo = taulukko[i];
        }
    }
    console.log("Suurin arvo taulukossa [" + taulukko + "] on: " + suurinArvo);
    }
    suurinArvo();


function laskeKeskiarvo(taulukko) {
    if (taulukko.length === 0) {
        return 0;
    }

    var summa = 0;
    for (var i = 0; i < taulukko.length; i++) {
        summa += taulukko[i];
    }

    var keskiarvo = summa / taulukko.length;
    return keskiarvo;
}

var taulukko = [6, 7, 2, 4, 3, 8, 1];
var keskiarvo = laskeKeskiarvo(taulukko);
console.log("Taulukon keskiarvo on: " + keskiarvo);


function isojaKirjaimia(taulukko) {
    var isoTaulukko = [];

    for (var i = 0; i < taulukko.length; i++) {
        var isoKirjain = taulukko[i].toUpperCase();
        isoTaulukko.push(isoKirjain);
    }

    return isoTaulukko;
}

var alkuperainenTaulukko = ["a", "b", "c", "d", "e", "f"];
var isoTaulukko = isojaKirjaimia(alkuperainenTaulukko);
console.log("Isoilla kirjaimilla: " + isoTaulukko);


function etsiSeitsemasPariton(taulukko) {
    var parittomienLaskuri = 0;

    for (var i = 0; i < taulukko.length; i++) {
        if (taulukko[i] % 2 !== 0) {
            parittomienLaskuri++;
            if (parittomienLaskuri === 7) {
                return taulukko[i];
            }
        }
    }
    return undefined;
}

var taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
var seitsemasPariton = etsiSeitsemasPariton(taulukko);
if (seitsemasPariton !== undefined) {
    console.log("Seitsem‰s pariton taulukossa [" + taulukko + "] on: " + seitsemasPariton);
} else {
    console.log("Taulukossa ei ole seitsem‰tt‰ paritonta lukua.");
}


function toiseksiSuurinArvo() {
    let taulukko = [6, 7, 2, 4, 3, 8, 1, 9, 0, 3, 5, 7, 3, 6, 8, 2, 4, 3];
    let suurinArvo = taulukko[0];
    let toiseksiSuurinArvo = taulukko[0];

    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i] > suurinArvo) {
            toiseksiSuurinArvo = suurinArvo;
            suurinArvo = taulukko[i];
        } else if (taulukko[i] > toiseksiSuurinArvo && taulukko[i] !== suurinArvo) {
            toiseksiSuurinArvo = taulukko[i];
        }
    }

    console.log("Taulukon [" + taulukko + "] toiseksi suurin on: " + toiseksiSuurinArvo);
}

toiseksiSuurinArvo();


for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Viisitoista");
    } else if (i % 3 === 0) {
        console.log("Kolme");
    } else if (i % 5 === 0) {
        console.log("Viisi");
    } else {
        console.log(i);
    }
}      


function printFibonacci(n) {
    let a = 0, b = 1, c;
    console.log(a);
    console.log(b);
    for (let i = 2; i < n; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}

printFibonacci(10);


class Henkilo {
    constructor(etunimi, sukunimi, ika) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }

    NaytaTiedot() {
        console.log("Etunimi: " + this.etunimi);
        console.log("Sukunimi: " + this.sukunimi);
        console.log("Ika: " + this.ika);
    }
}

const risto = new Henkilo("Risto", "Reipas", 10);
risto.sukunimi = "Reippaampi";
risto.ika = 11;

risto.NaytaTiedot();


class Kuvakirja {
    constructor(sivujenLukumaara = 16) {
        this.sivujenLukumaara = sivujenLukumaara;
    }

    NaytaSivumaara() {
        console.log("Kuvakirjassa on " + this.sivujenLukumaara + " sivua.");
    }
}

const kirja1 = new Kuvakirja();
const kirja2 = new Kuvakirja(24);

kirja1.NaytaSivumaara();
kirja2.NaytaSivumaara();

class Elain {
    constructor(nimi = "Nimeton") {
        this._nimi = nimi;
    }

    get nimi() {
        return this._nimi;
    }

    set nimi(uusiNimi) {
        this._nimi = uusiNimi;
    }

    Syo() {
        console.log(this.nimi + " syo - mumm mumm mumm");
    }
}

const kana = new Elain();
console.log(kana.nimi);
kana.nimi = "kaakattaja";
console.log("Kanan uusi nimi: " + kana.nimi);
kana.Syo();

class Koira extends Elain {
    constructor(nimi, tassut = 4, turkki = "musta") {
        super(nimi);
        this._tassut = tassut;
        this._turkki = turkki;
    }

    get tassut() {
        return this._tassut;
    }

    set tassut(maara) {
        this._tassut = maara;
    }

    get turkki() {
        return this._turkki;
    }

    set turkki(vari) {
        this._turkki = vari;
    }

    Aantelehtii(aani) {
        console.log(this.nimi + " " + aani);
    }
}

const koira = new Koira("Lissu");
console.log(koira.nimi);
console.log(koira.tassut);
console.log(koira.turkki);
koira.Aantelehtii("haukkuu");


class Ajoneuvo {
    constructor(merkki, malli, vuosimalli) {
        this._merkki = merkki;
        this._malli = malli;
        this._vuosimalli = vuosimalli;
    }
    get merkki() {
        return this._merkki;
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    get malli() {
        return this._malli;
    }
    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }
    ajo() {
        console.log("Auton ajo: " + this._merkki + this._malli + this._vuosimalli);
    }
    kiihdytys() {
        console.log("Kiihdytetaan auton: " + this._merkki + this._malli + this._vuosimalli);
    }
    jarrutus() {
        console.log("Jarrutetaan: " + this._merkki + this._malli + this._vuosimalli);
    }
    kaynnistys() {
        console.log("Kaynnistaa auton: " + this._merkki + this._malli + this._vuosimalli);
    }
    sammutus() {
        console.log("Sammuttaa auton: " + this._merkki + this._malli + this._vuosimalli);
    }
}
class Auto extends Ajoneuvo {
}
class TestiAjo {
    constructor() {
        const mese = new Auto("Mercedes-Benz ", "Sarja S ", 2020);
        mese.ajo();
    }
}
const testiAjo = new TestiAjo();


class Ajoneuvoo {
    constructor(merkki, malli, vuosimalli, pyorat) {
        this._merkki = merkki;
        this._malli = malli;
        this._vuosimalli = vuosimalli;
    }
    get merkki() {
        return this._merkki;
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    get malli() {
        return this._malli;
    }
    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }
    aajo() {
        console.log("Auton ajo: " + this._merkki + this._malli);
    }
    kiihdytys() {
        console.log("Kiihdytetaan auton: " + this._merkki + this._malli);
    }
    jarrutus() {
        console.log("Jarrutetaan: " + this._merkki + this._malli);
    }
    kaynnistys() {
        console.log("Kaynnistaa auton: " + this._merkki + this._malli);
    }
    sammutus() {
        console.log("Sammuttaa auton: " + this._merkki + this._malli);
    }
}
class Autoo extends Ajoneuvoo {
    constructor(merkki, malli, vuosimalli) {
        super(merkki, malli, vuosimalli);
        this._pyorat = 4;
    }
    get merkki() {
        return this._merkki;
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    get malli() {
        return this._malli;
    }
    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }
    ajo() {
        console.log("Auton ajo: " + this._merkki + this._malli + this._vuosimalli);
    }
    kiihdytys() {
        console.log("Kiihdytetaan auton: " + this._merkki + this._malli + this._vuosimalli);
    }
    jarrutus() {
        console.log("Jarrutetaan: " + this._merkki + this._malli + this._vuosimalli);
    }
    kaynnistys() {
        console.log("Kaynnistaa auton: " + this._merkki + this._malli + this._vuosimalli);
    }
    sammutus() {
        console.log("Sammuttaa auton: " + this._merkki  + this._malli + this._vuosimalli);
    }
}

class Moottoripyora extends Autoo {
    constructor(merkki, malli, vuosimalli) {
        super(merkki, malli, vuosimalli);
        this._pyorat = 2;
    }
    get merkki() {
        return this._merkki;
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    get malli() {
        return this._malli;
    }
    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }
    ajo() {
        console.log("Auton ajo: " + this._merkki + this._malli + this._vuosimalli);
    }
    kiihdytys() {
        console.log("Kiihdytetaan auton: " + this._merkki + this._malli + this._vuosimalli);
    }
    jarrutus() {
        console.log("Jarrutetaan: " + this._merkki + this._malli + this._vuosimalli);
    }
    kaynnistys() {
        console.log("Kaynnistaa auton: " + this._merkki + this._malli + this._vuosimalli);
    }
    sammutus() {
        console.log("Sammuttaa auton: " + this._merkki + this._malli + this._vuosimalli);
    }
}

class TestiAajo {
    constructor() {
        const mese = new Autoo("Mercedes-Benz ", "Sarja S ", 2023);
        const moottoripyora = new Moottoripyora("Harley-Davidson ", "Sportster ", 2022);

        mese.ajo();
        console.log(mese._pyorat)
        moottoripyora.ajo();
        console.log(moottoripyora._pyorat)
    }
}

const testiAajo = new TestiAajo();


class Pankkitili {
    constructor() {
        this.saldo = 0;
    }

    talleta(maara) {
        if (maara > 0) {
            this.saldo += maara;
            console.log(`Talletus onnistui. Uusi saldo: ${this.saldo}Ä`);
        } else {
            console.log("Virhe: Talletettava maara on negatiivinen tai nolla.");
        }
    }

    nosta(maara) {
        if (maara > 0) {
            if (this.saldo >= maara) {
                this.saldo -= maara;
                console.log(`Nosto onnistui. Uusi saldo: ${this.saldo}Ä`);
            } else {
                console.log("Virhe: Ei tarpeeksi saldoa nostoon.");
            }
        } else {
            console.log("Virhe: Nostettava maara on negatiivinen tai nolla.");
        }
    }
}


const tili = new Pankkitili();

tili.talleta(100);
tili.nosta(50);
tili.nosta(70);
tili.talleta(-10);
tili.nosta(0);

class Elaiin {
    constructor(nimi) {
        this.nimi = nimi;
    }

    aanesta() {
        console.log(`${this.nimi} tekee ‰‰nt‰.`);
    }
}
class Dogi extends Elaiin {
    aanesta() {
        console.log(`${this.nimi} haukkuu: Bark Bark!`);
    }
}
class Lintu extends Elaiin {
    aanesta() {
        console.log(`${this.nimi} laulaa: Tsirp Tsirp`);
    }
}
class Kala extends Elaiin {
    aanesta() {
        console.log(`${this.nimi} kuplii vedessa`);
    }
}
const oni = new Dogi("Oni");
const varpunen = new Lintu("Varpunen");
const kultakala = new Kala("Kultakala");

oni.aanesta();
varpunen.aanesta();
kultakala.aanesta();