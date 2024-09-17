let livro = {
    titulo: 'Harry Potter',
    autor: 'J. K. Rowling',
    ano: 2001,
    genero: 'Fantasia'
}

for(let key in livro){
    if(key != 'editora'){
        livro.editora = 'Disney'
    }
}

console.log(livro)