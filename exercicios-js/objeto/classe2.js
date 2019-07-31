class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //chama o construtor de Avo
        this.profissao = profissao //objeto instanciado recebe profissão
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') //chama o construtor de Pai
    }
}

const filho = new Filho
console.log(filho);
