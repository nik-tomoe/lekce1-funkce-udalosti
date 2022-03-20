
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 * @param {string} selector
 * @param {int} a
 * @param {int} b
 * 
 */
 function zobrazVysledek(selector, a,b) {
  document.querySelector(selector).innerHTML = secti(a, b);
}
function secti(a, b) {
  let c = a + b;
  return c;
}
console.log('main')

function priKliknuti() {
  let ctverec = document.querySelector(".ctverecek");
  ctverec.style.backgroundColor = 'green';
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");

  let squareElement = document.getElementsByClassName('ctverecek') [0];
  squareElement.innerHTML = "Gratulace, právě jsi spustila tuto funkci!";
  squareElement.style.width='480px';

}
