// Object.preventExtensions => previne o aumento da quantidade de atributos do objeto, permite modificações
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
//Não consegue adicionar atributos, excluir atributos, mas consegue modificar nos atributos
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa);

//Object.freeze = selado + valores constantes

