let clientes = [
    {
        nome: 'Ana',
        idade: 32,
        cidade: 'Petrópolis'
    },
    {
        nome: 'Paula',
        idade: 27,
        cidade: 'Coritiba'
    },
    {
        nome: 'Fernanda',
        idade: 23,
        cidade: 'Pelotas'
    },
    {
        nome: 'Luana',
        idade: 42,
        cidade: 'Tiradentes'
    }
]

let counter = 0
clientes.forEach(function(cliente){
    if(cliente.idade >= 30){
        counter++
    }
})

console.log(`${counter} clientes possuem mais de 30 anos`)