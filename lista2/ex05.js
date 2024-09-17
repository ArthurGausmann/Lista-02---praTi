let alunos = [
    {
        nome: 'Cleiton',
        nota1: 7.8,
        nota2: 8.7
    },
    {
        nome: 'Felipe',
        nota1: 8.8,
        nota2: 8.2
    },
    {
        nome: 'Airton',
        nota1: 4.9,
        nota2: 6.3
    },
    {
        nome: 'Luan',
        nota1: 6.7,
        nota2: 7.2
    }
]

for(let key of alunos){
    let avg = (key.nota1 + key.nota2) / 2
    console.log(`O aluno ${key.nome} possui uma média de ${avg}`)
}

console.log('Lembrando que a nota mínima para aprovação é 7.0')