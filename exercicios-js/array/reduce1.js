const alunos = [
    { nome: 'João' , nota: 7.3, bolsita: false},
    { nome: 'Maria', nota: 9.2, bolsita: true},
    { nome: 'Pedro', nota: 9.8, bolsita: false},
    { nome: 'Ana', nota: 8.7, bolsita: true}
]

console.log(alunos.map(a => a.nota));//função callback que retorna somente a array com a nota dos elementos 

//função reduce : retorna o próximo elemento da array
//neste caso esta selecionado as notas e acumulando a primeira com a segunda
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) {
    console.log(acumulador, atual);
    return acumulador + atual
})

console.log(resultado); // = 35

