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

function naytaPaivanNimi() {
    var paivanNumero = parseInt(document.getElementById("paivanNumeroKentta").value);
    var paivanNimi = paiva(paivanNumero);
    document.getElementById("paivanNimi").textContent = paivanNimi;
}