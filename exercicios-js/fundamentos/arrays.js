const valores = [7.7, 8.9, 6.4, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10 //adiciona ao array no índice 4 o valor 10
console.log(valores) // = [ 7.7, 8.9, 6.4, 9.2, 10 ]
console.log(valores.length)//tamanho do array

valores.push({id:3}, false, null, 'teste') //novos valores no array
console.log(valores)

console.log(valores.pop()) // retira da array o último elemento
delete valores [0] //apaga o elemento de índice 0 do array
console.log(valores)

console.log(typeof valores) //tipo objeto