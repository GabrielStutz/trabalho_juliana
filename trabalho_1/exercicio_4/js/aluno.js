function situacao() {
    let grade1 = document.getElementById('grade1').value;
    let grade2 = document.getElementById('grade2').value;
    let grade3 = document.getElementById('grade3').value;
    let grade4 = document.getElementById('grade4').value;
    let media = parseInt((parseInt(grade1) + parseInt(grade2) + parseInt(grade3) + parseInt(grade4)) / 4);
    let situation = '';
    if(media >= 6) {
        document.getElementById('situation').innerHTML = 'Aprovado, sua média foi ' + media;
        document.getElementById('situation').style.backgroundColor = 'green';
    } else if(media < 6 && media > 2) {
        document.getElementById('situation').innerHTML = 'Recuperação, sua média foi ' + media;
        document.getElementById('situation').style.backgroundColor = 'blue';
    } else if(media <= 2) {
        document.getElementById('situation').innerHTML = 'Reprovado, sua média foi ' + media;
        document.getElementById('situation').style.backgroundColor = 'red';
    }
}