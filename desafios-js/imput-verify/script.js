let input = document.getElementById('input')
let p = document.getElementById('p')
let btn = document.getElementById('btn')

function parImpar() {
  if (input.value % 2 === 0) {
    p.innerText = 'o numero e par';
  } else {
    p.innerText = 'o numero e impar';
  }
}


