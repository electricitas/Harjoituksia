function laskeKertotaulu() {
    var luku = 5;
    var lause = "";

    if (!isNaN(luku)) {
        for (var i = 1; i <= 10; i++) {
            lause += luku + " x " + i + " = " + (luku * i) + " ";
        }
        console.log(lause);
    } else {
        console.log("Syöte ei ole kelvollinen luku.");
    }
}

laskeKertotaulu();