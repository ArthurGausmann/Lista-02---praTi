let funcionarios = [
    {
        nome:  'Luiz',
        cargo: 'CEO',
        salario: 40000
    },
    {
        nome: 'Nico',
        cargo: 'Engenheiro chefe',
        salario: 20000
    },
    {
        nome: 'Paulo',
        cargo: 'Gerente de Vendas',
        salario: 12000
    },
    {
        nome: 'Sergio',
        cargo: 'Supervisor',
        salario: 8000
    }
]

for(let key of funcionarios){
    if(key.salario > 15000){
        console.log(`${key.nome} possui um alto salário`)
    }
}