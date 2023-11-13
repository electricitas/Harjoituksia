function syota() {
    var avain = document.getElementById("syottoAvain").value;
    var arvo = document.getElementById("syottoArvo").value;

    if (avain.trim() !== "" && arvo.trim() !== "") {
        localStorage.setItem(avain, arvo);

        document.getElementById("syottoAvain").value = "";
        document.getElementById("syottoArvo").value = "";
        luoPoistaNappi(avain);
    } else {
        alert("Syötä avain ja arvo!");
    }
}

function luoPoistaNappi(avain) {
    var poistaNappi = document.createElement("button");
    poistaNappi.textContent = "Poista";
    poistaNappi.onclick = function () {
        localStorage.removeItem(avain);
        document.getElementById("pvSyotto").removeChild(document.getElementById(avain));
    };
    var pElementti = document.createElement("p");
    pElementti.id = avain;
    pElementti.textContent = avain + ": " + localStorage.getItem(avain);
    pElementti.appendChild(poistaNappi);
    document.getElementById("pvSyotto").appendChild(pElementti);
}

function listaa() {
    document.getElementById("pvSyotto").innerHTML = "";
    var avaimet = Object.keys(localStorage);

    for (var i = 0; i < avaimet.length; i++) {
        var avain = avaimet[i];
        var arvo = localStorage.getItem(avain);
        var pElementti = document.createElement("p");
        pElementti.id = avain;
        pElementti.textContent = avain + ": " + arvo;
        pElementti.appendChild(luoPoistaNappi(avain));
        document.getElementById("pvSyotto").appendChild(pElementti);
    }
}

setTimeout(function () {
    localStorage.clear();
    document.getElementById("pvSyotto").innerHTML = "";
}, 10000);
