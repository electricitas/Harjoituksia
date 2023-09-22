function tarkistaLuku() {
    var luku = document.getElementById("lukuInput").value;

    var numero = parseFloat(luku);

    var tulosElementti = document.getElementById("tulos");
    if (isNaN(numero)) {
        tulosElementti.innerHTML = "Syötä kelvollinen luku.";
    } else if (numero >= 0) {
        tulosElementti.innerHTML = numero + " on positiivinen luku.";
    } else {
        tulosElementti.innerHTML = numero + " on negatiivinen luku.";
    }
}

function paiva(paivanNumero) {
    switch (paivanNumero) {
        case 1:
            return "Maanantai";
        case 2:
            return "Tiistai";
        case 3:
            return "Keskiviikko";
        case 4:
            return "Torstai";
        case 5:
            return "Perjantai";
        case 6:
            return "Lauantai";
        case 7:
            return "Sunnuntai";
        default:
            return "Et antanut arvoa välillä 1-7";
    }
}

function tarkistaPaiva() {
    var paivanNumero = parseInt(document.getElementById("paivanNumero").value);
    var tulosElementti = document.getElementById("vastaus");
    var vastaus = paiva(paivanNumero);
    tulosElementti.innerHTML = vastaus;
}

function tarkistaKarkausvuosi() {
    var vuosiluku = parseInt(document.getElementById("vuosilukuInput").value);
    var tulosElementti = document.getElementById("karkausvuosiTulos");

    if (isNaN(vuosiluku)) {
        tulosElementti.innerHTML = "Syötä kelvollinen vuosiluku.";
    } else {
        if ((vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) || vuosiluku % 400 === 0) {
            tulosElementti.innerHTML = "Vuosi on karkausvuosi.";
        } else {
            tulosElementti.innerHTML = "Vuosi ei ole karkausvuosi.";
        }
    }
}

function laskeSummaJaKeskiarvo() {
    var luku1 = parseInt(document.getElementById("luku1").value);
    var luku2 = parseInt(document.getElementById("luku2").value);
    var luku3 = parseInt(document.getElementById("luku3").value);
    var luku4 = parseInt(document.getElementById("luku4").value);
    var luku5 = parseInt(document.getElementById("luku5").value);

    var summa = luku1 + luku2 + luku3 + luku4 + luku5;
    var keskiarvo = summa / 5;

    var tulosElementti = document.getElementById("tulo");
    tulosElementti.innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
}

function laskeKertotaulu() {
    var luku = parseInt(document.getElementById("luku").value);
    var lause = "";

    for (var i = 1; i <= 10; i++) {
        lause += luku + "x " + i + " = " + (luku * i) + "<br>";
    }

    var lauseElementti = document.getElementById("lause");
    lauseElementti.innerHTML = lause;
}