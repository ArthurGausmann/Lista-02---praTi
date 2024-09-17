let transacoes = [
    {
        tipo: 'in',
        valor: 12.00
    },
    {
        tipo: 'in',
        valor: 20.50
    },
    {
        tipo: 'out',
        valor: 7.00
    },
    {
        tipo: 'in',
        valor: 13.50
    },
    {
        tipo: 'out',
        valor: 10.00
    },
    {
        tipo: 'out',
        valor: 5.50
    },
    {
        tipo: 'in',
        valor: 9.00
    }
]

let saldo = 0
transacoes.forEach(function(transacao){
    if(transacao.tipo == 'in'){
        saldo += transacao.valor
    } else if(transacao.tipo == 'out'){
        saldo -= transacao.valor
    }
})

console.log(`O saldo final ficou em R$ ${saldo}`)