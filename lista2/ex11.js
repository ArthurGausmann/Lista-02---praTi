// Acho que não entendi esse muito bem

let pedidos = [
    {
        cliente: 'Airton',
        produto: 'Bola de gude',
        quantidade: 7
    },
    {
        cliente: 'Oscar',
        produto: 'Dado',
        quantidade: 4
    },
    {
        cliente: 'Ederson',
        produto: 'Luva',
        quantidade: 2
    },
    {
        cliente: 'Pedro',
        produto: 'Folha',
        quantidade: 5
    }
]

let total = 0
pedidos.forEach(function(pedido){
    total += pedido.quantidade
})

console.log(`Existem ${total} produtos entre ${pedidos.length} clientes`)