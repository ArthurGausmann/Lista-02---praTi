let produto = {
    carne: 40,
    suco: 10,
    chocolate: 8,
    tempero: 25,
    pipoca: 21
}

let vinte =[]
for(let key in produto){
    if(produto[key] >= 20){
        vinte.push(key)
    }
}

let a = ''
for(let i = 0; i < vinte.length; i++){
    if(i < vinte.length - 1){
        a += vinte[i] + ", "
    } else{
        a += "e " + vinte[i]
    }

}

console.log(`Os produtos ${a} custam mais que R$ 20,00`)