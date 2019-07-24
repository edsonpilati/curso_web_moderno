// Cadeia de protótipos {prototype chain}
Object.prototype.attr0 = '0' //não faça isso em casa

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr2, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //invoca o método de carro.status() com o super
    }
}

Object.setPrototypeOf(ferrari, carro) // seta no objeto ferrari a referência de carro como pai
Object.setPrototypeOf(volvo, carro) //seta no objeto volvo a referência de carro como pai

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100) //invoca o método do pai(carro)
console.log(volvo.status());

ferrari.acelerarMais(300) //invoca o método de pai(carro)
console.log(ferrari.status());




