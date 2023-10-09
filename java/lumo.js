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
//suurempi (2, 7); tässä tapauksessa b olisi suurempi luku.

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
//suurinNumero (9, 1, 7); tässä suurin olisi a
//suurinNumero (3, 7, 12); tässä suurin olisi c

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
    if (merkki.match(/[aeiouyäö]/i)) {
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
    let kirjain = /[a-öA-Ö]/i;
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
        console.log("Virheelliset syötteet, anna kokonaislukuja.");
        return;
    }

    var voitto = myynti - ostot;

    if (voitto > 0) {
        console.log("Sait voittoa " + voitto + " euroa.");
    } else if (voitto < 0) {
        console.log("Teit tappiota " + Math.abs(voitto) + " euroa.");
    } else {
        console.log("Ei voittoa eikä tappiota.");
    }
}

laskeVoittoTaiTappio("500", "400");
//laskeVoittoTaiTappio("300", "500"); teit tappiota 200 euroa
//laskeVoittoTaiTappio("400", "400"); Ei voittoa eikä tappiota



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
            return "Et antanut arvoa välillä 1-7";
    }
}
console.log(paiva(1));