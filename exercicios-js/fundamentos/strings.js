const escola = "Cod3r"

//índice começa em 0
console.log(escola.charAt(4)) //retorna o valor de índice 4 = r
console.log(escola.charAt(5)) //traz vazio
console.log(escola.charCodeAt(3)) //tabela asc de 3 = 51
console.log(escola.indexOf('3')) // procura na string a posição do caracter 3 e retorna

console.log(escola.substring(1)) // imprime tudo a partir do índice 1 = od3r
console.log(escola.substring(0,3)) //retorna 3 caracteres a partir do índice 0 = Cod
console.log('Escola '.concat(escola).concat("!")) //concatenar
console.log('Escola ' + escola + "!") //concatenar

console.log(escola.replace(3,'e')) //substitui o índice 3 por e
console.log('Ana,Maria,Pedro'.split(',')) //gera um array com 3 elementos 