let empresa = {
    departamentos: [
        {
            nome: 'Marketing',
            f1: 'Douglas',
            f2: 'Rodrigo',
            f3: 'Anderson'
        },
        {
            nome: 'Financeiro',
            f1: 'Yago',
            f2: 'Thomas',
            f3: 'Oliver'
        },
        {
            nome: 'Administrativo',
            f1: 'João',
            f2: 'Lucas',
            f3: 'Kyan'
        }
    ]
}

let values = Object.values(empresa)

for(let value of values[0]){
    console.log(`${value.f1}, ${value.f2} e ${value.f3} trabalham na área ${value.nome}`)
}