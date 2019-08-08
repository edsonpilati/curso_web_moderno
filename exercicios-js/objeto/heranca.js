const ferrari = {
    modelo: 'F40',
    velMax: 324,
    acelerar() {

    },
    acelerar2 = function() {

    }

}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

//todo objeto aponta para Object.prototype como pai

console.log(typeof ferrari);



console.log(ferrari.__proto__);//Acessa o objeto pai de ferrari
console.log(ferrari.__proto__ === Object.prototype); //verifica se o objeto pai de ferrari é Object.prototype = true
console.log(volvo.__proto__ === Object.prototype); //verifica se o objeto pai de ferrari é Object.prototype = true
console.log(Object.prototype.__proto__); //null  

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); //Object é uma função e MeuObjeto é uma função também
console.log(Object.prototype, MeuObjeto.prototype); //Objeto vazio e objeto

console.log(ferrari.prototype);//Undefined pois objeto não é o prototype e sim o pai dele no caso ferrari.__proto__


