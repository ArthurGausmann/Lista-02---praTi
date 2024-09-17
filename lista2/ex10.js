let vendas = [
    {
        produto: 'Arroz',
        quantidade: 2,
        valor: 14.00
    },
    {
        produto: 'Queijo',
        quantidade: 3,
        valor: 10.00
    },
    {
        produto: 'Banana',
        quantidade: 2,
        valor: 7.00
    },
    {
        produto: 'Molho',
        quantidade: 5,
        valor: 12.00
    },
]

let custo = 0
vendas.forEach(function(venda){
    custo += venda.valor
})

console.log(`O cliente irá gastar R$ ${custo} ao total`) 