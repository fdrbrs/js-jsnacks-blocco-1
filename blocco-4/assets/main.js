//SNACK JS BLOCCO 4

/* 
Snack 1a:
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

/* var palla = {
    nome: 'palla',
    peso: 10
} */

/* 
Snack 1b:
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

/* palla.peso = Number(prompt('scrivi il peso della palla'));

console.log(palla); */

/* 
Snack 2:
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D )
*/

triangolo = {
    base: 10,
    altezza: 4
}

var area = (triangolo.base * triangolo.altezza) / 2;

console.log(area);

var catetoMaggiore = Math.sqrt(Math.pow(triangolo.base,2) - Math.pow(triangolo.altezza,2));

console.log(catetoMaggiore);

var perimetro = triangolo.altezza + triangolo.base + catetoMaggiore;

console.log(perimetro);