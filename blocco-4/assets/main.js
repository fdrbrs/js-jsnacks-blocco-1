/* 
Snack 1a:
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var palla = {
    nome: 'palla',
    peso: 10
}

/* 
Snack 1b:
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

palla.peso = Number(prompt('scrivi il peso della palla'));

console.log(palla);