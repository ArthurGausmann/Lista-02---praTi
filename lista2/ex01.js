let  carro = {
    marca: 'Chevrolet',
    modelo: 'Agile',
    ano: 2013,
    cor: 'Branco'
}

for(let key in carro){
    console.log(`${key}: ${carro[key]}`)
}