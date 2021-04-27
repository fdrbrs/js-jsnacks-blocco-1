//L’utente inserisce due parole in successione, con due prompt.

var parola1 = prompt("scrivi una parola");
var parola2 = prompt("scrivi un'altra parola");

//Il software stampa prima la parola più corta, poi la parola più lunga.

if (parola1.length == parola2.length) {
    console.log("Le parole sono delle stessa lunghezza");
}else if (parola1.length < parola2.length) {
    console.log(parola1 + ' ' + parola2);
} else {
    console.log(parola2 + ' ' + parola1);
}