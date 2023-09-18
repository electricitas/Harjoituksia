function etsiSuurempi(luku1, luku2) {
    if (luku1 < 2) {
        return "luku on suurempi";
    } else if (luku2 > 5) {
        return "luku on suurin"
    }
   
}

var ensimmainenLuku = 5;
var toinenLuku = 10;

var suurempiLuku = etsiSuurempi(ensimmainenLuku, toinenLuku);
console.log("Suurempi luku on: " + suurempiLuku);