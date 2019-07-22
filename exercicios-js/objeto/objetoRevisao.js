// coleção dinâmica de pares e chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto);

const carro = {//objeto
    modelo: 'A4', //atributo
    valor: 89000,
    proprietario: { // objeto
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //array de objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {//função
        //..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Avenida Tiradentes'
//console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro);
console.log(carro.condutores);

//console.log(carro.condutores.length); --dara erro por conta que condutores não existe mais, caso não delete condutores exibirá o tamanho da string de objetos
 

 