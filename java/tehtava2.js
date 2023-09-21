function etsiSuurin() {
    var luku1 = parseFloat(document.getElementById("luku1").value);
    var luku2 = parseFloat(document.getElementById("luku2").value);
    var luku3 = parseFloat(document.getElementById("luku3").value);
    var luku4 = parseFloat(document.getElementById("luku4").value);
    var luku5 = parseFloat(document.getElementById("luku5").value);

    if (isNaN(luku1) || isNaN(luku2) || isNaN(luku3) || isNaN(luku4) || isNaN(luku5)) {
        alert("Anna validit numerot kaikkiin kenttiin.");
        return;
    }
    var suurin;

    if (luku1 >= luku2 && luku1 >= luku3 && luku1 >= luku4 && luku1 >= luku5) {
        suurin = luku1;
    } else if (luku2 >= luku1 && luku2 >= luku3 && luku2 >= luku4 && luku2 >= luku5) {
        suurin = luku2;
    } else if (luku3 >= luku1 && luku3 >= luku2 && luku3 >= luku4 && luku3 >= luku5) {
        suurin = luku3;
    } else if (luku4 >= luku1 && luku4 >= luku2 && luku4 >= luku3 && luku4 >= luku5) {
        suurin = luku4;
    } else {
        suurin = luku5;
    }

    // Tulosta suurin numero
    alert("Suurin numero on: " + suurin);
}
