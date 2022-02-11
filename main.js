// tady je místo pro náš program



function result() {
  let result = document.querySelector("#vysledek").innerHTML = secti(4, 5);
  
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector(".ctverecek").innerHTML = "Gratulace!";
}

function colorChange() {
  let square = document.querySelector(".ctverecek");
  square.style.backgroundColor = "green"
}

