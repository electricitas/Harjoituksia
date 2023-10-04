function jotain() {
    console.log("hei");
}
jotain();

function summa(a, b) {
    console.log(a + b);
}
summa(2, 5);

function num(a, b) { 
console.log(a - b);
}
num(6, 2);

function kerto(a, b) {
    console.log(a * b);
}
kerto(3, 3)

function jako(a, b) {
    console.log(a / b);
}
jako(15, 3)

function lampo(cel) {
    var fah = cel * 9 / 5 + 32;
    console.log("Celsius-asteet: " + cel + " vastaa Fahrenheit-asteina: " + fah);
}

lampo(23);

function lamppo(fah) {
    var cel = (fah - 32) * 5 / 9;
    console.log("Fahrenheit-asteet: " + fah + " vastaa Celsius-asteina: " + cel);
}
lamppo(98);

function mailit(maili) {
    var km = 1.609 * maili;
    console.log("Maili lukema: " + maili + " vastaa Kilometreina:" + km);
}
mailit(74);

function kilometrit(km) {
    var maili = km / 1.609;
    console.log("Kilometri lukema: " + km + " vastaa Maileina: " + maili)
}
kilometrit(74);

function sentti(tuumat) {
    var sentit = tuumat * 2.54;
    console.log("Tuumat: " + tuumat + " on Sentteina: " + sentit)
}
sentti(74);

function tuuma(sentit) {
    var tuumat = sentit / 2.54;
    console.log("Sentit: " + sentit + " on Tuumina: " + tuumat)
}
tuuma(74);

function yardit(yard) {
    var metri = yard * 0.9144;
    console.log("Yardit: " + yard + " on Metreina: " + metri + " metria");
}

yardit(74);

function metrit(metri) {
    var yard = metri / 0.9144;
    console.log("Metrit: " + metri + " on Yardeina: " + yard + " yardia");
}

metrit(74);

