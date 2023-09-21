function kaanna() {
    var valittuKieli = document.getElementById("kieli").value;

    var kaannos = "";

    if (valittuKieli === "eng") {
        kaannos = "Hello world!";
    } else if (valittuKieli === "swe") {
        kaannos = "Hej världen!";
    } else if (valittuKieli === "esp") {
        kaannos = "Hola mundo!";
    }

    document.getElementById("tulos").textContent = kaannos;
}