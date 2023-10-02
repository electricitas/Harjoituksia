function laskeKertotaulu() {
    var luku = parseInt(document.getElementById("lukuKentta").value);
    var lause = "";

    if (!isNaN(luku)) {
        for (var i = 1; i <= 10; i++) {
            lause += luku + "x " + i + " = " + (luku * i) + "<br>";
        }
        document.getElementById("tulos").innerHTML = lause;
    } else {
        document.getElementById("tulos").innerHTML = "Syöte ei ole kelvollinen luku.";
    }
}