const calcularIMC = () => {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let imc = peso / (altura * altura);

    let resultado = "";

    if (imc <= 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc <= 24.9) {
        resultado = "Normal";
    } else if (imc <= 29.9) {
        resultado = "Sobrepeso";
    } else if (imc <= 34.9) {
        resultado = "Obesidade 1";
    } else if (imc <= 39.9) {
        resultado = "Obesidade 2";
    } else {
        resultado = "Obesidade 3";
    }

    document.getElementById("resultado").innerHTML = `Seu IMC é: ${imc.toFixed(2)}. Estado: ${resultado}`;
};