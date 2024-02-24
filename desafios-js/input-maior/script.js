let ip1 = document.getElementById('ip1')
let ip2 = document.getElementById('ip2')
let btn = document.getElementById('btn')
let p = document.getElementById('p')

function verify() {
    if (ip1.value > ip2.value ) {
        p.innerText = 'O primeiro numero e maior'
        
    } else if (ip1.value === ip2.value) {
        p.innerText = 'Os numeros sao iguais'
    } else {
        p.innerText = 'O segundo numero e maior'
    } 


    
    
}