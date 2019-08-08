function MinhaFuncao() {}
console.log(typeof MinhaFuncao);
console.log(MinhaFuncao.prototype.attr1 = 0);
console.log(typeof MinhaFuncao.__proto__);

 
console.log(MinhaFuncao.prototype.__proto__ == Object.prototype);



console.log(MinhaFuncao.prototype); 

const obj1 = new MinhaFuncao
const obj2 = new MinhaFuncao

console.log(obj1.__proto__ === obj2.__proto__); //true
console.log(MinhaFuncao.prototype === obj1.__proto__); //true

MinhaFuncao.prototype.nome = 'Anônimo'
MinhaFuncao.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MinhaFuncao.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MinhaFuncao).__proto__ === MinhaFuncao.prototype);
console.log(MinhaFuncao.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);





