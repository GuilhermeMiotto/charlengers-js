let input = document.getElementById("input");
let p = document.getElementById("p");
let btn = document.getElementById("btn");

function verify() {
  if (input.value == 1995) {
    p.innerText = "Parabens, voce acertou!";
    p.style.color = 'green'
  } else {
    p.innerText = "Infelizmente voce errou!";
    p.style.color = 'red'
  }
}
