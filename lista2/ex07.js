let produtos = [
    {
        nome: 'Brinquedo',
        preco: 15.00,
        desconto: 1.50
    },
    {
        nome: 'Camisa',
        preco: 45.50,
        desconto: 4.55
    },
    {
        nome: 'Tênis',
        preco: 150.00,
        desconto: 15.00
    }
]

produtos.forEach(function(produto) {
    let discount = (produto.preco - produto.desconto)
    console.log(`${produto.nome} custa R$ ${discount} após a aplicação do desconto`)
})