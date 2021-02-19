function sum() {
    const a = parseInt(document.getElementById('valor1').value);
    const b = parseInt(document.getElementById('valor2').value);
    const resultado = a + b;
    document.getElementById('result').value = resultado;
}

function sub() {
    const a = parseInt(document.getElementById('valor1').value);
    const b = parseInt(document.getElementById('valor2').value);
    const resultado = a - b;
    document.getElementById('result').value = resultado;
}

function div() {
    const a = parseInt(document.getElementById('valor1').value);
    const b = parseInt(document.getElementById('valor2').value);
    const resultado = a / b;
    document.getElementById('result').value = resultado;
}

function mult() {
    const a = parseInt(document.getElementById('valor1').value);
    const b = parseInt(document.getElementById('valor2').value);
    const resultado = a * b;
    document.getElementById('result').value = resultado;
}
