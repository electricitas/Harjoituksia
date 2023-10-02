function tarkistaLuku() {
    var luku = parseFloat(document.getElementById("lukuKentta").value);

    if (!isNaN(luku)) {
        if (luku >= 0) {
            document.getElementById("tulos").textContent = "Luku on positiivinen.";
        } else {
            document.getElementById("tulos").textContent = "Luku on negatiivinen.";
        }
    } else {
        document.getElementById("tulos").textContent = "Syöte ei ole kelvollinen luku.";
    }
}