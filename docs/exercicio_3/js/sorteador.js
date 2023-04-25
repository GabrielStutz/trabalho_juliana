function sortear() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let sorteado = parseInt(Math.random() * (parseInt(number2) - parseInt(number1) + 1) + parseInt(number1));
    document.getElementById('sorteado').innerHTML = sorteado;
}