console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () { //adiciona a função String do javascript a função reverse que retorna a string invertida de acordo com o return abaixo
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse()); //inverte a string

Array.prototype.first = function () { //adiciona uma função com o nome de first na função Array do javascript
    return this[0]
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

String.prototype.toString = function () { //nunca fazer
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse());






