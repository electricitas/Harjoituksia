function muokkaa() {
    var teksti = document.getElementById("muokattu")
    teksti.style.fontFamily = "Courier";
    teksti.style.color = "red";
    teksti.style.fontSize = "2em";
}

function nimiTiedot() {
    var etunimi = document.getElementById("etunimi").value;
    var sukunimi = document.getElementById("sukunimi").value;
    console.log("Etunimi on: " + etunimi + " ja sukunimi on: " + sukunimi);
}

function taustanVaihto() {
    var teksti = document.getElementById("vaihto");
    teksti.style.backgroundColor = "Green";
}

function linkinTiedot() {
    var u = document.getElementById("w3r").href;
    alert("The value of the href attribute of the link is :" + u);
    var v = document.getElementById("w3r").hreflang;
    alert("The value of the hreflang attribute of the link is :" + v);
    var w = document.getElementById("w3r").rel;
    alert("The value of the rel attribute of the link is :" + w);
    var x = document.getElementById("w3r").target;
    alert("The value of the target attribute of the link is :" + x);
    var y = document.getElementById("w3r").type;
    alert("The value of the type attribute of the link is :" + y);
}

function lisaaRivi() {
    var x = document.getElementById("tauluja").insertRow(0);
    var y = x.insertCell(0);
    var z = x.insertCell(1);
    y.innerHTML = "Uusi solu 1";
    z.innerHTML = "Uusi solu 2";
}