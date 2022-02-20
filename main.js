// tady je místo pro náš program
function zobrazVysledek("#vysledek", a, b) {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
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

function priKliknuti() {
  let ctverec = document.querySelector('.ctverecek');
  ctverec.style.backgroundColor = 'green';
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
}
