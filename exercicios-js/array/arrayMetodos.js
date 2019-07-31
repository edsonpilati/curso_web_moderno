const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento
console.log(pilotos);

pilotos.push('Verstappen') //adiciona elemento no final da array
console.log(pilotos);

pilotos.shift() //remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton') //adiciona elemento no início da array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //a partir do índice 2 adiciona Bottas e Massa
console.log(pilotos);

// remover 
pilotos.splice(3, 1) // remove um elemento a partir do índice 3
console.log(pilotos);

// slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2) // novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) //índice 4 não entra
console.log(algunsPilotos2);




 

