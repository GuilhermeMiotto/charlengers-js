let salvarFormulario = () => {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    if (nome === "" || email === "" || telefone === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let formularioData = {
        nome,
        email,
        telefone
    };

    let formularioJSON = JSON.stringify(formularioData);

    localStorage.setItem("formularioData", formularioJSON);

   
};

let carregarFormulario = () => {
    let formularioJSON = localStorage.getItem("formularioData");

    if (formularioJSON) {
        let formularioData = JSON.parse(formularioJSON);

        document.getElementById("nome").value = formularioData.nome;
        document.getElementById("email").value = formularioData.email;
        document.getElementById("telefone").value = formularioData.telefone;
    }
};

window.onload = carregarFormulario;