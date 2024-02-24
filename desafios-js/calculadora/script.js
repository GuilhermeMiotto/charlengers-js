let gerarTabuada = () => {
    let numero = document.getElementById("numero").value;

    if (numero === "") {
        alert("Por favor, digite um número.");
        return;
    }

    let tabuadaList = document.getElementById("tabuada");
    tabuadaList.innerHTML = ""; 

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;

        let listItem = document.createElement("li");
        listItem.textContent = `${numero} x ${i} = ${resultado}`;

        tabuadaList.appendChild(listItem);
    }
};