// pessoa -> 123 -> {...}
// 
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa); //Nome passa a ser Pedro



// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) //Congela o objeto não permitindo mais alterações (exclusão, inclusão, alteração)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome); // continua sendo Pedro

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante);// Continua sendo João por conta que criou o objeto como Freeze




