/* 
Adilson Santana tem 25 anos, pesa 130 kg
tem 1,81 de altura e seu IMC é de xxxx 
*/

const nome = "Adilson"
const sobrenome = "Santana"
const Idade = 25
const peso = 130
const altura = 1.81
let anoNascimento
anoNascimento = 2025 - Idade
let imc
imc = peso / (altura * altura)
let classImc


if (imc <= 18.5) {
    classImc = "Magreza"
}
else if(imc >= 18.6 && imc <= 24.9){
     classImc = "Normal"
}
else if(imc >= 25 && imc <= 29.9){
     classImc = "Sobrepeso"
} 
else if (imc > 30){
     classImc = "Obesidade"
}



console.log(`${nome} ${sobrenome} tem ${Idade} anos, pesa ${peso} KG tem ${altura}m`)
console.log("Nasceu em", anoNascimento)
console.log("e seu IMC é de " + imc.toFixed(2))
console.log("sua classificação de IMD é:", classImc)