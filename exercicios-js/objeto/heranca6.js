function aula (nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem Vindo', 123)
const aula2 = new aula('Até Breve', 456)

console.log(typeof aula);
console.log(aula1, aula2);

// simulando o new
function novo (f, ...params) {//f = parâmetro para a função construtora, ...params = lista de parâmetros
    const obj = {} //cria o objeto obj
    obj.__proto__ = f.prototype //o prototipo do objeto criado aponte para função prototype
    f.apply(obj, params) //obj = this(contexto) , params = Array
    return obj //retorna o objeto criado
}

const aula3 = novo(aula, 'Bem Vindo', 123)
const aula4 = novo(aula, 'Até Breve', 456)
console.log(aula3, aula4);
