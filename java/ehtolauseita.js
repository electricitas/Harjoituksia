function jarjesta() {
    const ekaNumero = parseFloat(document.getElementById("eka").value);
    const tokaNumero = parseFloat(document.getElementById("toka").value);
    const kolmasNumero = parseFloat(document.getElementById("kolmas").value);

    if (isNaN(ekaNumero) || isNaN(tokaNumero) || isNaN(kolmasNumero)) {
        alert("Anna validit numerot kaikkiin kenttiin.");
        return;
    }

    let pienin, keskikokoinen, suurin;

    if (ekaNumero <= tokaNumero && ekaNumero <= kolmasNumero) {
        pienin = ekaNumero;
        if (tokaNumero <= kolmasNumero) {
            keskikokoinen = tokaNumero;
            suurin = kolmasNumero;
        } else {
            keskikokoinen = kolmasNumero;
            suurin = tokaNumero;
        }
    } else if (tokaNumero <= ekaNumero && tokaNumero <= kolmasNumero) {
        pienin = tokaNumero;
        if (ekaNumero <= kolmasNumero) {
            keskikokoinen = ekaNumero;
            suurin = kolmasNumero;
        } else {
            keskikokoinen = kolmasNumero;
            suurin = ekaNumero;
        }
    } else {
        pienin = kolmasNumero;
        if (ekaNumero <= tokaNumero) {
            keskikokoinen = ekaNumero;
            suurin = tokaNumero;
        } else {
            keskikokoinen = tokaNumero;
            suurin = ekaNumero;
        }
    }

    document.getElementById("eka").value = pienin;
    document.getElementById("toka").value = keskikokoinen;
    document.getElementById("kolmas").value = suurin;

    console.log("Järjestetyt numerot:", pienin, keskikokoinen, suurin);
}
