const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13   
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

//Jeito 1
Object.entries(pessoa).forEach(element => {
    console.log("Elemento: "+ element[0] + " valor: "+ element[1]);
});

//Jeito 2
Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log("Elemento: "+ chave + " valor: "+ valor);
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //passível de listar ele
    writable: false, //não pode ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1 , o2) // Coloca(concatena) os dados de o1, o2 em dest, caso o objeto seja igual ele sobrescreve a com o valor de 4

console.log(obj);
console.log(dest);

Object.freeze(obj)
obj.c = 1234
console.log(obj);



