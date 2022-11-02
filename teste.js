var resultado = document.getElementById('resultado')

function ultimaParada(combustivel,consumo,postosDeGasolina){
    combustivel = prompt('Quantos litros restam?')
    parseFloat(combustivel)
    consumo = 8 * 2.352 
    postosDeGasolina = [2, 15, 22, 10.2];
    let viagem = ''

    for(let i = 0; i < postosDeGasolina.length ; i++) {
        if ((combustivel - consumo) >= postosDeGasolina[i]){
            viagem = 'O ultimo posto está à ' + postosDeGasolina[i] + 'km'
        } else {
            viagem = '-1'
        }
    }
    resultado.innerHTML = viagem
}

ultimaParada()