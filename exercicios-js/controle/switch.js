const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            //break//comando para sair do switch
        case 8: case 7:
            console.log('Aprovado')
            //break
        case 6: case 5: case 4:
            console.log('Reprovado')
            //break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(8.9)
/*imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)*/