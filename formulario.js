const form = document.getElementById("form-deposito");
const nomeBeneficiario = document.getElementById("nome-beneficiario");
let formEValido = false;
 
function validaNome(nomecompleto) {
    const nomeComoArray = nomecompleto.split(" ");
    return nomeComoArray.length >= 2;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value} </b>`;

    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
            const contanerMensaemSucesso = document.querySelector(".success-message");
            contanerMensaemSucesso.innerHTML = mensagemSucesso;
            contanerMensaemSucesso.style.display = "block";

            nomeBeneficiario.value = "";
            numeroContaBeneficiario.value = "";
            valorDeposito.value = "";
         } else{
            nomeBeneficiario.style.border = "1px solid red";
            document.querySelector(".error-message").style.display = "block";
        }
})

nomeBeneficiario.addEventListener("keyup", function(e) {
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);
      if (!formEValido) {
            nomeBeneficiario.classList.add("error");
            document.querySelector(".error-message").style.display = "block";
        } else{
            nomeBeneficiario.classList.remove("error");
             document.querySelector(".error-message").style.display = "none";
        }
});