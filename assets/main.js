//SNACK 2

//L’utente inserisce due parole in successione, con due prompt.

/* var parola1 = prompt("scrivi una parola");
var parola2 = prompt("scrivi un'altra parola");
 */
//Il software stampa prima la parola più corta, poi la parola più lunga.

/* if (parola1.length == parola2.length) {
    console.log("Le parole sono delle stessa lunghezza");
}else if (parola1.length < parola2.length) {
    console.log(parola1 + ' ' + parola2);
} else {
    console.log(parola2 + ' ' + parola1);
} */

//SNACK 3

var n1 = Number(prompt("1.Inserisci un numero"));
var n2 = Number(prompt("2.Inserisci un numero"));
var n3 = Number(prompt("3.Inserisci un numero"));
var n4 = Number(prompt("4.Inserisci un numero"));
var n5 = Number(prompt("5.Inserisci un numero"));
var n6 = Number(prompt("6.Inserisci un numero"));
var n7 = Number(prompt("7.Inserisci un numero"));
var n8 = Number(prompt("8.Inserisci un numero"));
var n9 = Number(prompt("9.Inserisci un numero"));
var n10 = Number(prompt("10.Inserisci un numero"));

var somma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;

console.log(somma);

document.getElementById("msg").innerHTML = somma;