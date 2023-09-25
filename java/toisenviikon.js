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
        var muunnettuSalasana = '';

        if (syotettySana.trim() !== '') {
            for (var i = 0; i < syotettySana.length; i++) {
                muunnettuSalasana += syotettySana[i];
                muunnettuSalasana += 'Ö';
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

    function laskeSummaJaKeskiarvo() {
        var luku1 = parseInt(document.getElementById("luku1").value);
        var luku2 = parseInt(document.getElementById("luku2").value);
        var luku3 = parseInt(document.getElementById("luku3").value);
        var luku4 = parseInt(document.getElementById("luku4").value);
        var luku5 = parseInt(document.getElementById("luku5").value);

        var summa = luku1 + luku2 + luku3 + luku4 + luku5;
        var keskiarvo = summa / 5;

        var tulosElementti = document.getElementById("tulo");
        tulosElementti.innerHTML = "Lukujen summa on: " + summa + " ja keskiarvo on: " + keskiarvo;
    }

    function laskeKertotaulu() {
        var luku = parseInt(document.getElementById("luku").value);
        var lause = "";

        for (var i = 1; i <= 10; i++) {
            lause += luku + "x " + i + " = " + (luku * i) + "<br>";
        }

        var lauseElementti = document.getElementById("lause");
        lauseElementti.innerHTML = lause;

    }
