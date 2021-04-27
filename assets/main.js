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

//Il software deve chiedere per 10 volte all’utente di inserire un numero.

/* var n1 = Number(prompt("1.Inserisci un numero"));
var n2 = Number(prompt("2.Inserisci un numero"));
var n3 = Number(prompt("3.Inserisci un numero"));
var n4 = Number(prompt("4.Inserisci un numero"));
var n5 = Number(prompt("5.Inserisci un numero"));
var n6 = Number(prompt("6.Inserisci un numero"));
var n7 = Number(prompt("7.Inserisci un numero"));
var n8 = Number(prompt("8.Inserisci un numero"));
var n9 = Number(prompt("9.Inserisci un numero"));
var n10 = Number(prompt("10.Inserisci un numero"));

//Il programma stampa la somma di tutti i numeri inseriti.

var somma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;

console.log(somma); */

/* document.getElementById("msg").innerHTML = somma;
 */

//con ciclo for

/* var somma = 0;
for (var i = 0; i < 10; i++){
    var numeroUtente = Number(prompt("inserisci un numero"));
    somma += numeroUtente
}

document.getElementById("msg").innerHTML = somma; */

//SNACK4

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby

/* var invitati = ["Henry James", "Andrew Le Vot", "Jay Gatsby", "Myrtle Wilson", "Nick Carraway", "Daisy Buchanan", "Jordan Baker", "Fabio"]; */

//chiedi all’utente il suo nome

/* var utente = prompt("Inserisca qua il Suo nome:"); */

//e comunicagli se può partecipare o no alla festa.

/* if (invitati.includes(utente)) {
    msg = "~ Sei uffcialmente invitato alla festa di Gatsby ~";
} else {
    msg = "~ Purtroppo il Suo nome non e' in lista ~";
}

document.getElementById("msg").innerHTML = msg;
console.log(msg); */

//SNACK5

//Crea un array vuoto.

var array = [];
var input;

//Chiedi per 6 volte all’utente di inserire un numero,se è dispari inseriscilo nell’array

for (var i = 0; i < 6; i++) {
    var input = Number(prompt("inserisci un numero"));
    if (input % 2 == 0){
    } else {
        array.push(input)
    }
}

console.log(array);

document.getElementById("msg").innerHTML = '~' + array + '~';