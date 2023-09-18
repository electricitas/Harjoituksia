function pieninSuurin(taulukko) {
    var pienin = taulukko[0];
    var suurin = taulukko[0];

    for (var i = 1; i < taulukko.length; i++) {
        if (taulukko[i] < pienin) {
            pienin = taulukko[i];
        }
        if (taulukko[i] > suurin) {
            suurin = taulukko[i];
        }
    }

    return "Pienin: " + pienin + " ja Suurin: " + suurin;
}

var taulukko = [8, 4, 9, 6, 2];
var tulos = pieninSuurin(taulukko);
console.log(tulos);

function tarkistaParillisuus(numero) {
    if (numero % 2 === 0) {
        return "Parillinen";
    } else {
        return "Pariton";
    }
}

var annettuNumero = 6;

var tulos = tarkistaParillisuus(annettuNumero);
console.log("Numero " + annettuNumero + " on " + tulos + ".");

function kuukausi(kuukaudenNumero) {
    switch (kuukaudenNumero) {
        case 1:
            console.log("Tammikuu");
            break;
        case 2:
            console.log("Helmikuu");
            break;
        case 3:
            console.log("Maaliskuu");
            break;
        case 4:
            console.log("Huhtikuu");
            break;
        case 5:
            console.log("Toukokuu");
            break;
        case 6:
            console.log("Kesäkuu");
            break;
        case 7:
            console.log("Heinäkuu");
            break;
        case 8:
            console.log("Elokuu");
            break;
        case 9:
            console.log("Syyskuu");
            break;
        case 10:
            console.log("Lokakuu");
            break;
        case 11:
            console.log("Marraskuu");
            break;
        case 12:
            console.log("Joulukuu");
            break;
        default:
            console.log("Et antanut arvoa välillä 1-12")
    }
}
kuukausi(8);

var osoitekirja = [];
function lisaaHenkilo(etunimi, sukunimi, losoite, pnro, ptp, puh, email) { 
    var henkilo = {
        etunimi:etunimi,
        sukunimi:sukunimi,
        lahiosoite:losoite,
        postinumero:pnro,
        postitoimipaikka:ptp,
        puhelinnumero:puh,
        sahkoposti:email
    };
    osoitekirja.push(henkilo);
}
lisaaHenkilo("Matti", "Meikäläinen", "Esimerkkikatu 123", "00100", "Helsinki", "0401234567", "matti@example.com");
lisaaHenkilo("Anna", "Ankka", "Ankkalinnantie 456", "00220", "Ankkalinna", "0509876543", "anna@example.com");
lisaaHenkilo("Timo", "Testaaja", "Testikatu 789", "00330", "Testilinn", "0451112233", "timo@example.com");
console.log(osoitekirja);