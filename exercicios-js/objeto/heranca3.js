const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) //cria a filha com os atributos de pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo); //preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true} //writable(false): não pode ser escrito, enumerable(true): permite ser listado  
})

console.log(filha2.nome); // Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));//caso comente a linha 4 exibe vazio
console.log(Object.keys(filha2));//caso comente a linha 13 exibe vazio


for(let key in filha2){ //varra os atributos do objeto e atribui a variável key(nome e corCabelo do objeto pai)
    console.log(key); //exibe todos os atributos inclusive os herdados
}

for(let key in filha2){ //varra os atributos do objeto e atribui a variável key(nome e corCabelo do objeto pai)
    filha2.hasOwnProperty(key) ? //verifica se o atributo é do prório objeto
        console.log(key) : 
    console.log((`Por Herança: ${key}`));  
}