const numero = Number(prompt('Digite um núimero para ser processado'))
const numeroSelec = document.getElementById('numeroSelecionado')
const texto = document.getElementById('texto')
let inteiro 
let notANumber

if (Number.isInteger(numero) == true){
    inteiro = 'Sim'
} else {
    inteiro = 'Não'
}

if (Number.isNaN(numero) == true){
     notANumber = 'Sim'
} else {
     notANumber = 'Não'
}


numeroSelec.innerHTML = numero
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`
texto.innerHTML += `<p>${numero} É inteiro: ${inteiro}</p>`
texto.innerHTML += `<p>${numero} É NaN: ${notANumber}</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`