// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

// dichiaro le variabili
var num,pariDisp,numPc,somma,risultato;
// chiedo all utente di sciegliere tra pari e dispari e un numero da 1 a 5
pariDisp = prompt("scegli tra pari o dispari");
num = parseInt(prompt("inserisci un numero da 1 a 5"));

numPc = getRndInteger(1,5);

// somma tra il numero dell'utente piu il numero del pc
somma = num + numPc;
// console.log(somma);
risultato = paridispari(somma);
// console.log(risultato);

// condizioni se hai  vinto o no
if (risultato == pariDisp) {
  document.getElementById('mioid').innerHTML = "hai scelto " + pariDisp + ", la somma dei numeri è " + somma +" : hai vinto."
  // console.log("hai vinto");
} else {
  document.getElementById('mioid').innerHTML = "hai scelto " + pariDisp + ", la somma dei numeri è " + somma +" : hai perso."
  // console.log("hai perso");
}


// funzione per pari o dispari
function paridispari(numpass) {
  var parDisprisult;
  // dichiaro le condizioni
  if (numpass % 2 === 0) {
    parDisprisult = "pari";
    // console.log(somma + " è pari");
  } else {
    parDisprisult = "dispari"
    // console.log(somma + " è dispari");
  }
  return parDisprisult;
}


// funzione per il comp
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
