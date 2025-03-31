function capturaForm() {
    const formu = document.querySelector('.formu');
    const resultado = document.querySelector('.result');

    const pessoas = [];

    function recebeForm(evento) {
        evento.preventDefault();

        const nome = formu.querySelector('.nome')
        const sobrenome = formu.querySelector('.sobrenome')
        const peso = formu.querySelector('.peso')
        const altura = formu.querySelector('.altura')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${peso.value}KG e mede ${altura.value}M de altura! <br></p>` 

        console.log(pessoas)
    }




    formu.addEventListener('submit', recebeForm);
}
capturaForm();


