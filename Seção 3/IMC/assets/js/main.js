const form = document.querySelector('.form')

function capturaForm(evento) {
    evento.preventDefault();

    const peso = parseFloat(document.querySelector('.inputPeso').value)
    const altura = parseFloat(document.querySelector('.inputAltura').value)
    let IMC
    IMC = peso / (altura * altura)
    let categoriaIMC
    const resultado = document.querySelector('.resultado')


    if (IMC <= 18.5) {
        categoriaIMC = "Abaixo do peso"
    }
    else if (IMC >= 18.6 && IMC <= 24.9) {
        categoriaIMC = "Peso normal"
    }
    else if (IMC >= 25 && IMC <= 29.9) {
        categoriaIMC = "Sobrepeso"
    }
    else if (IMC >= 30 && IMC <= 34.9) {
        categoriaIMC = "Obesidade grau 1"
    }
    else if (IMC >= 35 && IMC <= 39.9) {
        categoriaIMC = "Obesidade grau 2"
    }
    else if (IMC > 40) {
        categoriaIMC = "Obesidade grau 3"
    }

    resultado.innerHTML = `<p> O seu IMC é ${IMC.toFixed(2)}, Categoria: ${categoriaIMC}`

    console.log(IMC)
    console.log(categoriaIMC)
}
form.addEventListener('submit', capturaForm);