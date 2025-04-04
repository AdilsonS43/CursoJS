const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector('.inputPeso')
    const inputAltura = event.target.querySelector('.inputAltura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const categImc = getCategoria(imc);

    const msg = `<p> O seu IMC é ${imc}, Categoria: (${categImc})`

    setResultado(msg, true);

})

function getImc(peso, altura) {
    const imc = peso / (altura * altura)
    return imc.toFixed(2);
}

function getCategoria(imc) {
    const categ = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return categ[5];
    if (imc >= 34.9) return categ[4];
    if (imc >= 29.9) return categ[3];
    if (imc >= 24.9) return categ[2];
    if (imc >= 18.5) return categ[1];
    if (imc < 18.5) return categ[0];
}

function createParagrafos() {
    const p = document.createElement('p');
    return p
}

function setResultado(msg, isvalid) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';
    const p = createParagrafos();
    if (isvalid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p)
}