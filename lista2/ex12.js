let estoque = [
    {
        produto: 'Papel higiênico',
        quantidade: 50,
        minimo: 80
    },
    {
        produto: 'Shampoo',
        quantidade: 90,
        minimo: 60
    },
    {
        produto: 'Sabonete',
        quantidade: 70,
        minimo: 100
    }
]

let falta = []
estoque.forEach(function(stock){
    if(stock.quantidade < stock.minimo){
        stock.quantidade += stock.quantidade
        falta.push(stock.produto)
        console.log(`${stock.produto} está em falta`)
    }
})

console.log('Comprando produtos...')
console.log(`O(s) produto(s) ${falta} já foram reestocados`)
