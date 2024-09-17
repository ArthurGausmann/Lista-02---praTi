let filmes = [
    {
        titulo: 'Piratas do Caribe',
        diretor: 'Espen Sandberg',
        anoLancamento: 2003
    },
    {
        titulo: 'Pulp Fiction',
        diretor: 'Quentin Tarantino',
        anoLancamento: 1995
    },
    {
        titulo: 'Gol - Sonho Impossível',
        diretor: 'Danny Cannon',
        anoLancamento: 2005
    },
    {
        titulo: 'Projeto X',
        diretor: 'Nima Nourizadeh',
        anoLancamento: 2012
    },
    {
        titulo: 'Onze Homens e um Segredo',
        diretor: 'Steven Soderbergh',
        anoLancamento: 2002
    }
]

let titulos = []
filmes.forEach(function(filme) {
    titulos.push(filme.titulo)
})

console.log(titulos)