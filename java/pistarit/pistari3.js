function tarkistaKarkausvuosi() {
    var vuosiluku = parseInt(document.getElementById("vuosilukuKentta").value);

    if ((vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) || vuosiluku % 400 === 0) {
        document.getElementById("tulos").textContent = "Vuosi on karkausvuosi.";
    } else {
        document.getElementById("tulos").textContent = "Vuosi ei ole karkausvuosi.";
    }
}