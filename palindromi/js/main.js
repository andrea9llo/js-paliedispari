// Una funzione per capire se la parola è
// palindroma

// // dichiaro le variabili
// var parolaUtente,checkparola;
// // chiedo all utente di inserire una parola
// parolaUtente = prompt("Inserisci una parola");
//
// checkparola = parola(parolaUtente);
// console.log( checkparola);
//
//
//
// // funzione
// function parola(str) {
//   var splString = str.split("");
//   var revArray = splString.reverse();
//   var jnArray = revArray.join("");
//   var palindromi;
//   if (jnArray == parolaUtente) {
//     palindromi = parolaUtente + " è una parola palindroma";
//   } else {
//     palindromi = parolaUtente + " non è una parola palindroma";
//   }
//   return palindromi;
// }



// chiedo all utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");

//richiamo la funzione
palindroma(parolaUtente);


// formulo la funzione da utilizzare
function palindroma(parolaIns) {
  // creo una variabile con una stringa vuota per poi concatenarci la parola reversata
  var reverse = "";
  // uso il ciclo per reversare la parola scritta dall'utente
  for (var i = parolaIns.length -1; i >= 0; i--) {
    // creo la variabile per creare una stringa con la parola reversata
    reverse = reverse + parolaIns[i];

  }
  // console.log(reverse);
  // dichiaro le condizioni per sapere se la parola è polindroma o no
  if (parolaIns == reverse) {
    console.log(parolaIns + " è polindroma");
  } else {
    console.log(parolaIns + " non è polindroma");
  }
}
