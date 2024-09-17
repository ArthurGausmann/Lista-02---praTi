let carrinho = {
    itens: [
        {
            nome: 'Maçã',
            quantidade: 6,
            precoUnitario: 1.20
        },
        {
            nome: 'Banana',
            quantidade: 3,
            precoUnitario: 2.70
        },
        {
            nome: 'Tomate',
            quantidade: 4,
            precoUnitario: 2.25
        },
    ]
}

let total = 0
let values = Object.values(carrinho)

values[0].forEach(function(item){
    let preco = item.quantidade * item.precoUnitario
    total += preco
})

console.log(`O valor total da compra ficará em R$ ${total}`)