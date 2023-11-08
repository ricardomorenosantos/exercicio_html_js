const form = document.getElementById('valid-form');

let formvalid = false;

function numbervalid(campoA, campoB) {
    return campoB > campoA;
}
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let campoA = parseFloat(document.getElementById('n1').value);
    let campoB = parseFloat(document.getElementById('n2').value);

    if (numbervalid(campoA, campoB)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});