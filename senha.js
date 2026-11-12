const form = document.getElementById("formRedefinir");
const email = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailDigitado = email.value.trim();

    if (emailDigitado === "") {
        alert("Por favor, informe seu e-mail!");
        return;
    }

    if (!email.checkValidity()) {
        alert("Digite um e-mail válido!");
        return;
    }

    alert("Solicitação de redefinição de senha enviada!");

    form.reset();
});