const alunos = [
    { nome: 'João' , nota: 7.3, bolsita: false},
    { nome: 'Maria', nota: 9.2, bolsita: false},
    { nome: 'Pedro', nota: 9.8, bolsita: true},
    { nome: 'Ana', nota: 8.7, bolsita: false}
]

// Desafio 1: Todos os alunos são bolsistas? 
const todosBolsistas = alunos.map(a => a.bolsita).reduce(function verificaSeTodosAlunosBolsistas(bolsistaAnt,bolsistaProx){
    if (bolsistaAnt == true && bolsistaProx == true) {
        return true
    } else 
        return false
})

const todosBolsistas2 = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsita).reduce(todosBolsistas2));
console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsita?
const algumBolsista = (resultado, bolsista) => bolsista || bolsista
console.log(alunos.map(a => a.bolsita).reduce(algumBolsista));


    


