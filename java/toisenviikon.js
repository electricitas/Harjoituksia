function tulostaParilliset() {
        var parillinenLuku = parseInt(document.getElementById("parillinenLuku").value);
        var tulokset = [];

        if (!isNaN(parillinenLuku) && parillinenLuku % 2 === 0 && parillinenLuku > 0) {
            for (var i = 2; i <= parillinenLuku; i += 2) {
                tulokset.push(i);
            }
        } else {
            tulokset.push("Syötä kelvollinen parillinen luku suurempi kuin 0.");
        }

        document.getElementById("tulokset").textContent = tulokset.join(", ");
    }


    function muunnaSalasanaksi() {
        var syotettySana = document.getElementById("sana").value;
        var muunnettuSalasana = "";

        if (syotettySana.trim() !== "") {
            for (var i = 0; i < syotettySana.length; i++) {
                muunnettuSalasana += syotettySana[i];
                muunnettuSalasana += "Ö";
            }
        } else {
            muunnettuSalasana = "Syötä kelvollinen sana.";
        }

        document.getElementById("salasana").textContent = muunnettuSalasana;
    }

    function tarkastaKirjain() {
        var syotettySana = document.getElementById("sanat").value;
        var loytyykoO = syotettySana.toLowerCase().includes("ö");
        var vastaus = loytyykoO ? "on" : "ei ole";
        document.getElementById("vastaus").textContent = "Sanassa " + syotettySana + " " + vastaus + " \"ö\"-kirjainta.";
    }

function laskeKertoma() {
    var syotettyLuku = parseInt(document.getElementById("luku").value);
    var kertoma = 1;

    if (!isNaN(syotettyLuku) && syotettyLuku >= 0) {
        for (var i = 1; i <= syotettyLuku; i++) {
            kertoma *= i;
        }
    } else {
        kertoma = "Syötä kelvollinen positiivinen luku.";
    }
    document.getElementById("kertoma").textContent = "Kertoma: " + kertoma;
}

function hipHeijaa() {
    var tulostusDiv = document.getElementById("lukujenTulostus");
    tulostusDiv.innerHTML = "";

    for (var i = 1; i <= 100; i++) {
        var teksti = "";
        if (i % 3 === 0) {
            teksti += "hip";
        }
        if (i % 5 === 0) {
            teksti += "heijaa";
        }
        if (teksti === "") {
            teksti = i.toString();
        }

        tulostusDiv.innerHTML += teksti + "<br>";
    }
}

function ekatKymmenen() {
    var tuloste = "";
    for (var i = 1; i <= 10; i++) {
        tuloste += i.toString()
    }
    document.getElementById('lukujenTulostus10').innerHTML = tuloste;
}

function yhteen() {
    var tulostusDiv = document.getElementById("lukujenTulostusY");
    tulostusDiv.innerHTML = "";
    var summa = 0;
    for (var i = 1; i <= 10; i++) {
        summa += i;
    }
    tulostusDiv.innerHTML = "Summa: " + summa;
}

function potenssi() {
    var koro = document.getElementById("kor").value;
    var pote = document.getElementById("pot").value;
    yht = koro;
    for (var p = 1; p < pote; p++) {
        yht *= koro;
    }
    document.getElementById("lukujenTulostusP").innerHTML = "<p>" + yht + "</p>";
}

function findMinMax() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);
    const num4 = parseInt(document.getElementById("num4").value);
    const num5 = parseInt(document.getElementById("num5").value);

    const numbers = [num1, num2, num3, num4, num5];

    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    document.getElementById("maxValue").textContent = max;
    document.getElementById("minValue").textContent = min;
}