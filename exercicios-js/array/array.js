console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana') //forma não recomendada
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia') //indice 4

aprovados[9] = 'Rafael'
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);//índice 1 fica undefined
console.log(aprovados[2]);//índice 2 contina mesmo deletando o 1

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //Exclui Carlos
aprovados.splice(1, 2) //Exclui Carlos e Ana
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //Exclui Carlos e Ana e adiciona 2 Elementos
console.log(aprovados);













