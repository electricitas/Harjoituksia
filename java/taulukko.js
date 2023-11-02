function naytaTiedot() {
    const etunimi = document.getElementById('etu').value;
    const sukunimi = document.getElementById('suku').value;
    const kulkuvalinta = document.querySelector('input[name="kulkuvalinta"]:checked');
    const lempiaine = document.getElementById('tunti').value;

    let naytettavatTiedot = "Etunimi: " + etunimi + "<br>";
    naytettavatTiedot += "Sukunimi: " + sukunimi + "<br>";

    if (kulkuvalinta) {
        naytettavatTiedot += "Kulku kouluun: " + kulkuvalinta.value + "<br>";
    }

    naytettavatTiedot += "Lempitunti koulussa: " + lempiaine;

    const naytetytTiedotElement = document.getElementById('naytetytTiedot');
    naytetytTiedotElement.innerHTML = naytettavatTiedot;
}