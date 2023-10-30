function laskePisteet() {
    const syotettySana = document.getElementById('sana').value.toUpperCase();
    var pisteet = 0;

    for (var i = 0; i < syotettySana.length; i++) {
        const kirjain = syotettySana[i];
        switch (kirjain) {
            case 'A':
            case 'E':
            case 'I':
            case 'N':
            case 'S':
            case 'T':
                pisteet += 1;
                break;
            case 'O':
            case 'Ä':
            case 'K':
            case 'L':
                pisteet += 2;
                break;
            case 'U':
            case 'M':
                pisteet += 3;
                break;
            case 'Y':
            case 'H':
            case 'J':
            case 'P':
            case 'R':
            case 'V':
                pisteet += 4;
                break;
            case 'Ö':
            case 'D':
                pisteet += 7;
                break;
            case 'B':
            case 'F':
            case 'G':
                pisteet += 8;
                break;
            case 'C':
                pisteet += 10;
                break;
            default:
                pisteet += 12;
                break;
        }
    }

    const pisteLaskuri = document.getElementById('pisteLaskuri');
    pisteLaskuri.textContent = `Pisteet: ${pisteet}`;
}

function lottoArvonta() {
    const numerotPerRivi = 7;
    const numeroidenMaksimiMaara = 40;
    const rivi = [];

    while (rivi.length < numerotPerRivi) {
        const arvottuNumero = Math.floor(Math.random() * numeroidenMaksimiMaara) + 1;
        if (!rivi.includes(arvottuNumero)) {
            rivi.push(arvottuNumero);
        }
    }
    rivi.sort((a, b) => a - b);

    return rivi;
}

function arvoLottonumero() {
    const lottonumero = lottoArvonta();
    const lottonumeroElement = document.getElementById("lottonumero");
    lottonumeroElement.innerHTML = `Arvottu lottorivi: ${lottonumero.join(", ")}`;
}