//SNACK 1
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// var numero = parseInt(prompt("inserisci un numero"));

// if (numero % 2 == 0) {
//     console.log(numero);
// }
// else {
//     numero = numero + 1;
//     console.log(numero);
// }


//SNACK 2
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
// var nome = ["alberto", "luca", "stefano", "leonardo",];
// var cognome = ["rossi", "verdi", "ferri", "bianchi"];
// var random;
// var random_2;

// for (var i = 0; i < 4; i++) {
//     random = Math.floor(Math.random()*nome.length);
//     random_2 = Math.floor(Math.random()*cognome.length);
//     console.log((nome[random]) + (" ") + (cognome[random_2]));
// }


//SNACK 3
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// var numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// somma = 0;
// dispari = 0;

// for (var i = 0; i < numeri.length; i++) {
// 	dispari = numeri[i];

// 	if (dispari % 2 != 0) {
// 		somma = somma + dispari;
// 	}
// }
// console.log(somma);

//SNACK 4
//Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

// var box_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var box_2 = [1, 2, 3, 4, 5, 6];

// for (var i = box_2.length; i < box_1.length; i++) {
//     box_2.push(i);
// }
// console.log(box_1, box_2);