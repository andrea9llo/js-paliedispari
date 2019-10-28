// Una funzione per capire se la parola è
// palindroma

// dichiaro le variabili
var parolaUtente,checkparola;
// chiedo all utente di inserire una parola
parolaUtente = prompt("Inserisci una parola");

checkparola = parola(parolaUtente);
console.log( checkparola);



// funzione
function parola(str) {
  var splString = str.split("");
  var revArray = splString.reverse();
  var jnArray = revArray.join("");
  var palindromi;
  if (jnArray == parolaUtente) {
    palindromi = parolaUtente + " è una parola palindroma";
  } else {
    palindromi = parolaUtente + " non è una parola palindroma";
  }
  return palindromi;
}
