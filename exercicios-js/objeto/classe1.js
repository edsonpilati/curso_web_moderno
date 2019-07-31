class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {//função construtora do objeto
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano 
        this.lancamentos = []
    }

    //função para adicionar a array de lancamentos
    addLancamentos(...lancamentos) {//array como parâmetro
        lancamentos.forEach(l => this.lancamentos.push(l))//percorre a array passada como parâmetro e adiciona na array lancamentos do objeto
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario());

