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

function naytaPaivanNimi() {
    var paivanNumero = parseInt(document.getElementById("paivanNumeroKentta").value);
    var paivanNimi = paiva(paivanNumero);
    document.getElementById("paivanNimi").textContent = paivanNimi;
}