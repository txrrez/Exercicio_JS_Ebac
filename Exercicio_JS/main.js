const form = document.getElementById('form-validacao');

function validaCampo(campoMaior, campoMenor){
    const campoB = campoMaior.value;
    const campoA = campoMenor.value;
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let formEValido = false;

    const campo2 = document.getElementById('campo-b');
    const campo1 = document.getElementById('campo-a');
    const mensagemSucesso = `Parabéns! O campo B: ${campo2.value} é maior que o campo A: ${campo1.value}`;

    formEValido = validaCampo(campo2, campo1)
    if(formEValido){
        alert(mensagemSucesso);

        campo2.value = '';
        campo1.value = '';
    } else{
        alert("Puts, que pena! O campo B tem que ser maior que o campo A. Tente novamente!");
    }

})

console.log(form);