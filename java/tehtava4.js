function ajoneuvo() {
    var ika = parseInt(document.getElementById("ika").value);

    var ajoneuvoTeksti;

    if (ika < 16) {
        ajoneuvoTeksti = "Voit ajaa polkupyörää.";
    } else if (ika < 18) {
        ajoneuvoTeksti = "Voit ajaa mopoa.";
    } else {
        ajoneuvoTeksti = "Voit ajaa autoa.";
    }

    alert(ajoneuvoTeksti);
}